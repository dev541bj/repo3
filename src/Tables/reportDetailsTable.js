import React from "react";
import { Redirect } from "react-router-dom";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import moment from "moment";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Cyan from "@material-ui/core/colors/cyan";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import Add from "@material-ui/icons/Add";
import ReportTemplate from "../pdf-templates/report-template";

import API from "../utils/API";
import maxBy from "lodash/maxBy";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const categoryRows = [
  { id: "category", label: "Category" },
  { id: "hours_by_category", label: "Hours" },
];

const billableRows = [
  { id: "therapists", label: "Therapist" },
  { id: "billable_hours", label: "Billable Hours" },
];

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: Cyan[800],
    color: theme.palette.common.white,
    fontSize: 18,
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

// Table Header

class EnhancedTableHead extends React.Component {
  static defaultProps = { order: "asc" };
  createSortHandler = (property) => (report) => {
    this.props.onRequestSort(report, property);
  };

  render() {
    const { order, orderBy, reportType } = this.props;
    const rows =
      reportType === "Hours By Category" ? categoryRows : billableRows;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            (row) => (
              <CustomTableCell
                key={row.id}
                padding={row.disablePadding ? "none" : "default"}
                align="center"
                sortDirection={orderBy === row.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </CustomTableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  reportType: PropTypes.string.isRequired,
};

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(1) * 3,
    overflowX: "auto",
    alignItems: "center",
  },
  appBar: {
    position: "relative",
    backgroundColor: Cyan[800],
  },

  table: {},
  tableWrapper: {
    overflowX: "auto",
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
  chartWrapper: {
    position: "relative",
    marginTop: "60px",
    padding: "20px 20px 120px 54px",
    height: "480px",
    width: "100%",
  },
  chart: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  chartBarArea: {
    position: "absolute",
    width: "100%",
    height: "340px",
    display: "flex",
    flexDirection: "row",
  },
  chartBar: {
    position: "relative",
    height: "100%",
    flexGrow: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  chartBarLine: {
    width: "30px",
    backgroundColor: "#02838f",
  },
  chartBarLabel: {
    position: "absolute",
    height: "40px",
    bottom: "-46px",
    fontSize: "12px",
    color: "#52524f",
    padding: "0px 2px",
  },
  chartAxisArea: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderBottom: "2px solid #52524f",
  },
  chartAxisSection: {
    position: "relative",
    flexGrow: "1",
    borderTop: "2px solid #52524f",
  },
  chartAxisLabel: {
    position: "absolute",
    top: "-8px",
    left: "-40px",
    marginRight: "10px",
    textAlign: "right",
    fontSize: "12px",
    color: "#52524f",
  },
  chartAxisOriginLabel: {
    position: "absolute",
    top: "332px",
    left: "-100%",
    marginRight: "10px",
    textAlign: "right",
    fontSize: "12px",
    color: "#52524f",
  },
});

class ReportDetailsTable extends React.Component {
  static defaultProps = { TableSortLabel: "asc" };
  state = {
    order: "asc",
    open: false,
    orderBy: "",
    reportData: [],
    newReportData: [],
    curReportId: "",
    redirect: false,
    report: 0,
    reportType: "",
    startDate: "",
    endDate: "",
    page: 0,
    rowsPerPage: 5,
  };

  async componentDidMount() {
    try {
      const { data: reports } = await API.get("/members/getreports");
      const reportData = reports.data || [];
      this.setState({
        reportData,
      });

      this.setState({ report: this.props.location.state.curReportId }, () => {
        this.changeContentWithReportID();
      });

      const { startDate, endDate, reportType } = this.state;

      let response;
      if (reportType === "Hours By Category") {
        response = await API.get("/members/catreport", {
          params: { startDate, endDate },
        });
      } else {
        response = await API.get("/members/billreport", {
          params: { startDate, endDate },
        });
      }

      const newReportData = response.data.data || [];
      this.setState({
        newReportData,
      });
    } catch (error) {
      console.log("report fetch error: ", error);
    }
  }

  componentWillUnmount() {}

  changeContentWithReportID() {
    const report = this.state.reportData.find(
      ({ id }) => id === this.state.report
    );
    if (report) {
      const { id, report_type, start_date, end_date } = report;
      this.setState({
        reportType: report_type,
        startDate: moment(start_date).format("YYYY-MM-DD"),
        endDate: moment(end_date).format("YYYY-MM-DD"),
      });
    }
  }

  handleRequestSort = (report, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (report, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (report) => {
    this.setState({ rowsPerPage: report.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDownload = async (data) => {
    try {
      const blob = await pdf(
        <ReportTemplate
          data={data}
          reportType={this.state.reportType}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      ).toBlob();
      saveAs(blob, "Report.pdf");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { classes } = this.props;
    const {
      newReportData,
      order,
      orderBy,
      rowsPerPage,
      page,
      reportType,
    } = this.state;
    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, newReportData.length - page * rowsPerPage);
    const data = stableSort(newReportData, getSorting(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );

    const chartHeight = 340;
    let maxHour;
    let range = 5;
    let step = 0.5;
    if (data && data.length > 0) {
      maxHour =
        data && data.length > 0
          ? reportType === "Hours By Category"
            ? maxBy(data, "hours_by_category").hours_by_category
            : maxBy(data, "billable_hours").billable_hours
          : 0;
      range =
        maxHour <= 5
          ? 5
          : maxHour <= 10
          ? 10
          : maxHour <= 25
          ? 25
          : maxHour <= 50
          ? 50
          : maxHour <= 100
          ? 100
          : maxHour <= 500
          ? 500
          : maxHour <= 1000
          ? 1000
          : 10000;
      step = range / 10;
    }
    let steps = [];
    for (var i = step; i <= range; i += step) {
      steps.push(i.toFixed(2).toString());
    }

    return (
      <Container maxWidth="md">
        <Button
          variant="contained"
          className={classes.button}
          onClick={(e) => {
            e.preventDefault();
            this.handleDownload(data);
          }}
        >
          <Add className={classNames(classes.leftIcon, classes.iconSmall)} />
          Download Report
        </Button>

        {newReportData.length > 0 ? (
          <>
            <Paper className={classes.root}>
              <div className={classes.tableWrapper}>
                <Table className={classes.table} aria-labelledby="tableTitle">
                  <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={this.handleRequestSort}
                    rowCount={newReportData.length}
                    reportType={reportType}
                  />
                  <TableBody>
                    {data.map((n) => {
                      return (
                        <TableRow
                          hover
                          className={classes.row}
                          tabIndex={-1}
                          key={n.id}
                        >
                          <TableCell align="center">
                            {reportType === "Hours By Category"
                              ? n.category
                              : n.therapists}
                          </TableCell>
                          <TableCell align="center">
                            {reportType === "Hours By Category"
                              ? n.hours_by_category
                              : n.billable_hours}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: 49 * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={newReportData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                  "aria-label": "Previous Page",
                }}
                nextIconButtonProps={{
                  "aria-label": "Next Page",
                }}
                onChangePage={this.handleChangePage}
                onChangerowsPerPage={this.handleChangeRowsPerPage}
              />
            </Paper>
            <Paper style={{ height: "420px" }}>
              <div className={classes.chartWrapper}>
                <div className={classes.chart}>
                  <div className={classes.chartAxisArea}>
                    {steps.reverse().map((step) => (
                      <div className={classes.chartAxisSection}>
                        <div className={classes.chartAxisLabel}>{step}</div>
                      </div>
                    ))}
                    <div className={classes.chartAxisOriginLabel}>0.00</div>
                  </div>
                  <div className={classes.chartBarArea}>
                    {data.map((d) => (
                      <div className={classes.chartBar}>
                        <div
                          className={classes.chartBarLine}
                          style={{
                            height: `${
                              ((reportType === "Hours By Category"
                                ? d.hours_by_category
                                : d.billable_hours) *
                                chartHeight) /
                              range
                            }px`,
                          }}
                        />
                        <div className={classes.chartBarLabel}>
                          {reportType === "Hours By Category"
                            ? d.category
                            : d.therapists}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Paper>
          </>
        ) : (
          "this report does not show anything!"
        )}
      </Container>
    );
  }
}

ReportDetailsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ReportDetailsTable));

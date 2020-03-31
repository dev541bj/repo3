import React from "react";
import { Redirect } from "react-router-dom";
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
import moment from "moment";

import API from "../utils/API";

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
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const categoryRows = [
  { id: "category", label: "Category" },
  { id: "hours_by_category", label: "Hours" }
];

const billableRows = [
  { id: "therapists", label: "Therapist" },
  { id: "billable_hours", label: "Billable Hours" }
];

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: Cyan[800],
    color: theme.palette.common.white,
    fontSize: 18
  },
  body: {
    fontSize: 12
  }
}))(TableCell);

// Table Header

class EnhancedTableHead extends React.Component {
  static defaultProps = { order: "asc" };
  createSortHandler = property => report => {
    this.props.onRequestSort(report, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {categoryRows /*billableRows (if reportType = "Billable Hours"*/
            .map(
              row => (
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
  orderBy: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    //width: "60%",
    marginTop: theme.spacing(1) * 3,
    overflowX: "auto",
    alignItems: "center"
  },
  appBar: {
    position: "relative",
    backgroundColor: Cyan[800]
  },

  table: {},
  tableWrapper: {
    overflowX: "auto"
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

// Table Body

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
    rowsPerPage: 5
  };

  async componentDidMount() {
    try {
      const { data: reports } = await API.get("/members/getreports");
      const reportData = reports.data || [];
      this.setState({
        reportData
      });

      this.setState({ report: this.props.location.state.curReportId }, () => {
        this.changeContentWithReportID();
      });

      const { startDate, endDate } = this.state;
      // *** If reportType = "Hours By Category", then pull the "/members/catreport" route ***
      const { data: newReports } = await API.get("/members/catreport", {
        params: { startDate, endDate }
      });
      console.log("here is the category report information ", newReports);
      const newReportData = newReports.data || [];
      this.setState({
        newReportData
      });
      // *** If reportType = "Billable Hours", then pull the "/members/billreport" route (query needed below) ***
      /*  const { data: newReports } = await API.get("/members/catreport", {
        params: { startDate, endDate }
      });
      console.log("here is the category report information ", newReports);
      const newReportData = newReports.data || [];
      this.setState({
        newReportData */
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
        endDate: moment(end_date).format("YYYY-MM-DD")
      });
      console.log("here is the report data pulled: ", report);
      console.log("here is the report type pulled: ", this.state.reportType);
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

  handleChangeRowsPerPage = report => {
    this.setState({ rowsPerPage: report.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const {
      newReportData,
      order,
      orderBy,
      rowsPerPage,

      page
    } = this.state;
    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, newReportData.length - page * rowsPerPage);

    return (
      <Container maxWidth="md">
        <Button
          variant="contained"
          onClick={this.handleClickOpenAdd}
          className={classes.button}
        >
          <Add className={classNames(classes.leftIcon, classes.iconSmall)} />
          Download Report
        </Button>

        {newReportData.length > 0 ? (
          <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
              <Table className={classes.table} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={this.handleRequestSort}
                  rowCount={newReportData.length}
                />
                <TableBody>
                  {stableSort(newReportData, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(n => {
                      return (
                        <TableRow
                          hover
                          className={classes.row}
                          tabIndex={-1}
                          key={n.id}
                        >
                          {/* If reportType = "Hours By Category", the have a table with the following cells below */}
                          <TableCell align="center">{n.category}</TableCell>
                          <TableCell align="center">
                            {n.hours_by_category}
                          </TableCell>
                          {/* If reportType = "Billable Hours", the have a table with the following cells below */}

                          {/*   <TableCell align="center">{n.therapists}</TableCell>
                          <TableCell align="center">
                            {n.billable_hours}
                            </TableCell> */}
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: 49 * emptyRows
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
                "aria-label": "Previous Page"
              }}
              nextIconButtonProps={{
                "aria-label": "Next Page"
              }}
              onChangePage={this.handleChangePage}
              onChangerowsPerPage={this.handleChangeRowsPerPage}
            />
          </Paper>
        ) : (
          "this report does not show anything!"
        )}
      </Container>
    );
  }
}

ReportDetailsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ReportDetailsTable));

import React from "react";
import { Redirect } from "react-router-dom";
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

const rows = [
  { id: "category", disablePadding: true, label: "Category" },
  { id: "hours_by_category", label: "Hours" }
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
          {rows.map(
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
  //rowCount: PropTypes.number.isRequired,
};

const styles = theme => ({
  root: {
    //width: "60%",
    marginTop: theme.spacing(1) * 3,
    // marginLeft: theme.spacing(1) * 30,
    overflowX: "auto",
    alignItems: "center"
  },
  appBar: {
    position: "relative",
    backgroundColor: Cyan[800]
  },

  table: {
    //minWidth: 1020,
  },
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
      // change the below route to just pull all report details
      const { data: reports } = await API.get("/members/getreports");
      const reportData = reports.data || [];
      this.setState({
        reportData
      });
      this.setState({ report: this.props.location.state.curReportId }, () => {
        this.changeContentWithReportID();
        //this.changeInitialsWithMemberId();
      });
      /*   this.setState({ report: this.props.location.state.curMemberId }, () => {
        console.log("props ID: ", this.props.location.state.curMemberId);
        console.log("report ID: ", this.state.report);
        this.changeContentWithReportID();
      }); */
      const { data: selectedReport } = await API.get("/members/catreport");
      const newReportData = selectedReport.data || [];
      this.setState({
        newReportData
      });
    } catch (error) {
      const reportData = this.state.reportData;
      const newReportData = this.state.newReportData;
      const curReportId = this.state.curReportId;
      const report = this.state.report;
      console.log("report fetch error: ", error);
      console.log("here is the report info: ", reportData);
      console.log("here is the report ID being passed: ", report);
      /* console.log("report fetch error: ", error);
      console.log(
        "Here's the initial report error length: ",
        reportData.length
      );
      console.log("Here's the new report error length: ", newReportData.length);
      console.log("curReportId : ", curReportId);
      console.log("report : ", report); */
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
        //report: id,
        reportType: report_type,
        startDate: start_date,
        endDate: end_date
      });
      console.log("report ID: ", this.state.report);
      console.log("report type: ", this.state.reportType);
      console.log("start date: ", this.state.startDate);
      console.log("end date: ", this.state.endDate);
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

  handleClickRedirect = (reportId = 0) => {
    this.setState({
      redirectDocs: true,
      curReportId: reportId
    });
  };

  // isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { newReportData, order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, newReportData.length - page * rowsPerPage);

    return (
      <Container maxWidth="md">
        {newReportData.length > 0 ? (
          <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
              <Table className={classes.table} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  //numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={this.handleRequestSort}
                  rowCount={newReportData.length}
                />
                <TableBody>
                  {stableSort(newReportData, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(n => {
                      // const isSelected = this.isSelected(n.id);
                      return (
                        <TableRow
                          hover
                          className={classes.row}
                          tabIndex={-1}
                          key={n.id}
                          // onClick={() => this.handleClickRedirect(n.id)}
                        >
                          <TableCell align="center">{n.category}</TableCell>
                          <TableCell align="center">
                            {n.hours_by_category}
                          </TableCell>
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
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Paper>
        ) : (
          "you do not have any reports! click the button above to create one!"
        )}
      </Container>
    );
  }
}

ReportDetailsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReportDetailsTable);

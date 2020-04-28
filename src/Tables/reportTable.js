import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Checkbox from "@material-ui/core/Checkbox";
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
import AddIcon from "@material-ui/icons/Add";
import DownloadIcon from "@material-ui/icons/GetApp";

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
  return stabilizedThis.map((el) => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: "report_type", disablePadding: true, label: "Report Type" },
  { id: "start_date", label: "Start" },
  { id: "end_date", label: "End" },
  { id: "create_date", label: "Created" },
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
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          <CustomTableCell></CustomTableCell>
          {rows.map(
            (row) => (
              <CustomTableCell
                key={row.id}
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
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  //rowCount: PropTypes.number.isRequired,
};

const styles = (theme) => ({
  root: {
    //width: "60%",
    marginTop: theme.spacing(1) * 3,
    // marginLeft: theme.spacing(1) * 30,
    overflowX: "auto",
    alignItems: "center",
  },
  appBar: {
    position: "relative",
    backgroundColor: Cyan[800],
  },

  table: {
    //minWidth: 1020,
  },
  tableWrapper: {
    overflowX: "auto",
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: { main: "#b2dfdb" },
  },
});

// Table Body

class ReportsTable extends React.Component {
  static defaultProps = { TableSortLabel: "asc" };
  state = {
    order: "asc",
    open: false,
    orderBy: "",
    selected: [],
    reportData: [],
    curReportId: 0,
    redirect: false,
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
      console.log(
        "here's the data length from the main report page: ",
        reportData.length
      );
    } catch (error) {
      const reportData = this.state.reportData;
      console.log("report fetch error: ", error);
      console.log("Here's the error length: ", reportData.length);
    }
  }

  componentWillUnmount() {}

  handleSelectAllClick = (event) => {
    if (event.target.checked) {
      this.setState((state) => ({
        selected: state.reportData.map((n) => n.id),
      }));
      return;
    }
    this.setState({ selected: [] });
  };
  /* 
  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  }; */

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

  handleClickRedirect = (reportId = 0) => {
    this.setState({
      redirect: true,
      curReportId: reportId,
    });
  };

  isSelected = (id) => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const {
      reportData,
      order,
      orderBy,
      rowsPerPage,
      page,
      selected,
    } = this.state;
    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, reportData.length - page * rowsPerPage);

    return (
      <Container maxWidth="md">
        {this.state.redirect ? (
          <Redirect
            to={{
              pathname: `/reports/view/${this.state.curReportId}`,
              state: { curReportId: this.state.curReportId },
            }}
          />
        ) : null}

        {reportData.length > 0 ? (
          <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
              <Table className={classes.table} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={this.handleRequestSort}
                  onSelectAllClick={this.handleSelectAllClick}
                  rowCount={reportData.length}
                />
                <TableBody>
                  {stableSort(reportData, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((n) => {
                      const isSelected = this.isSelected(n.id);
                      return (
                        <TableRow
                          hover
                          className={classes.row}
                          tabIndex={-1}
                          key={n.id}
                          selected={isSelected}
                        >
                          <TableCell>
                            <MuiThemeProvider theme={theme}>
                              <DownloadIcon
                              /*  onClick={(event) =>
                                  this.handleClick2(event, n.id)
                                } */
                              />
                            </MuiThemeProvider>
                          </TableCell>
                          <TableCell
                            onClick={() => this.handleClickRedirect(n.id)}
                            align="center"
                          >
                            {n.report_type}
                          </TableCell>
                          <TableCell align="center">{n.start_date}</TableCell>
                          <TableCell align="center">{n.end_date}</TableCell>
                          <TableCell align="center">{n.create_date}</TableCell>
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
              count={reportData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                "aria-label": "Previous Page",
              }}
              nextIconButtonProps={{
                "aria-label": "Next Page",
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

ReportsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportsTable);

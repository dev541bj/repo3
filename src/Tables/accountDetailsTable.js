import React from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
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
import AccountTemplate from "../pdf-templates/account-template";
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
  return order === "desc" ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: "date", disablePadding: true, label: "Date" },
  { id: "clients", disablePadding: true, label: "Client" },
  { id: "description", disablePadding: true, label: "Description" },
  { id: "session_cost", disablePadding: true, label: "Session Cost" },
  { id: "amount", disablePadding: true, label: "Payment" },
  { id: "balance", label: "Balance" },
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

class EnhancedTableHead extends React.Component {
  createSortHandler = (property) => (event) => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            (row) => (
              <CustomTableCell
                key={row.id}
                align="center"
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
              >
                <TableSortLabel active={orderBy === row.id} direction={order} onClick={this.createSortHandler(row.id)}>
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
  //rowCount: PropTypes.number.isRequired,
};

const styles = (theme) => ({
  root: {
    //width: "60%",
    marginTop: theme.spacing(1) * 3,
    // marginLeft: theme.spacing(1) * 30,
    overflowX: "auto",
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
  appBar: {
    position: "relative",
    backgroundColor: Cyan[800],
  },
  flex: {
    flex: 1,
  },
});

class AccountDetailsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "asc",
      open: false,
      orderBy: "",
      accountDetailData: [],
      selectedIndex: null,
      page: 0,
      rowsPerPage: 10,
      redirect: false,
      curClientId: 0,
      account: "",
      curBillEmail: localStorage.getItem("BillEmail"),
      curStartDate: localStorage.getItem("StartDate"),
      curEndDate: localStorage.getItem("EndDate"),
    };
  }

  async componentDidMount() {
    try {
      const obj = {
        bEmail: localStorage.getItem("BillEmail"),
        startDate: localStorage.getItem("StartDate"),
        endDate: localStorage.getItem("EndDate"),
      };

      API.post("/accounts/accountdetailsbe", obj).then(async (res) => {
        console.log(res.data);
        this.setState({
          accountDetailData: res.data.data,
        });
      });
    } catch (error) {
      console.log("Account detail data fetching error: ", error);
    }
  }

  componentWillUnmount() {}

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // isSelected = id => this.state.selected.indexOf(id) !== -1;

  handleDownload = async () => {
    try {
      const accountDetailData = this.state.accountDetailData;
      const bEmail = localStorage.getItem("BillEmail");
      const balance = +localStorage.getItem("Balance");

      const { data: clients } = await API.get("/clients/all");

      const client = clients.data.find((c) => c.billing_email === bEmail);

      const blob = await pdf(<AccountTemplate data={accountDetailData} client={client} balance={balance} />).toBlob();
      saveAs(blob, "Accounts.pdf");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { classes } = this.props;
    const { accountDetailData, order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, accountDetailData.length - page * rowsPerPage);

    return (
      <Container maxWidth="lg">
        <Button
          variant="contained"
          className={classes.button}
          onClick={(e) => {
            e.preventDefault();
            this.handleDownload();
          }}
        >
          <Add className={classNames(classes.leftIcon, classes.iconSmall)} />
          Download Invoice
        </Button>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table /* className={classes.table} */ aria-labelledby="tableTitle">
              <EnhancedTableHead
                //numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onRequestSort={this.handleRequestSort}
                rowCount={accountDetailData.length}
              />
              <TableBody>
                {stableSort(accountDetailData, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((n, i) => {
                    // const isSelected = this.isSelected(n.id);
                    return (
                      <TableRow hover className={classes.row} tabIndex={-1} key={i}>
                        <TableCell align="center" key="date">
                          {n.date}
                        </TableCell>
                        <TableCell align="center" key="client">
                          {n.clients || n.payor}
                        </TableCell>
                        <TableCell align="center" key="description">
                          {n.description}
                        </TableCell>
                        <TableCell align="center" key="session_cost">
                          {n.session_costs || n.session_cost || 0}
                        </TableCell>
                        <TableCell align="center" key="amount">
                          {n.amount || 0}
                        </TableCell>
                        {n.balance >= "0" ? (
                          <TableCell style={{ color: "green" }} align="center">
                            {"-$"}
                            {Math.abs(n.balance)}
                          </TableCell>
                        ) : (
                          <TableCell style={{ color: "red" }} align="center">
                            {"$"}
                            {Math.abs(n.balance)}
                          </TableCell>
                        )}
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[10, 20, 50]}
            component="div"
            count={accountDetailData.length}
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
      </Container>
    );
  }
}

AccountDetailsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountDetailsTable);

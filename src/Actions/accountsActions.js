import React from "react";
import PropTypes from "prop-types";
import { withStyles, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import AutoRenew from "@material-ui/icons/Autorenew";
import Visibility from "@material-ui/icons/Visibility";
import Search from "@material-ui/icons/Search";
import Clear from "@material-ui/icons/Clear";
import DownloadIcon from "@material-ui/icons/GetApp";
import Delete from "@material-ui/icons/Delete";
import DateRange from "@material-ui/icons/DateRange";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AccountTemplate from "../pdf-templates/account-template";

moment().toDate();

const styles = (theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    align: "center",
    // width: "31%"
  },

  button: {
    margin: theme.spacing(1),
    align: "center",
    /* this is text color */ color: theme.palette.getContrastText("#b2dfdb"),
    backgroundColor: "#b2dfdb",
    "&:hover": {
      backgroundColor: "#80cbc4",
    },
  },

  leftIcon: {
    marginRight: theme.spacing(1),
  },

  iconSmall: {
    fontSize: 20,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: { main: "#b2dfdb" },
  },
});

const theme2 = createMuiTheme({
  palette: {
    primary: { main: "#00838f" },
  },
});

class AccountsActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      openTransactions: false,
      openDateRange: false,
      payor: "",
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment().add(1, "month").format("YYYY-MM-DD"),
      invoiceDate: "",
      invoiceAmount: "",
      dueDate: "",
      invoiceNotes: "",
      openSearchDlg: false,
      searchKeyWord: this.props.keyword,
    };
  }

  /* change of team member dropdown */
  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleSearchClick = () => {
    this.setState({
      openSearchDlg: true,
    });
  };

  /* show date range diaglog box */
  handleClickOpenDateRange = () => {
    this.setState({ openDateRange: true });
  };

  /* close date range diaglog box */
  handleCloseDateRange = () => {
    this.props.onUpdated(this.state.startDate, this.state.endDate, this.state.searchKeyWord);
    this.setState({ openDateRange: false });
  };

  /* cancel date range diaglog box */
  handleCancelDateRange = () => {
    this.setState({
      openDateRange: false,
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment().add(1, "month").format("YYYY-MM-DD"),
    });
  };

  handleDateChangeStart = (date) => {
    this.setState({ startDate: date.format("YYYY-MM-DD") });
  };

  handleDateChangeEnd = (date) => {
    this.setState({ endDate: date.format("YYYY-MM-DD") });
  };

  handleChangeSearchKeyword = (event) => {
    this.setState({
      searchKeyWord: event.target.value,
    });
  };

  handleSearchCloseAction = () => {
    this.setState({
      openSearchDlg: false,
    });
  };

  handleSearchAction = () => {
    this.props.onUpdated(this.state.startDate, this.state.endDate, this.state.searchKeyWord);
    this.setState({
      openSearchDlg: false,
    });
  };

  handleSearchReset = () => {
    this.setState({
      openSearchDlg: false,
    });
    this.props.onUpdated(this.state.startDate, this.state.endDate, this.state.searchKeyWord);
  };

  handleResetClick = () => {
    // localStorage.setItem("startDate", "");
    // localStorage.setItem("endDate", "");
    this.setState({
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment().add(1, "month").format("YYYY-MM-DD"),
      searchKeyWord: "",
    });
    this.props.onUpdated(moment().format("YYYY-MM-DD"), moment().add(1, "month").format("YYYY-MM-DD"), "");
  };

  handleDownload = async () => {
    try {
      if (this.props.data && this.props.data.length > 0) {
        const blob = await pdf(<AccountTemplate data={this.props.data} />).toBlob();
        saveAs(blob, "Accounts.pdf");
      } else {
        console.log("no data selected");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* Date range button */}
        <Button variant="contained" onClick={this.handleClickOpenDateRange} className={classes.button}>
          <DateRange className={classNames(classes.leftIcon, classes.iconSmall)} />
          Balance Range
        </Button>

        {/* Date Range dialog box */}
        <Dialog open={this.state.openDateRange} onClose={this.handleCloseV}>
          <DialogTitle id="form-dialog-title">Balance Range</DialogTitle>
          <DialogContent>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid container>
                <MuiThemeProvider theme={theme2}>
                  <DatePicker
                    inputVariant="outlined"
                    margin="normal"
                    className={classes.textField2}
                    label="Start Date"
                    value={this.state.startDate}
                    onChange={this.handleDateChangeStart}
                  />
                </MuiThemeProvider>
              </Grid>
              <MuiThemeProvider theme={theme2}>
                <Grid container>
                  <DatePicker
                    inputVariant="outlined"
                    margin="normal"
                    className={classes.textField2}
                    label="End Date "
                    value={this.state.endDate}
                    onChange={this.handleDateChangeEnd}
                  />
                </Grid>
              </MuiThemeProvider>
            </MuiPickersUtilsProvider>
          </DialogContent>
          <MuiThemeProvider theme={theme2}>
            <DialogActions>
              <Button onClick={this.handleCancelDateRange} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleCloseDateRange} color="primary">
                Ok
              </Button>
            </DialogActions>
          </MuiThemeProvider>
        </Dialog>
        {/* Download button */}

        <Button
          variant="contained"
          className={classes.button}
          onClick={(e) => {
            e.preventDefault();
            this.handleDownload();
          }}
        >
          <DownloadIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
          Download
        </Button>

        {/* Auto-invoice button */}
        <Button variant="contained" className={classes.button}>
          <AutoRenew className={classNames(classes.leftIcon, classes.iconSmall)} />
          Auto-Invoice
        </Button>

        {/* Show inactive button */}
        <Button variant="contained" className={classes.button}>
          <Visibility className={classNames(classes.leftIcon, classes.iconSmall)} />
          Show Inactive
        </Button>

        {/* Search button */}

        <Button variant="contained" className={classes.button} onClick={this.handleSearchClick}>
          <Search className={classNames(classes.leftIcon, classes.iconSmall)} />
          Search
        </Button>
        {/* Search dialog box */}
        <Dialog open={this.state.openSearchDlg} onClose={this.handleSearchCloseAction}>
          <DialogTitle id="form-search-dialog-title">Search</DialogTitle>
          <DialogContent>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid container>
                <MuiThemeProvider theme={theme2}>
                  <TextField
                    id="form-search-dlg-textfield"
                    className={classes.textField2}
                    label="Keyword"
                    margin="normal"
                    variant="outlined"
                    value={this.state.searchKeyWord}
                    onChange={this.handleChangeSearchKeyword}
                  />
                </MuiThemeProvider>
              </Grid>
            </MuiPickersUtilsProvider>
          </DialogContent>
          <MuiThemeProvider theme={theme2}>
            <DialogActions>
              <Button onClick={this.handleSearchCloseAction} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleSearchAction} color="primary">
                Search
              </Button>
            </DialogActions>
          </MuiThemeProvider>
        </Dialog>
        {/* Reset button */}
        <Button variant="contained" className={classes.button} onClick={this.handleResetClick}>
          {/*  <Delete
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  /> */}
          Clear Search
        </Button>

        {/*
                <Button
                  variant="contained"
                  onClick={this.handleClickOpen2}
                  className={classes.button}
                >
                  <Visibility
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Show
                </Button>
   */}
      </div>
    );
  }
}

AccountsActions.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

export default withStyles(styles)(AccountsActions);

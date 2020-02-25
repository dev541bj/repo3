import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import AutoRenew from "@material-ui/icons/Autorenew";
import Visibility from "@material-ui/icons/Visibility";
import Search from "@material-ui/icons/Search";
import Delete from "@material-ui/icons/Delete";
import Add from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import API from "../utils/API";

moment().toDate();

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    align: "center"
    // width: "31%"
  },

  button: {
    margin: theme.spacing.unit,
    align: "center",
    /* this is text color */ color: theme.palette.getContrastText("#b2dfdb"),
    backgroundColor: "#b2dfdb",
    "&:hover": {
      backgroundColor: "#80cbc4"
    }
  },

  leftIcon: {
    marginRight: theme.spacing.unit
  },

  iconSmall: {
    fontSize: 20
  },
  textField: {
    //marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 300
  }
});

const theme = createMuiTheme({
  palette: {
    primary: { main: "#b2dfdb" }
  }
});

const theme2 = createMuiTheme({
  palette: {
    primary: { main: "#00838f" }
  }
});

const reportTypes = [
  {
    value: "Billable Hours",
    label: "Billable Hours"
  },

  {
    value: "Hours By Category",
    label: "Hours By Category"
  }
];

class AccountsActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openBox: false,
      reportType: "",
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment()
        .add(1, "month")
        .format("YYYY-MM-DD")
    };
  }

  onSubmit() {
    // const accountsResp = await API.get("/accounts/accounts2");
    // this.setState({
    //   accountData: accountsResp.data.data
    // });

    try {
      const obj = {
        reportType: this.state.reportType,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        createDate: moment().format("YYYY-MM-DD")
      };
      API.post("/members/addreport", obj).then(async res => {
        this.setState({
          openBox: false
        });
      });
    } catch (error) {
      console.log("Report submit: ", error);
    }
  }

  /*   async componentDidMount() {
    await this.updateTableContent();
  }

  async updateTableContent() {
    try {
      const accountsResp = await API.get("/accounts/accounts");
      const accountData = accountsResp.data.data;

      this.setState({ accountData });
    } catch (error) {
      console.log("Accounts data fetching error: ", error);
    }
  }
  */

  /* change of dropdown */
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  /* show date range diaglog box */
  handleClickOpenAdd = () => {
    this.setState({ openBox: true });
  };

  /* cancel date range diaglog box */
  handleCancelAdd = () => {
    this.setState({
      openBox: false,
      reportType: "",
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment()
        .add(1, "month")
        .format("YYYY-MM-DD")
    });
  };

  handleDateChangeStart = date => {
    this.setState({ startDate: date.format("YYYY-MM-DD") });
  };

  handleDateChangeEnd = date => {
    this.setState({ endDate: date.format("YYYY-MM-DD") });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Container maxWidth="md">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {/* Date range button */}
              <Button
                variant="contained"
                onClick={this.handleClickOpenAdd}
                className={classes.button}
              >
                <Add
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                />
                Create Report
              </Button>

              {/* Date Range dialog box */}
              <Dialog open={this.state.openBox} onClose={this.handleCloseV}>
                <DialogTitle id="form-dialog-title">Report Builder</DialogTitle>
                <DialogContent>
                  <MuiThemeProvider theme={theme2}>
                    <TextField
                      id="report_type"
                      select
                      label="Report Type"
                      className={classes.textField}
                      value={this.state.reportType}
                      onChange={this.handleChange("reportType")}
                      margin="normal"
                      variant="outlined"
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                    >
                      {reportTypes.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </MuiThemeProvider>
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
                    <Button onClick={this.handleCancelAdd} color="primary">
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        this.onSubmit();
                      }}
                      color="primary"
                    >
                      Ok
                    </Button>
                  </DialogActions>
                </MuiThemeProvider>
              </Dialog>
            </Grid>
          </Container>
        </Grid>
      </div>
    );
  }
}

AccountsActions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountsActions);

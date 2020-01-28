import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
  marginGoalTracker: {
    height: theme.spacing(3)
  },
  textFieldGoalTracker: {
    // marginLeft: theme.spacing(1)
    marginRight: theme.spacing(1),
    width: 650
  }
});

const theme = createMuiTheme({
  palette: {
    primary: { main: "#b2dfdb" }
  }
});

class PercentageScale extends React.Component {
  state = {
    scaleResult: null,
    scaleResult2: null,
    scaleResult3: null,
    addScale2: false,
    addScale3: false
  };

  handleChangeScaleResult1 = event => {
    this.setState({ scaleResult: event.target.value });
  };

  handleChangeScaleResult2 = event => {
    this.setState({ scaleResult2: event.target.value });
  };

  handleChangeScaleResult3 = event => {
    this.setState({ scaleResult3: event.target.value });
  };

  handleAdd2ndScale = name => event => {
    this.setState({
      [name]: event.target.checked,
      addScale2: !this.state.addScale2,
      addScale3: null,
      scaleResult2: null
    });
  };

  handleAdd3rdScale = name => event => {
    this.setState({
      [name]: event.target.checked,
      addScale3: !this.state.addScale3,
      scaleResult3: null
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <FormControl component="fieldset">
          <MuiThemeProvider theme={theme}>
            <TextField
              id="first-goal"
              label="Title"
              //value={this.state.firstText}
              className={classes.textFieldGoalTracker}
              marginGoalTracker="normal"
              variant="outlined"
            />
            <RadioGroup
              aria-label="first-group"
              name="first-group"
              //   value={this.state.scaleResult}
              onChange={this.handleChangeScaleResult1}
              row
            >
              <FormControlLabel
                checked={this.state.scaleResult === "Never (0%)"}
                value="Never (0%)"
                control={<Radio color="primary" />}
                label="Never (0%)"
                labelPlacement="end"
              />
              <FormControlLabel
                checked={this.state.scaleResult === "Rarely (<50%)"}
                value="Rarely (<50%)"
                control={<Radio color="primary" />}
                label="Rarely (<50%)"
                labelPlacement="end"
              />
              <FormControlLabel
                checked={this.state.scaleResult === "Inconsistent (51-79%)"}
                value="Inconsistent (51-79%)"
                control={<Radio color="primary" />}
                label="Inconsistent (51-79%)"
                labelPlacement="end"
              />
              <FormControlLabel
                checked={this.state.scaleResult === "Consistent (>80%)"}
                value="Consistent (>80%)"
                control={<Radio color="primary" />}
                label="Consistent (>80%)"
                labelPlacement="end"
              />
            </RadioGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={this.state.addScale2}
                  onChange={this.handleAdd2ndScale("addScale2")}
                  value={this.state.addScale2}
                />
              }
              label="add additional goal"
            />

            {/*     Second Goal  */}
            {this.state.addScale2 ? (
              <TextField
                id="second-goal"
                label="Title"
                //value={this.state.firstText}
                className={classes.textFieldGoalTracker}
                marginGoalTracker="normal"
                variant="outlined"
              />
            ) : null}
            {this.state.addScale2 ? (
              <RadioGroup
                aria-label="position"
                name="second-group"
                //value={this.state.scaleResult2}
                onChange={this.handleChangeScaleResult2}
                row
              >
                <FormControlLabel
                  checked={this.state.scaleResult2 === "Never (0%)"}
                  value="Never (0%)"
                  control={<Radio color="primary" />}
                  label="Never (0%)"
                  labelPlacement="end"
                />
                <FormControlLabel
                  checked={this.state.scaleResult2 === "Rarely (<50%)"}
                  value="Rarely (<50%)"
                  control={<Radio color="primary" />}
                  label="Rarely (<50%)"
                  labelPlacement="end"
                />
                <FormControlLabel
                  checked={this.state.scaleResult2 === "Inconsistent (51-79%)"}
                  value="Inconsistent (51-79%)"
                  control={<Radio color="primary" />}
                  label="Inconsistent (51-79%)"
                  labelPlacement="end"
                />
                <FormControlLabel
                  checked={this.state.scaleResult2 === "Consistent (>80%)"}
                  value="Consistent (>80%)"
                  control={<Radio color="primary" />}
                  label="Consistent (>80%)"
                  labelPlacement="end"
                />
              </RadioGroup>
            ) : null}

            {this.state.addScale2 ? (
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={this.state.addScale3}
                    onChange={this.handleAdd3rdScale("addScale3")}
                    value={this.state.addScale3}
                  />
                }
                label="Add additional goal"
              />
            ) : null}
            {/*  Third Goal */}
            {this.state.addScale3 ? (
              <TextField
                id="second-goal"
                label="Title"
                //value={this.state.firstText}
                className={classes.textFieldGoalTracker}
                marginGoalTracker="normal"
                variant="outlined"
              />
            ) : null}
            {this.state.addScale3 ? (
              <RadioGroup
                aria-label="position"
                name="second-group"
                //value={this.state.scaleResult2}
                onChange={this.handleChangeScaleResult3}
                row
              >
                <FormControlLabel
                  checked={this.state.scaleResult3 === "Never (0%)"}
                  value="Never (0%)"
                  control={<Radio color="primary" />}
                  label="Never (0%)"
                  labelPlacement="end"
                />
                <FormControlLabel
                  checked={this.state.scaleResult3 === "Rarely (<50%)"}
                  value="Rarely (<50%)"
                  control={<Radio color="primary" />}
                  label="Rarely (<50%)"
                  labelPlacement="end"
                />
                <FormControlLabel
                  checked={this.state.scaleResult3 === "Inconsistent (51-79%)"}
                  value="Inconsistent (51-79%)"
                  control={<Radio color="primary" />}
                  label="Inconsistent (51-79%)"
                  labelPlacement="end"
                />
                <FormControlLabel
                  checked={this.state.scaleResult3 === "Consistent (>80%)"}
                  value="Consistent (>80%)"
                  control={<Radio color="primary" />}
                  label="Consistent (>80%)"
                  labelPlacement="end"
                />
              </RadioGroup>
            ) : null}
          </MuiThemeProvider>
        </FormControl>
      </Grid>
    );
  }
}

export default withStyles(styles)(PercentageScale);

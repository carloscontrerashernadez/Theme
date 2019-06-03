import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  },
  card: {
    marginBottom: theme.spacing.unit * 1
  }
});

class ComposedTextField extends React.Component {
  state = {
    name: "Composed TextField"
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          {" "}
          <Typography variant="h6" gutterBottom>
            TEXT FIELDS
          </Typography>
          <div className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="component-simple">Name</InputLabel>
              <Input
                id="component-simple"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="component-helper">Name</InputLabel>
              <Input
                id="component-helper"
                value={this.state.name}
                onChange={this.handleChange}
                aria-describedby="component-helper-text"
              />

              <FormHelperText id="component-helper-text">
                Some important helper text
              </FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl} disabled>
              <InputLabel htmlFor="component-disabled">Name</InputLabel>
              <Input
                id="component-disabled"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <FormHelperText>Disabled</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl} error>
              <InputLabel htmlFor="component-error">Name</InputLabel>
              <Input
                id="component-error"
                value={this.state.name}
                onChange={this.handleChange}
                aria-describedby="component-error-text"
              />

              <FormHelperText id="component-error-text">Error</FormHelperText>
            </FormControl>
          </div>{" "}
        </CardContent>
      </Card>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComposedTextField);

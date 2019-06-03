import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  card: {
    marginBottom: theme.spacing.unit * 1
  }
});

function RaisedButtons(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          RAISED BUTTONS
        </Typography>
        <Button variant="contained" className={classes.button}>
          Default
        </Button>
        <Button variant="contained" className={classes.button} color="primary">
          Primary
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          color="secondary"
        >
          Secondary
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          color="secondary"
          disabled
        >
          Disabled
        </Button>
      </CardContent>
    </Card>
  );
}
RaisedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(RaisedButtons);

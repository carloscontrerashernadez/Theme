import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  card: {
    marginBottom: theme.spacing.unit * 1
  }
});

function OutlineButtons(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        {" "}
        <Typography variant="h6" gutterBottom>
          OUTLINE BUTTONS
        </Typography>
        <Button variant="outlined" className={classes.button}>
          Default
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Primary
        </Button>
        <Button variant="outlined" color="secondary" className={classes.button}>
          Secondary
        </Button>
        <Button variant="outlined" disabled className={classes.button}>
          Disabled
        </Button>
      </CardContent>
    </Card>
  );
}
OutlineButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlineButtons);

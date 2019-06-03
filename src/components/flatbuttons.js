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
  }
});

function FlatButtons(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        {" "}
        <Typography variant="h6" gutterBottom>
          FLAT BUTTONS
        </Typography>
        <Button className={classes.button}>Default</Button>
        <Button color="primary" className={classes.button}>
          Primary
        </Button>
        <Button color="secondary" className={classes.button}>
          Secondary
        </Button>
        <Button disabled className={classes.button}>
          Disabled
        </Button>
      </CardContent>
    </Card>
  );
}

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FlatButtons);

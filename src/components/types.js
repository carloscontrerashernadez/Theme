import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 500
  },

  card: {
    marginBottom: theme.spacing.unit * 1
  }
});
function Types(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        {" "}
        <Typography variant="h6" gutterBottom>
          TYPOGRAPHY
        </Typography>
        <div className={classes.root}>
          <Typography component="h2" variant="h1" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>

          <Typography variant="caption" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" gutterBottom>
            overline text
          </Typography>
        </div>{" "}
      </CardContent>
    </Card>
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Types);

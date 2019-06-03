import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import FlatButtons from "./flatbuttons";
import OutlineButtons from "./outlinebuttons";
import RaisedButtons from "./raisedbuttons";
import TextFields from "./textfields";
import SimpleSelects from "./selects";
import Types from "./types";
import Typography from "@material-ui/core/Typography";
import MultipleSelect from "./multipleselect";

const styles = theme => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.2em",
      background: fade(theme.palette.primary.contrastText, 0.05)
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main
    }
  },
  root: {
    overflowY: "scroll",
    height: "100%",
    "&>div": {
      margin: "1em"
    }
  }
});

class Examples extends React.Component {
  state = {
    age: "",
    name: "hai"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Theming Examples
        </Typography>
        <FlatButtons />
        <OutlineButtons />
        <RaisedButtons />
        <TextFields />
        <SimpleSelects />
        <MultipleSelect />
        <Types />
      </div>
    );
  }
}

Examples.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Examples);

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import { fade } from "@material-ui/core/styles/colorManipulator";

import Examples from "./examples.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TextFields from "../components/textfields.js";
import SimpleSelect from "./selects.js";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { MissionsIcon } from "../theme/icons.js";
import { EnvironmentsIcon } from "../theme/icons.js";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import CardMedia from "@material-ui/core/CardMedia";

const drawerWidth = 240;

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
    flexGrow: 1,
    zIndex: 1,
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    background: theme.palette.primary.mainGradient
  },
  menulist: {
    background: "none"
  },

  activeNav: {
    "&:focus": {
      background: fade(theme.palette.primary.contraster, 0.2),
      "&>div>svg": {
        fill: theme.palette.primary.main,

        filter: "url(#svgGlow)"
      },
      "&:after": {
        position: "absolute",
        top: "0",
        right: "0",
        display: "block",
        content: "' '",
        background: "white",
        boxShadow:
          "inset 0px 0px 10px" +
          theme.palette.primary.main +
          ", 0px 0px 20px" +
          theme.palette.primary.main +
          ", 0px 0px 10px" +
          theme.palette.primary.main,
        width: ".5em",
        height: "100%"
      }
    }
  },

  MuiListItem: {
    root: {
      background: "red !important"
    }
  },
  svgFilter: {
    position: "absolute",
    top: "-99999px"
  },
  navIcon: {
    marginLeft: theme.spacing.unit
  },

  navIconSwitch: {
    transform: "translateX(-20%)",
    marginRight: "0"
  },
  navSwitchText: {
    fontSize: "1em",
    paddingLeft: "0",
    "& h6": {
      fontSize: "1em"
    }
  },
  navText: {
    fontSize: "1em"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,

    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },

  hide: {
    display: "none"
  },
  drawerPaper: {
    background: theme.palette.primary.invGradient + "!important",
    position: "initial",
    overflowX: "hidden",
    height: "calc(100vh)",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),

    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },

  wrapper: {
    position: "relative",
    height: "100%",
    overflowX: "visible",
    "&>div": {
      height: "100%"
    }
  },
  toolbar: {
    "&>button": {
      transform: "scale(.7)",
      background: theme.palette.primary.main,
      transition: ".3s all "
    },

    "&>button:hover": {
      transform: "scale(1)",
      transition: ".3s all "
    },

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translateX(50%) translateY(-50%)",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,

    marginTop: theme.spacing.unit * 3,

    marginLeft: theme.spacing.unit * 3,

    maxHeight: "100%",
    overflowY: "auto"
  },
  logo: {
    width: "100%",
    textAlign: "right",

    "&>svg": {
      width: "auto",
      height: "2.5em",
      float: "right",
      margin: ".5em 1.25em"
    },
    "& #Layer_2": {
      fill: theme.palette.primary.contraster
    }
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    activeSection: <Examples />
  };

  handleSectionChange = sectionName => {
    const components = {
      missions: <Missions />,
      theme: <Examples />,
      account: <AccountApproval />,
      steps: <LearningPathsTabs />,
      content: <ContentManagement />
    };

    this.setState({
      activeSection: components[sectionName]
    });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme, themeswitch } = this.props;

    return (
      <div className={classes.root}>
        <svg className={classes.svgFilter}>
          <filter id="svgGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feOffset dx="0" dy="1" />

            <feGaussianBlur stdDeviation="3" result="offset-blur" />

            <feComposite
              operator="out"
              in="SourceGraphic"
              in2="offset-blur"
              result="inverse"
            />

            <feFlood flood-color="white" flood-opacity="1" result="color" />

            <feComposite
              operator="in"
              in="color"
              in2="inverse"
              result="shadow"
            />

            <feComposite
              operator="over"
              in="shadow"
              in2="SourceGraphic"
              result="innerGlowed"
            />

            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="DROP" />
            <feFlood
              flood-color={theme.palette.primary.main}
              flood-opacity="1"
              result="COLOR2"
            />
            <feComposite in="COLOR2" in2="DROP" operator="in" result="SHADOW" />
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="DROP2" />
            <feFlood
              flood-color={theme.palette.primary.main}
              flood-opacity="1"
              result="COLOR3"
            />
            <feComposite
              in="COLOR3"
              in2="DROP"
              operator="in"
              result="SHADOW2"
            />

            <feMerge>
              <feMergeNode in="SHADOW2" />
              <feMergeNode in="SHADOW" />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="innerGlowed" />
            </feMerge>
          </filter>
        </svg>
        <div className={classes.wrapper}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}
            open={this.state.open}
          >
            {" "}
            <div className={classes.toolbar}>
              <IconButton
                onClick={
                  this.state.open === true
                    ? this.handleDrawerClose
                    : this.handleDrawerOpen
                }
                className={this.state.open === true ? "" : "offset"}
              >
                {this.state.open === true ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <div className={classes.logo}>
              <svg viewBox="0 0 251 49">
                <g id="Layer_1" data-name="Layer 1">
                  <path
                    style={{ fill: "#ff9e18" }}
                    d="M238.66 23.11h10.23l-1.79-4.68-4.26-.35 1.18-7.8-2.28-6.01-3.08 18.84z"
                  />
                  <path
                    style={{ fill: "#8c837b" }}
                    d="M238.37 2.93l-3.85-1.8 2.55 12.06 1.3-10.26zM234.06 48.96l4.17-1.86-1.13-10.49-3.04 12.35z"
                  />
                  <path
                    style={{ fill: "#ff9e18" }}
                    d="M229.95.33l-3.78 6.09 3.61 11.19-9.69-1.11-4 6.61h20.51L229.95.33z"
                  />
                  <path
                    style={{ fill: "#e1251b" }}
                    d="M238.78 26.24h10.23l-1.79 4.68-4.26.36 1.18 7.79-2.29 6.01-3.07-18.84zM230.07 48.95l-3.57-5.78 3.4-11.5-10.58-.13-3.11-5.38 20.51.01-6.65 22.78z"
                  />
                  <path
                    style={{ fill: "#ff9e18" }}
                    d="M249.05 10.68a.33.33 0 0 0 .34-.35.32.32 0 0 0-.34-.34h-.33v.69zm-.72-1h.8a.6.6 0 0 1 .65.63.54.54 0 0 1-.38.54.27.27 0 0 1 .07.11l.4.76h-.43l-.38-.8h-.34v.8h-.39zm.67 2.66a1.63 1.63 0 0 0 0-3.25 1.56 1.56 0 0 0-1.54 1.63 1.56 1.56 0 0 0 1.54 1.64m0-3.62a2 2 0 1 1-1.94 2 2 2 0 0 1 1.94-2"
                  />
                </g>
                <path
                  style={
                    this.state.open === true
                      ? { opacity: "1" }
                      : { opacity: "0" }
                  }
                  d="M19.75 32.11l-1.63-1.59c-2.09 2-4.06 3.16-7.06 3.16-4.82 0-8.47-4-8.47-9.07s3.62-9 8.47-9a9.53 9.53 0 0 1 6.88 3l1.68-1.82a11.39 11.39 0 0 0-8.53-3.47A11 11 0 0 0 0 24.67 10.93 10.93 0 0 0 11 36a11.4 11.4 0 0 0 8.75-3.85m4.51 3.47h2.47V13.7h-2.47zm27 0l-6.72-8.94c3.44-.62 5.94-2.75 5.94-6.41 0-3.94-3.09-6.53-7.91-6.53h-9.44v21.84h2.47v-8.5h6.25l6.35 8.5zM48 20.33c0 2.84-2.34 4.53-5.62 4.53H35.6V16h6.75c3.54 0 5.6 1.63 5.6 4.35M73 32.11l-1.62-1.59c-2.1 2-4.07 3.16-7.07 3.16-4.81 0-8.47-4-8.47-9.07s3.63-9 8.47-9a9.53 9.53 0 0 1 6.88 3l1.69-1.82a11.42 11.42 0 0 0-8.54-3.47 11 11 0 0 0-11.06 11.35A10.92 10.92 0 0 0 64.25 36 11.4 11.4 0 0 0 73 32.11m13.73-18.57h-2.31l-10 22H77l2.59-5.78h11.89L94 35.58h2.7zm3.78 14h-10l5-11.16zm28.68-3c0-6.19-4.75-10.91-11.63-10.91H100v21.95h7.6c6.88 0 11.63-4.78 11.63-11m-2.57.06c0 4.88-3.53 8.63-9.06 8.63h-5.13V16h5.13c5.53 0 9.06 3.82 9.06 8.69m22.65-11h-15.85v21.89h16v-2.25h-13.5v-7.66h11.94v-2.25h-11.97V16h13.34zm21.08 17.54L146.57 13.7h-2.32v21.88h2.41V17.64l14.13 17.94h2V13.7h-2.41zm26.38.87l-1.63-1.59c-2.09 2-4.06 3.16-7.06 3.16-4.82 0-8.48-4-8.48-9.07s3.63-9 8.48-9a9.49 9.49 0 0 1 6.87 3l1.69-1.82a11.39 11.39 0 0 0-8.53-3.47A11 11 0 0 0 167 24.67 10.93 10.93 0 0 0 178 36a11.42 11.42 0 0 0 8.75-3.85m20.07-18.45H191v21.88h16v-2.25h-13.5v-7.66h11.94v-2.25h-11.97V16h13.35z"
                  id="Layer_2"
                  data-name="Layer 2"
                />
              </svg>
            </div>
            <Divider />
            <List className={classes.menulist}>
              <ListItem
                button
                className={classes.activeNav}
                onClick={() => this.handleSectionChange("steps")}
              >
                <ListItemIcon className={classes.navIcon}>
                  <EnvironmentsIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        variant="h6"
                        className={classes.navText}
                        color="textPrimary"
                      >
                        Workroles Management
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <ListItem
                button
                className={classes.activeNav}
                onClick={() => this.handleSectionChange("content")}
              >
                <ListItemIcon className={classes.navIcon}>
                  <EnvironmentsIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        variant="h6"
                        className={classes.navText}
                        color="textPrimary"
                      >
                        Content Management
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
            <Divider />
            <List className={classes.menulist}>
              {" "}
              <ListItem
                button
                className={classes.activeNav}
                onClick={() => this.handleSectionChange("theme")}
              >
                <ListItemIcon className={classes.navIcon}>
                  <EnvironmentsIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        variant="h6"
                        className={classes.navText}
                        color="textPrimary"
                      >
                        THEME EXAMPLES
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon className={classes.navIconSwitch}>
                  {themeswitch}
                </ListItemIcon>
                <ListItemText
                  className={classes.navSwitchText}
                  primary={
                    <React.Fragment>
                      <Typography variant="h6" color="textPrimary">
                        THEME SWITCH
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Drawer>{" "}
        </div>
        <main className={classes.content}>{this.state.activeSection}</main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);

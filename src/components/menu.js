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
    //height: "100%",
    "& div:nth-of-type(1)": {
      height: "72px",
      width: "72px",

      display: "inline-block",
      backgroundSize: "60%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%"
    },

    "& div:nth-of-type(2)": {
      height: "72px",
      width: "6.5em",
      display: "inline-block",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%"
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
              <CardMedia
                className={classes.media}
                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABkCAQAAAAiC6YoAAAEh0lEQVR42u2cW8GtKhCAjUAEIhjBCEYgghGIQAQiGIEIRjCCDWY//OffywuXGRgUz16st6WCH3NlUDvoKv96sLCBPv1rYQMDsvbodbuX4OCnudOR9b//bV3EmnAT7NsR+9M2UG/Es3Bsw+6YOh0zb8M7wwFMu6PmctS+Ce8KdwRwnuP6LXgT+NreuWzeM4Y34MnAzX+ciwgcX0G0j2ch1H5DwBA8Q7eOJyHchoDf3AcJ0TaejuApxDlD23hj5NZ1MCy8Bm9A4LnIOeK9eDMCr3nPGW7u38CDL94X74v3xaNWVv7XeMMXb3lvUqYLw/qL8QwCb2obzyFS6hkxBY3irQg8jAI3igcIu4rhbS3jDSi8+FmyXTyNiml99KyxXbyY01iRKmzaxduQTiMW2JdW8eI2pVG1UGbr48QzaJuaomeqNvFWtEzicp5bxIv7w5UQHxnLgXeppiUkb4zqeZdqKtQmGXtqdkfx3ecNe+L5D+PN0ZtdyNI2LeHJhCwm0j4g41ZY7S3LsKqNGVPyCJ6IJmPhNGsjhZLH8HSmHEziOtUCnkxIIewFU96T4VGC+nYXS7GWxLX6abyUBOKlPZW4tth/1qyMYRxESrHtk3gqKTtV6JYKC7s1AwLGuaf7WJ7Cm5Mzj3ENhqUXdrwxeVs4x5CWX4GC1ot2+LCctr/sCJiLtyBuic+GswsUdUI5tRw7Ifqb7sJTiJtx7NqQVb/mrmb+OhVZpde+Nl6PsJM8V25qTFsNuCUzSVhRfYtaeDi4DBUiKCgRkBuurIhguAG54UoL6AtqlBWrIdhQsCGHLV1fS+RISBPgCrplVkfLZQlJX9qfzZzDAed0Ioq9KYtb0UNxPnBj0aMu8UhYlsnXe4MLrzNbbGLDclsehOtAkMZ3IRn6uzYAj8LRAQG0z2tfO9VI11z5xcIMwPXq3MrQasLlAF4Q946EilYbLg/w8LIxZYla+eFEhjBxWfpiS+kcQbyHAYasqpfOkKD44DnyxX0SZQQNBlyk7w0cODCgYUguU8c8r4BfZ2EWJBIU2Axr+Y1eBsZg3z25X/mD54jxxecAFFhCApeaPuMtGwmiFVro0tv+R7c7eMBmqNNmUBdZ0pRU0PJzcRqqFtjePu1pSilrmBGrmke5SdBsqogbfTpM7Ygc3XQIYR+/tiKz4hCHHPXOvwpUsHAdwkDF42j7u5GEu9k6xs7uavu1QR83rg6FJrIy0pqKOuHMpfMass4y5HvbcnJ2xieA7hJrxmw3fH87h6pzDF4/hdPyIPpEuyYaEqa/TK4DDdYDRk+BUvnk+cfpavzZ7wyqY0tgz7M6g4YRhmjdWsAACjS4Qut2oVG4lh8fg9eRrD++Lh/BZE9qYInGs3j8yQ0VyxO0MjtJVxg8usXNFT6kJkBlSNLE8aiFm9rf+ZNgy8qS+XDnLL5erYyWMVk/HgVuq/PRNCbEnR/NwTO3SM2nqAV4uATMsWxR5r8huNLcy3XrcLtpD6/G4wXruQTl1/PVG7D7BuB+ZLjhNlDC+3sjmENeaB+xt7CrcYdisA5N/R/SGFk7SiqTAwAAAABJRU5ErkJggg=="
                title="logo"
              />
              <CardMedia
                className={classes.media}
                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbsAAABkCAQAAAC1f1bbAAAEYUlEQVR42u3dbZXiQBCF4UhAAhIiAQlIiAQkICESIgEJkRAJIwEHWTj7Z/ewMwv9eavq7fo/C5V+djjUne5hHyjhOuy3fS1U6u913Vut+z72fa+Wm/e6VnfsbgW7A7s/4U2wg92/aynaHdj9vSbYwa42OtgJwYOdak3FuwO717XADnY10cFOCB7soqCD3ffwDrCD3fj4ng12LdfWGh7soqCDnRA82EVBB7uf11fLETrstDIpW8XuwE4muzIUf2iw00QHOyF4sNOprXJ3YCczQoed10wK7IThwS4KOti9v66wi8BubtId2MlkV2DnNZMCO2F4sIuCDnaf76YD7HyyOzXsDuxksiuw85pJgV0ZeEfY+WKXim5+fNOWUkPYygkiVBmhl2c3Pj449arR1FZIQzcF5uMG3uDmI0qMbXChd8kdXzLgnWEXF91C77qFEibYWa8b6GLDg52VR7/Sue5z0gV2sdBt7c/7AF49BbBrWxfQScC7w47/Z//3PRroVGamsAuDbqR3MvBgF+Ixg65eHRPGOLAL8aEmbUx74qlWmp/CLgC61EkR7GrBg537TEr6eBZ2tUY6sHOObs74N2FXCx7sjFSP9CXsxPsFO8VMymJtG8EOdgTBYAe7sDV3Qgc72JFJ6ZC+hB3sQNc8kwI72AWsc+f0JexgRyblzTXa3Uawg12sIBjsYEcmReIYPtjBjiBY82P4YAc70DU/EQx2sAtTqwg62MGOINiP6+ZjG8EOdnbQ1ToRTJ3dJfHylJyCnbtSO4ZPm12Le9rF9y/s+gXBDn4+NMmjgx3oqp8IpsuuFzrYOcuk6KHTZdcPHewIgj1YDAHZ9UQHO9KX/r4Ql0dnlh2nE5fJpEwNXpseu97ozLLj1uwS6OYmr06NXX90htkBTy99aYGdAjrT7LiyPmcjLc1enxK7y77DLpcdN2inB8GGkOyusCvBLjo8C/exws4hu+f19XHvF73Ko4OdU3aRb9P+fBu1vxoSdk7ZxYV3lUcHOwPstuQ3EvOC36uBHsFOnt0BeBW3UZ9JJ+zk2T3h3TLgnWEnFy+AnQF2uUmCCXZifYGdEXbAK72Nto6v0SK7r45nqXRklxfjmWH3MtuEnZV+dWWXekBBrOwK7GBXmN0T3h14sINdW3bpfzMdZYQOO9hVYAc82MGuA7snvC0D3gg72MHuc3ZkV2AHuw7sgAc72HVglzdCvz8mee2vl5jYRrCzz07l+Jld6NHBDnbV2Q2P31pe2L1/7eMJdqH6VaY+6Nc7P26CHexg15qdHXiwg50jds8HeYcd7GDXll1edgV2sINdEjsL8GAHO3fs8kbosIMd7JLYqcODHexcsnvCW2EHO9i1ZaecXYEd7ByzU4UHO9i5ZqdzbxnsYBeInWJ2BXawc89ODx7sYBeAndoIHXawC8FOCx7sYBeEXd6BR7CDHewSSyW7AjvYBWL3+7KutXvNDbbRSehcl+/qWORCDtjJs3PWln2g6Fe9fv0C2rPD9wPXJSYAAAAASUVORK5CYII="
                title="logo"
              />
            </div>{" "}
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

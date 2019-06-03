import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Menu from "/src/components/menu";

import { fade } from "@material-ui/core/styles/colorManipulator";

import CssBaseline from "@material-ui/core/CssBaseline";

//COLOR VARIABLES
const primaryColor = "#ff9e18";
const colorBlack = "#000000";
const colorRed = "#ff514d";
const colorLightest = "#f2f2f2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeType: "dark",
      dark: {
        primary: { main: primaryColor },
        secondary: { main: "#ff514d" },
        mainGradient: "linear-gradient(225deg, #0000010, #333333)",
        invGradient: "linear-gradient(180deg, black, #333333)",
        contraster: "#ffffff",
        paperBG: "#333333"
      },
      light: {
        primary: { main: primaryColor },
        secondary: { main: "#ff514d" },
        mainGradient: "linear-gradient(45deg, white, #e6e6e6)",
        invGradient: "linear-gradient(0deg, white, #e6e6e6)",
        contraster: "#000000",
        paperBG: "#f2f2f2"
      },
      checked: false
    };
  }

  handleThemeChange = theme => {
    this.setState({
      checked: !this.state.checked,
      themeType: this.state.themeType === "light" ? "dark" : "light"
    });
  };

  render() {
    const darkTheme = createMuiTheme({
      typography: {
        useNextVariants: true,
        fontFamily: "Barlow Condensed !Important"
      },
      palette: {
        primary: {
          main:
            this.state.themeType === "light"
              ? this.state.light.primary.main
              : this.state.dark.primary.main,
          mainGradient:
            this.state.themeType === "light"
              ? this.state.light.mainGradient
              : this.state.dark.mainGradient,
          invGradient:
            this.state.themeType === "light"
              ? this.state.light.mainGradient
              : this.state.dark.mainGradient,
          contraster:
            this.state.themeType === "light"
              ? this.state.light.contraster
              : this.state.dark.contraster
        },
        secondary: {
          main: colorRed
        },
        error: {
          main: colorRed
        },

        type: this.state.themeType
      },
      overrides: {
        "&body": {
          margin: 0,
          padding: 0
        },

        MuiAppBar: {
          root: {
            border: "none",
            boxShadow: "none !important"
          }
        },

        MuiTabs: {
          root: {}
        },

        MuiTooltip: {
          tooltip: {
            fontWeight: "300",
            fontFamily: "Roboto"
          }
        },

        MuiTable: {
          root: {
            fontWeight: "300",
            fontFamily: "Roboto"
          }
        },
        MuiCardHeader: {
          title: {
            outline: "none",
            border: "none",
            background: "none"
          }
        },
        MuiTablePagination: {
          root: {
            position: "absolute",
            right: "0",
            top: "5.5em",
            zIndex: 1000
          }
        },

        MuiPaper: {
          root: {
            boxShadow:
              "0px 0px 25px 0px " + fade(colorBlack, 0.2) + "!important",

            backgroundColor:
              this.state.themeType === "light"
                ? this.state.light.mainGradient + " !important"
                : this.state.dark.mainGradient + " !important"
          }
        },

        MuiDialog: {
          paper: {
            borderRadius: "0"
          }
        },
        MuiInputLabel: {
          root: {
            paddingLeft: ".4em",

            "&$focused": {
              color:
                this.state.themeType === "light"
                  ? this.state.light.primary.main + " !important"
                  : this.state.dark.primary.main + " !important"
            },

            "&$error": {
              color: colorRed + "!important"
            }
          }
        },
        MuiInput: {
          root: {
            paddingLeft: ".4em",
            width: "100%",
            border:
              "1px solid  " +
              fade(
                this.state.themeType === "light"
                  ? this.state.light.contraster
                  : this.state.dark.contraster,
                0.42
              ) +
              " !important",
            "&$disabled": {
              border:
                "1px solid  " +
                fade(
                  this.state.themeType === "light"
                    ? this.state.light.contraster
                    : this.state.dark.contraster,
                  0.2
                ) +
                " !important",
              "&:before": {
                borderBottom: "none !important"
              }
            }
          },

          underline: {
            "&:before": {
              height: "100%",
              borderBottom: "none"
            },

            "&:after": {
              marginLeft: ".2em",
              height: "calc(100% - 1em)",
              marginBottom: ".5em",
              borderBottom: " none !important",
              borderLeft:
                this.state.themeType === "light"
                  ? this.state.light.primary.main + "  2px solid !important"
                  : this.state.dark.primary.main + "  2px solid !important"
            },

            "&:hover": {
              border:
                "1px solid " +
                fade(
                  this.state.themeType === "light"
                    ? this.state.light.contraster
                    : this.state.dark.contraster,
                  0.42
                ) +
                "  !important"
            },

            "&:hover:not($disabled):before": {
              marginLeft: ".2em",
              height: "calc(100% - 1em)",
              marginBottom: ".5em",
              borderLeft:
                "1px solid " +
                fade(
                  this.state.themeType === "light"
                    ? this.state.light.contraster
                    : this.state.dark.contraster,
                  0.42
                ) +
                "  !important",
              borderBottom: "none !important"
            },

            "&:hover:not($disabled):after": {},
            "&$error:after": {
              borderLeft: " 2px solid " + colorRed + "!important"
            }
          },
          multiline: {
            fontFamily: "Roboto !important",
            fontSize: "16px;",
            padding: ".4em",

            "&:after": {
              transformOrigin: "0% 50%"
            },

            "&$error:after": {
              top: "0"
            }
          }
        },
        MuiSelect: {
          select: {}
        },

        MuiExpansionPanel: {
          root: {
            width: "100%"
          },
          expanded: {
            "&:before": {
              opacity: "1 !important"
            }
          }
        },

        MuiTypography: {
          body1: {
            fontFamily: "Roboto"
          },

          body2: {
            fontSize: "16px !mportant",
            fontFamily: "Roboto"
          },
          caption: {
            fontWeight: "300",
            fontFamily: "Roboto"
          },
          overline: {
            fontWeight: "300",
            fontFamily: "Roboto"
          },
          h4: {
            fontWeight: "400",

            textTransform: "uppercase",
            fontSize: "1.3em",
            padding: ".2em",
            letterSpacing: ".3em"
          },

          h5: {
            fontSize: "1.3em",
            textTransform: "uppercase",
            letterSpacing: ".2em"
          },

          h6: {
            textTransform: "uppercase"
          },

          h3: {
            fontWeight: "400",
            margin: "1px 0 0 1px",

            background: fade(colorBlack, 0.02),
            textTransform: "uppercase",
            fontSize: "1.3em",
            padding: ".2em",
            minWidth: "200px",
            letterSpacing: ".3em",
            border: "5px solid " + fade(colorLightest, 0.2),
            outline:
              this.state.themeType === "light"
                ? this.state.light.primary.main + " 1px solid"
                : this.state.dark.primary.main + " 1px solid"
          }
        },
        MuiBackdrop: {
          root: {
            backgroundColor: "rgba(0, 0, 0, 0.9)"
          }
        },
        MuiBadge: {
          badge: {
            transform: "translateY(.5em)"
          }
        },
        MuiButton: {
          root: {
            borderRadius: 0,
            height: "3em",
            letterSpacing: ".3em",
            marginTop: "1em",
            padding: "0 2em !important"
          },
          label: {
            fontSize: "1.1em",
            margin: "0",
            minHeight: "36px",
            "&:active": {
              transform: "Scale(.95)"
            },
            "&:focus": {
              transform: "Scale(.95)"
            }
          },

          flat: {
            border:
              "solid 2px " +
              fade(
                this.state.themeType === "light"
                  ? this.state.light.contraster
                  : this.state.dark.contraster,
                0
              ) +
              "!important",
            backgroundColor: fade(
              this.state.themeType === "light"
                ? this.state.light.contraster
                : this.state.dark.contraster,
              0.08
            ),
            "&:hover": {
              border:
                "solid 2px " +
                fade(
                  this.state.themeType === "light"
                    ? this.state.light.contraster
                    : this.state.dark.contraster,
                  1
                ) +
                "!important"
            },

            "&$disabled": {
              opacity: ".5 !important"
            }
          },

          flatPrimary: {
            background: fade(
              this.state.themeType === "light"
                ? this.state.light.primary.main
                : this.state.dark.primary.main,
              0.08
            ),
            "&:hover": {
              border:
                this.state.themeType === "light"
                  ? this.state.light.primary.main + " solid 2px !important"
                  : this.state.dark.primary.main + " solid 2px !important"
            }
          },
          flatSecondary: {
            background: fade(colorRed, 0.08) + "!important",
            "&:hover": { border: "solid 2px" + colorRed + " !important" }
          },
          outlined: {
            border: "solid 2px !important",
            padding: "0 .5em",
            borderRadius: 0,
            "&$disabled": {
              opacity: ".5 !important"
            }
          },
          raised: {
            clipPath:
              " polygon( 0% 0%, 0% 0%, calc(100% - .6em) 0%, 100% .6em, 100% 100%, 100% 100%, 0% 100%, 0% 100%)",
            boxShadow: "0 0 0 0 !important",
            "&$disabled": {
              opacity: ".5 !important"
            }
          }
        }
      }
    });
    return (
      <MuiThemeProvider theme={darkTheme}>
        <Menu
          themeswitch={
            <Switch
              color="primary"
              checked={this.state.checked}
              onChange={this.handleThemeChange}
            />
          }
        />

        <CssBaseline />
      </MuiThemeProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

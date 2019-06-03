import { createMuiTheme } from "@material-ui/core/styles";

import { fade } from "@material-ui/core/styles/colorManipulator";

const primary = "#2aace2";
//COLOR VARIABLES
const colorBlack = "#000000";

const colorRed = "#ff514d";
const colorLightest = "#f2f2f2";

const darkTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "Barlow Condensed !Important"
  },
  palette: {
    type: "dark"
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
        boxShadow: "0px 0px 25px 0px " + fade(colorBlack, 0.2) + "!important",
        /* border: "solid" + colorDarkest,
        borderWidth: "1px 0px",
        borderRadius: "0 !important",*/
        backgroundColor: "#222222f0 !important"
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
          color: primary + "!important"
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
        border: "1px solid  " + fade(colorLightest, 0.42) + " !important",
        "&$disabled": {
          border: "1px solid  " + fade(colorLightest, 0.2) + " !important",
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
          borderLeft: " 2px solid " + primary + "  !important"
        },

        "&:hover": {
          border: "1px solid " + fade(colorLightest, 0.42) + "  !important"
        },

        "&:hover:not($disabled):before": {
          marginLeft: ".2em",
          height: "calc(100% - 1em)",
          marginBottom: ".5em",
          borderLeft: "1px solid " + fade(colorLightest, 0.42) + "  !important",
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

        "&:before": {
          //underline color when textfield is inactive
          /* borderImage:
            "url('data:image/svg+xml;utf8," +
            inputBG(colorOrange, colorLightest, colorLightest) +
            "')",
          borderImageSlice: "33% fill",
          borderImageWidth: "4px"*/
        },

        "&:after": {
          /* borderImage:
            "url('data:image/svg+xml;utf8," +
            inputBG(colorOrange, colorDark2, colorOrange) +
            "')",
          borderImageSlice: "33% fill",
          borderImageWidth: "4px",*/

          transformOrigin: "0% 50%"
        },
        "&:hover:not($disabled):before": {
          //underline color when hovered
          /* borderImage:
            "url('data:image/svg+xml;utf8," +
            inputBG(colorOrange, colorLightest, colorOrange) +
            "')",
          borderImageSlice: "33% fill",
          borderImageWidth: "4px"*/
        },
        "&$error:after": {
          /*  borderImage:
            "url('data:image/svg+xml;utf8," +
            inputBG(colorRed, colorRed, colorRed) +
            "')",
          borderImageSlice: "33% fill",
          borderImageWidth: "4px",*/
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
        // margin: "0 !important",
        //  boxShadow: "none"
      },
      expanded: {
        "&:before": {
          opacity: "1 !important"
        }
      }
    },
    MuiExpansionPanelActions: {
      root: {
        //background: colorRed + "26"
      }
    },
    MuiList: {},
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
        outline: "1px solid " + primary
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
        border: "solid 2px rgba(256,256, 256, 0) !important",
        backgroundColor: "rgba(256, 256, 256, 0.08)",
        "&:hover": { border: "solid 2px rgba(256,256,256, 1) !important" },

        "&$disabled": {
          opacity: ".5 !important"
        }
      },

      flatPrimary: {
        background: fade(primary, 0.08),
        "&:hover": { border: "solid 2px" + primary + " !important" }
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
      },
      raisedPrimary: {
        /*borderImage:
          "url('data:image/svg+xml;utf8," +
          raisedbutton(colorOrange, colorDark2, colorDark2) +
          "')",
        borderImageSlice: "33%  fill",
        borderImageWidth: "8px 8px",*/

        "&:hover": {
          /*borderImage:
            "url('data:image/svg+xml;utf8," +
            raisedbutton(colorOrange, colorDark2, colorOrange) +
            "')",
          borderImageSlice: "33%  fill",
          borderImageWidth: "8px 8px"*/
        }
      },
      raisedSecondary: {
        /*  borderImage:
          "url('data:image/svg+xml;utf8," +
          raisedbutton(colorRed, colorDark2, colorDark2) +
          "')",
        borderImageSlice: "33%  fill",
        borderImageWidth: "8px 8px",*/

        "&:hover": {
          /* borderImage:
            "url('data:image/svg+xml;utf8," +
            raisedbutton(colorRed, colorDark2, colorRed) +
            "')",
          borderImageSlice: "33%  fill",
          borderImageWidth: "8px 8px"*/
        }
      }
    }
  }
});

export default darkTheme;

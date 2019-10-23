import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { lightGreen, green } from "@material-ui/core/colors";

import Main from "./Main";

/*=====TO-DO=====

Logo
  crop out logo phone number
  crop left and right to fill screen
Facebook icon vertical center
Update npm material ui
Price List
  Weekdays - bagged pecans only
  Saturday - u pick pecans

=====END TO-DO=====*/

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: green,
    background: {
      default: "rgb(17,63,0)"
    },
    text: {
      primary: green[50],
      secondary: "black"
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  }
});

class App extends React.Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Main />
          </ThemeProvider>
        </React.Fragment>
      </div>
    );
  }
}

export default App;

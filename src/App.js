import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { lightGreen, green } from "@material-ui/core/colors";

import Main from "./Main";

// Load Roboto typeface
// require("typeface-roboto");

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    background: {
      default: "rgb(17,63,0)"
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

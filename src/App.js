import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";

import Main from "./Main";

// Load Roboto typeface
// require("typeface-roboto");

class App extends React.Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <CssBaseline />
          <Main />
        </React.Fragment>
      </div>
    );
  }
}

export default App;

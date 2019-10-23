import React from "react";
import { withStyles } from "@material-ui/core/styles";

import LeftMenu from "./components/LeftMenu";
import TopToolbar from "./components/TopToolbar";
import MainContent from "./components/MainContent";

const styles = theme => ({
  root: {},
  logo: {
    width: "100%",
    hieght: "auto"
  }
});

class Main extends React.Component {
  state = {
    menu: {
      open: false
    }
  };
  handleMenuClick = () => {
    this.setState({ menu: { open: true } });
  };
  handleDrawerClose = () => {
    this.setState({ menu: { open: false } });
  };
  handleListItemClick = item => {
    console.log("you clicked me! item: ", item);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <LeftMenu
          menu={this.state.menu}
          handleDrawerClose={this.handleDrawerClose}
          handleListItemClick={this.handleListItemClick}
        />
        <div align="center">
          <img src={require("./logo.png")} className={classes.logo} />
        </div>
        <TopToolbar handleMenuClick={this.handleMenuClick} />
        <MainContent />
      </div>
    );
  }
}

export default withStyles(styles)(Main);

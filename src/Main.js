import React from "react";
import { withStyles } from "@material-ui/core/styles";

import LeftMenu from "./components/LeftMenu";
import TopToolbar from "./components/TopToolbar";

const styles = theme => ({
  root: {}
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
        <TopToolbar handleMenuClick={this.handleMenuClick} />
      </div>
    );
  }
}

export default withStyles(styles)(Main);

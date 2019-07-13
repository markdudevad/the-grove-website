import React from "react";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import LeftMenu from "./components/LeftMenu";

const styles = theme => ({});

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
        <AppBar color="primary" position="sticky">
          <Toolbar>
            <IconButton
              color="inherit"
              size="medium"
              onClick={this.handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5">Title Bar</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Main);

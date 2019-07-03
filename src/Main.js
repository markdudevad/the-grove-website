import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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
  handleListItemClick = event => {
    console.log("you clicked me! event: ", event.target.firstChild);
  };
  render() {
    return (
      <div>
        <Drawer
          anchor="left"
          open={this.state.menu.open}
          onClick={this.handleDrawerClose}
        >
          <List>
            <ListItem onClick={this.handleListItemClick}>
              <ListItemText>Item 1</ListItemText>
            </ListItem>
            <ListItem onClick={this.handleListItemClick}>
              <ListItemText>Item 2</ListItemText>
            </ListItem>
            <ListItem onClick={this.handleListItemClick}>
              <ListItemText>Item 3</ListItemText>
            </ListItem>
          </List>
        </Drawer>
        <AppBar color="primary" position="sticky">
          <Toolbar>
            <IconButton
              color="inherit"
              size="medium"
              onClick={this.handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5">The Grove</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Main;

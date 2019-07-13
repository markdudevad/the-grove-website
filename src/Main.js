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
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  wideMenu: {
    width: 250
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
  handleListItemClick = event => {
    console.log("you clicked me! event: ", event.target.firstChild);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Drawer
          anchor="left"
          open={this.state.menu.open}
          onClick={this.handleDrawerClose}
        >
          <List className={classes.wideMenu}>
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

export default withStyles(styles)(Main);

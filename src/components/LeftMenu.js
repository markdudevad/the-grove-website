import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  wideMenu: {
    width: 150
  }
});

class LeftMenu extends React.Component {
  render() {
    const {
      classes,
      menu,
      handleDrawerClose,
      handleListItemClick
    } = this.props;
    return (
      <div>
        <Drawer anchor="left" open={menu.open} onClick={handleDrawerClose}>
          <List className={classes.wideMenu}>
            <ListItem onClick={() => handleListItemClick("Item 1")}>
              <ListItemText>Item 1</ListItemText>
            </ListItem>
            <ListItem onClick={() => handleListItemClick("Item 2")}>
              <ListItemText>Item 2</ListItemText>
            </ListItem>
            <ListItem onClick={() => handleListItemClick("Item 3")}>
              <ListItemText>Item 3</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(LeftMenu);

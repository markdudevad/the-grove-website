import React from "react";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  wideMenu: {
    width: 150
  }
});

class TopToolbar extends React.Component {
  render() {
    const { classes } = this.props;
    const { handleMenuClick } = this.props;
    return (
      <div>
        <AppBar color="primary" position="sticky">
          <Toolbar>
            {/* <IconButton color="inherit" size="medium" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton> */}
            <Typography variant="subtitle1" color="inherit">
              Like us on Facebook
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(TopToolbar);

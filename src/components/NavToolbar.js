import React from "react";
import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
// import MenuIcon from "@material-ui/icons/Menu";
import { FaFacebookSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

const styles = theme => ({
  appbar: {
    marginBottom: 15
  },
  wideMenu: {
    width: 150
  },
  facebookIcon: {
    marginRight: 6
  }
});

class NavToolbar extends React.Component {
  render() {
    const { classes } = this.props;
    // const { handleMenuClick } = this.props;
    return (
      <div>
        <AppBar color="primary" position="sticky" className={classes.appbar}>
          <Toolbar>
            {/* <IconButton color="inherit" size="medium" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton> */}
            <Button
              variant="text"
              href="https://www.facebook.com/TheGroveLeesvilleSC/?eid=ARCmbwfc4z7Aau6Gkepxkzsn3NDd99sDtV9cZWskgLAZwQqSVxhKBUnQU6Jva8lxF7bTl9NnRb_qePpf"
            >
              <IconContext.Provider value={{ color: green[50], size: 25 }}>
                <div className={classes.facebookIcon}>
                  <FaFacebookSquare />
                </div>
              </IconContext.Provider>
              <Typography variant="subtitle1" color="textPrimary">
                Find us on Facebook
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavToolbar);

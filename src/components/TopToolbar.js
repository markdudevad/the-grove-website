import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { FaFacebookSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

const styles = theme => ({
  wideMenu: {
    width: 150
  },
  facebookIcon: {
    marginRight: 6
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
            <Button
              variant="text"
              href="https://www.facebook.com/TheGroveLeesvilleSC/?eid=ARCmbwfc4z7Aau6Gkepxkzsn3NDd99sDtV9cZWskgLAZwQqSVxhKBUnQU6Jva8lxF7bTl9NnRb_qePpf"
            >
              <IconContext.Provider
                value={{ color: "rgb(66,103,178)", size: 25 }}
              >
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

export default withStyles(styles)(TopToolbar);

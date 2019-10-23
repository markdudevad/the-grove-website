import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  CardHeader,
  Divider,
  Card,
  Grid,
  CardContent,
  CardActionArea
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    backgroundColor: theme.palette.secondary.dark
  },
  cardHeader: {
    backgroundColor: theme.palette.secondary.main
  }
});

class MainContent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader
                title="Event Venue & Pecan Grove"
                className={classes.cardHeader}
              ></CardHeader>
              <CardContent>
                <Typography variant="subtitle1">
                  The Grove is a family-owned and operated event venue and
                  certified SC farm. Facebook message or call to book events or
                  buy pecans, pumpkins, and more!
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="subtitle1">803-920-7371</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader
                title="U-Pick Pecans"
                className={classes.cardHeader}
              ></CardHeader>
              <CardContent>
                <Typography variant="subtitle1">
                  Certified SC grown pecans are available for purchase! Also
                  available are SC pumpkins & locally sourced honey.
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="subtitle1">
                  Wed-Fri 2 PM - 6 PM <br />
                  Saturday 10 AM - 4 PM
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader
                title="Book us for your next event"
                className={classes.cardHeader}
              ></CardHeader>
              <CardContent>
                <Typography variant="subtitle1">
                  The Grove is available for outdoor events placed in our
                  beautiful [26] acre pecan grove. We host events from time to
                  time as well, check our Facebook page for updates!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MainContent);

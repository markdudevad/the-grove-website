import React from "react";
import {
  Typography,
  CardHeader,
  Card,
  Grid,
  CardContent
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    backgroundColor: theme.palette.background.default
  }
});

class MainContent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Card className={classes.card} align="center">
              <CardHeader
                title="Event Venue & Pecan Grove"
                className={classes.cardHeader}
              ></CardHeader>
              <CardContent>
                <Typography variant="subtitle1" align="justify">
                  The Grove is a family-owned and operated event venue and
                  certified SC farm. Facebook message or call to book events or
                  buy pecans, pumpkins, and more!
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="subtitle1">803-920-7371</Typography>
                <Typography variant="subtitle1">
                  thegrovesc@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card} align="center">
              <CardHeader
                title="U-Pick Pecans"
                className={classes.cardHeader}
              ></CardHeader>
              <CardContent>
                <Typography variant="subtitle1" align="justify">
                  Starting in November each year, the Grove will offer certified
                  SC grown pecans available to pick. In addition, we are please
                  to announce that starting in October 2019, we have pumpkins
                  and locally sourced honey for sale! If you have any questions
                  or would like further information, please contact us as
                  thegrovesc@gmail.com
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="subtitle1">
                  Wed thru Fri 2 PM - 6 PM
                  <br />
                  Saturday Picking 10 AM - 4 PM
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card} align="center">
              <CardHeader
                title="Book us for your next event"
                className={classes.cardHeader}
                align="center"
              ></CardHeader>
              <CardContent>
                <Typography variant="subtitle1" align="justify">
                  The Grove is available for outdoor events placed in our
                  beautiful 2 acre pecan grove. We host events from time to time
                  as well, check our Facebook page for updates!
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

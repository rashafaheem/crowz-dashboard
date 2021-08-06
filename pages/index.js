import Sidebar from "../components/sidebar/sidebar.js";
import Reach from "../components/reach/reach.js";
import UpgradeCard from "../components/upgradeCard/upgradeCard.js";
import Activity from "../components/activity/activity.js";
import ActChart from "../components/chart/chart.js";
import Performers from "../components/performers/performers.js";
import Cards from "../components/cards/cards.js";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Grid item xs={12} sm={12}>
          <Paper className="">
            <Sidebar />
          </Paper>
        </Grid>
      </div>
      <div className="home">
        <Grid item xs={12} sm={7}>
          <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="setNot">
              <Button className="setNotBut">
                <NotificationsIcon className="notification" />
              </Button>
              <Button className="setNotBut">
                <SettingsIcon className="settings" />
              </Button>
            </div>
          </div>
          <br />
          <br />
          <Reach />
        </Grid>
        <div>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
            item
            xs={6}
            sm={12}
          >
            <UpgradeCard className="upCard" />
          </Grid>
        </div>
        <br />
        <br />
        <br />
        <Grid item xs={12} sm={7}>
          <Activity />
          <ActChart />
        </Grid>
        <br />
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          item
          xs={3}
          sm={7}
        >
          <Paper>
            <Performers className="performerss" />
          </Paper>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Cards />

        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

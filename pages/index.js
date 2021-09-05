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
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  secondContainer: {
    marginTop: "60px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="home">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <h1>Dashboard</h1>
            <div className="setNot">
              <Button className="setNotBut">
                <NotificationsIcon className="notification" />
              </Button>
              <Button className="setNotBut">
                <SettingsIcon className="settings" />
              </Button>
            </div>
            <div className="reach">
              <Reach />
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="upCard">
              <UpgradeCard />
            </div>
          </Grid>
          <Grid container spacing={3} className={classes.secondContainer}>
            <Grid item xs={12} lg={6}>
              <Activity />
              <ActChart />
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className="topPerformers">
                <Performers />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Cards />
      </div>
    </div>
  );
}

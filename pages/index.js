import Sidebar from "../components/sidebar/sidebar.js";
import Reach from "../components/reach/reach.js";
import UpgradeCard from "../components/upgradeCard/upgradeCard.js";
import Activity from "../components/activity/activity.js";
import ActChart from "../components/chart/chart.js";
import Performers from "../components/performers/performers.js";
import Cards from "../components/cards/cards.js";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="home">
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div className="setNot">
            <NotificationsIcon className="notification" />
            <SettingsIcon className="settings" />
          </div>
          <br />
          <br />
          <Reach />
          <UpgradeCard className="upCard" />
        </div>
        <br />
        <br />
        <Activity />
        <ActChart />
        <br />
        <Performers />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Cards />
        <br />
        <br />
      </div>
    </div>
  );
}

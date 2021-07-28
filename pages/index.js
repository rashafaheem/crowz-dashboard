import Sidebar from "../components/sidebar/sidebar.js";

import Reach from "../components/reach/reach.js";
import UpgradeCard from "../components/upgradeCard/upgradeCard.js";
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
          {/* <div className="upCard"> */}
          <UpgradeCard className="upCard" />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

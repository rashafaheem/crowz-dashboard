import Sidebar from "../components/sidebar/sidebar.js";
import Reach from "../components/reach/reach.js";
import SettingsIcon from "@material-ui/icons/Settings";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="dashboard">
        <h1>Dashboard</h1>
        {/* <SettingsIcon className="settings" /> */}
      </div>
      <div className="">
        <Reach />
      </div>
    </div>
  );
}

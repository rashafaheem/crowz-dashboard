import Sidebar from "../components/sidebar/sidebar.js";
import Reach from "../components/reach/reach.js";
import Divider from "@material-ui/core/Divider";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="dashboard">
        <h1>Dashboard</h1>
      </div>
      <div className="">
        <Reach />
      </div>
    </div>
  );
}

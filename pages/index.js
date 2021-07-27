import Sidebar from "../components/sidebar/sidebar.js";
import Reach from "../components/reach/reach.js";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="dashboard">
        <h1>Dashboard</h1>
      </div>
      <div className="info">
        <Reach className="reachList" title="Views" reach="27,6m" />
        <Reach className="reachList" title="Followers" reach="219,3k" />
        <Reach className="reachList" title="Reposts" reach="1,5k" />
      </div>
    </div>
  );
}

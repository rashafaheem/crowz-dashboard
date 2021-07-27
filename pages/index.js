import Sidebar from "../components/sidebar/sidebar.js";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="dashboard">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}

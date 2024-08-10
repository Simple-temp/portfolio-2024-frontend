import React from "react";
import "./Dashboard.scss";
import Sidebar from "../../Components/Side-bar/Side-bar";

function Dashboard() {
  return (
    <div className="dashboard">
        <Sidebar/>
      <div className="dashboard-container">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;

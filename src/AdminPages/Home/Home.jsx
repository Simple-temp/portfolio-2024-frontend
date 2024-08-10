import React from 'react';
import "./Home.scss";
import Sidebar from '../../Components/Side-bar/Side-bar';

function Home() {
  return (
    <div className='dashboard'>
        <Sidebar/>
      <div className="dashboard-container">
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home

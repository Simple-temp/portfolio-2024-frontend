import React from 'react';
import "./About.scss"
import Sidebar from '../../Components/Side-bar/Side-bar';

function About() {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className="dashboard-container">
        <h1>About</h1>
      </div>
    </div>
  )
}

export default About

import React from "react";
import "./Side-bar.scss";
import {Button} from "react-bootstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddHomeIcon from '@mui/icons-material/AddHome';
import InfoIcon from '@mui/icons-material/Info';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MessageIcon from '@mui/icons-material/Message';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ViewListIcon from '@mui/icons-material/ViewList';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import NetworkPingIcon from '@mui/icons-material/NetworkPing';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="side-bar">
        <div className="top">
          <div className="logo"><AccountCircleIcon/></div>
          <div className="title">Abdul Aziz</div>
        </div>
        <hr/>
        <div className="mid">
          <div className="list-1">
            <ul>
                <Link to="/admin/dashboard" className="link"><li> <DashboardIcon className="sidebar-icon" /> Dashboard</li></Link>
            </ul>
          </div>
          <hr/>
          <div className="list-2">
            <ul>
            <Link to="/admin/home" className="link"><li> <AddHomeIcon className="sidebar-icon" /> Home</li></Link>
            <Link to="/admin/aboutme" className="link"><li> <InfoIcon className="sidebar-icon" /> About me</li></Link>
            <Link to="/admin/services" className="link"><li> <DesignServicesIcon className="sidebar-icon" /> Services</li></Link>
            <Link to="/admin/portfolio" className="link"><li> <ShowChartIcon className="sidebar-icon" /> Portfolio</li></Link>
            <Link to="/admin/messages" className="link"><li> <MessageIcon className="sidebar-icon" /> Messages</li></Link>
            <Link to="/admin/footer" className="link"><li> <SmartToyIcon className="sidebar-icon" /> Footer</li></Link>
            </ul>
          </div>
          <hr/>
          <div className="list-3">
            <ul>
            <Link to="/admin/services" className="link"><li> <ViewListIcon className="sidebar-icon" /> Custom Order</li></Link>
            <Link to="/admin/portfolio" className="link"><li> <CircleNotificationsIcon className="sidebar-icon" /> Notification</li></Link>
            <Link to="/admin/messages" className="link"><li> <NetworkPingIcon className="sidebar-icon" /> Work done</li></Link>
            <Link to="/admin/footer" className="link"><li> <EmailIcon className="sidebar-icon" /> Users Mail</li></Link>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="bottom">
          <div className="color-option"></div>
        </div>
        <Button className="button">log out </Button>
    </div>
  );
}

export default Sidebar;

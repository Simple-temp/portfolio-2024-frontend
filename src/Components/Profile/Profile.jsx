import React from "react";
import "./Profile.scss";
import myPhoto from "../../../src/img/my.jpg";
import { Link } from "react-router-dom";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import InfoIcon from "@mui/icons-material/Info";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

const Profile = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="profile">
            <div className="profile-inner">
              <img
                src={myPhoto}
                alt="my-image"
                className="img-fluid d-block toggle-img"
              />
            </div>
          </div>
          <div className="menus">
            <div className="menu-list">
              <ul className="toggle-ui">
                <Link to="/" className="link">
                  <li>
                    <HomeWorkIcon className="icon" /> 
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <InfoIcon className="icon" /> 
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <ShowChartIcon className="icon" />
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <MedicalInformationIcon className="icon" /> 
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <AccountTreeIcon className="icon" /> 
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <PermContactCalendarIcon className="icon" /> 
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="profile">
            <div className="profile-inner">
              <img
                src={myPhoto}
                alt="my-image"
                className="img-fluid d-block my-img"
              />
              <p>Md Abdul Aziz</p>
            </div>
          </div>
          <div className="menus">
            <div className="menu-list">
              <ul>
                <Link to="/" className="link">
                  <li>
                    <HomeWorkIcon className="icon" /> Home
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <InfoIcon className="icon" /> About
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <ShowChartIcon className="icon" /> Portfolio
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <MedicalInformationIcon className="icon" /> Services
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <AccountTreeIcon className="icon" /> Projects
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <PermContactCalendarIcon className="icon" /> Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;

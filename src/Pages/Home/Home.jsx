import React from "react";
import "./Home.scss";
import profile from "../../img/home.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home section grid">
      <img src={profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <div className="home__title">
            <span>I'm Md Abdul Aziz.</span> Web Developer
          </div>

          <p className="home__description">
          Experienced MERN-stack developer specializing in building dynamic web applications with React, Node.js, MongoDB, and Express. Currently working as a Network Engineer, but focused on advancing my expertise in full-stack development.
          </p>

          <Link to="/about" className="button link">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block">
        
      </div>
    </section>
  );
}

export default Home;

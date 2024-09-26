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
            <span>I'm Steve Miller.</span> Web Designer
          </div>

          <p className="home__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
            quia in libero porro, et ipsam reiciendis, ipsum ea tempore
            explicabo, illo maiores eligendi blanditiis molestias nisi alias
            labore soluta.
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

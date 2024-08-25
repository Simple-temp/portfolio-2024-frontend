import React from "react";
import "./Home.scss";
import { Col, Row } from "react-bootstrap";
import profile from "../../img/Photo-1.jpg"

function Home() {
  return (
    <div className="home">
      <Row>
        <Col md={5} sm={12} className="d-flex ps-5">
          <div className="inner-left">
            <div className="home-img">
              <img src={profile} alt="Home-profile-image" className="img-fluid home-profile" />
            </div>
          </div>
          <div className="inner-right">
            <div className="home-image-caption">
                <h1>Md Abdul Aziz</h1>
                <p>I am a MERN Stack Web Developer</p>
                <div className="social-icons">
                  facebook
                </div>
            </div>
          </div>
        </Col>
        <Col md={7} sm={12}>
          Right side
        </Col>
      </Row>
    </div>
  );
}

export default Home;

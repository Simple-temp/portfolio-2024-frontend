import React from "react";
import "./Home.scss";
import { Col, Container, Row } from "react-bootstrap";
import profile from "../../img/Photo-1.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Home() {
  return (
    <div className="home">
      <Container className="home-wrapper">
        <Row>
          <Col lg={6} md={7} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className="inner-left">
                  <div className="home-img">
                    <img
                      src={profile}
                      alt="Home-profile-image"
                      className="img-fluid home-profile"
                    />
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
                <div className="inner-right">
                  <div className="home-image-caption">
                    <h1>Md Abdul Aziz</h1>
                    <p>I am a MERN Stack Web Developer</p>
                    <div className="social-icons">
                      <FacebookIcon className="social-icon" />
                      <InstagramIcon className="social-icon" />
                      <LinkedInIcon className="social-icon" />
                      <XIcon className="social-icon" />
                      <PinterestIcon className="social-icon" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={5} sm={12} className="home-right-col">
            <Row className="d-flex justify-content-between home-right-col-inner">
              <Col lg={6} md={6} sm={12}>
                <div className="innter-right-col">
                  <div className="info">
                    <h4>Email</h4>
                    <p>example@gmail.com</p>
                  </div>
                  <div className="info">
                    <h4>Phone</h4>
                    <p>01409447002</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="innter-right-col2">
                  <div className="info">
                    <h4>Date of Birth</h4>
                    <p>2000-08-04</p>
                  </div>
                  <div className="info">
                    <h4>Location</h4>
                    <p>Dhaka</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

import React from "react";
import "./About.scss";
import { Col, Container, Row } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import about1 from "../../img/about1.jpg";
import about2 from "../../img/about1.jpg";
import about3 from "../../img/about1.jpg";

function About() {
  return (
    <div className="about">
      <Container>
        <h1 className="mt-5">About me</h1>
        <div className="about-wrapper">
          <Row>
            <Col lg={5} md={6} sm={12} className="mx-auto">
              <div className="left">
                <h4>
                  Hi There! I’m Md Abdul Aziz An Award Winning Interior
                  Designer​
                </h4>
                <p>Follow me on</p>
                <div className="social-icons">
                  <FacebookIcon className="social-icon" />
                  <InstagramIcon className="social-icon" />
                  <LinkedInIcon className="social-icon" />
                  <XIcon className="social-icon" />
                  <PinterestIcon className="social-icon" />
                </div>
              </div>
            </Col>
            <Col lg={7} md={6} sm={12} className="mx-auto">
              <p>
                A descriptive paragraph that tells clients how good you are and
                proves that you are the best choice that they’ve made. This
                paragraph is also for those who are looking out for a reliable
                interior designer. You can use a few enticing words and flaunt
                your capabilities that will attract future clients and encourage
                them to hire you right away.
              </p>
              <small>100+</small>
              <small>Projects Done</small>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="attention-to-details">
        <Container>
          <Row>
            <div className="attention-to-details-wrapper">
              <h3>Great Attention To Detail​</h3>
              <p>
                I Innovate And Bring New Possibilities In The Interior Design Of
                Each House​
              </p>
              <small>
                I am text block. Click edit button to change this text. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </small>
            </div>
          </Row>
          <Row>
            <Col lg={4} md={6} sm={10} className="mx-auto">
              <img src={about1} alt="" className="img-fluid d-block" />
            </Col>
            <Col lg={4} md={6} sm={10} className="mx-auto">
              <img src={about2} alt="" className="img-fluid d-block" />
            </Col>
            <Col lg={4} md={6} sm={10} className="mx-auto">
              <img src={about3} alt="" className="img-fluid d-block" />
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} sm={10} className="mx-auto">
              <h3>
                I’m Specialized In The Management Of Interior Design & Furniture
                Projects​
              </h3>
            </Col>
            <Col lg={4} md={6} sm={10} className="mx-auto">
              <p>
                Epteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non
              </p>
            </Col>
            <Col lg={4} md={6} sm={10}>
              <p>
                amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;

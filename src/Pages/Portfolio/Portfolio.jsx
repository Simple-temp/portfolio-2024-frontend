import React from "react";
import "./Portfolio.scss";
import { Col, Container, Row } from "react-bootstrap";
import p1 from "../../img/p1.jpg";
import p2 from "../../img/p2.jpg";
import p3 from "../../img/p3.jpg";
import p4 from "../../img/p4.jpg";
import p5 from "../../img/p5.jpg";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-wrapper">
        <Container>
          <Row>
            <Col lg={5} md={6} sm={12}>
              <div className="inner-portfolio-items">
                <h6>Living Room​</h6>
                <p>
                You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away.
                </p>
                <ul>
                  <li>First specification list goes here​</li>
                  <li>Second specification list here​​</li>
                  <li>Third specification list goes here​​</li>
                  <li>And another one goes here​​</li>
                </ul>
              </div>
            </Col>
            <Col lg={7} md={6} sm={12}>
              <img src={p1} alt="" className="img-fluid d-block"/>
            </Col>
          </Row>
          <Row>
            <Col lg={5} md={6} sm={12}>
              <div className="inner-portfolio-items">
                <h6>Living Room​</h6>
                <p>
                You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away.
                </p>
                <ul>
                  <li>First specification list goes here​</li>
                  <li>Second specification list here​​</li>
                  <li>Third specification list goes here​​</li>
                  <li>And another one goes here​​</li>
                </ul>
              </div>
            </Col>
            <Col lg={7} md={6} sm={12}>
              <img src={p2} alt="" className="img-fluid d-block"/>
            </Col>
          </Row>
          <Row>
            <Col lg={5} md={6} sm={12}>
              <div className="inner-portfolio-items">
                <h6>Living Room​</h6>
                <p>
                You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away.
                </p>
                <ul>
                  <li>First specification list goes here​</li>
                  <li>Second specification list here​​</li>
                  <li>Third specification list goes here​​</li>
                  <li>And another one goes here​​</li>
                </ul>
              </div>
            </Col>
            <Col lg={7} md={6} sm={12}>
              <img src={p3} alt="" className="img-fluid d-block"/>
            </Col>
          </Row>
          <Row>
            <Col lg={5} md={6} sm={12}>
              <div className="inner-portfolio-items">
                <h6>Living Room​</h6>
                <p>
                You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away.
                </p>
                <ul>
                  <li>First specification list goes here​</li>
                  <li>Second specification list here​​</li>
                  <li>Third specification list goes here​​</li>
                  <li>And another one goes here​​</li>
                </ul>
              </div>
            </Col>
            <Col lg={7} md={6} sm={12}>
              <img src={p4} alt="" className="img-fluid d-block"/>
            </Col>
          </Row>
          <Row>
            <Col lg={5} md={6} sm={12}>
              <div className="inner-portfolio-items">
                <h6>Living Room​</h6>
                <p>
                You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away.
                </p>
                <ul>
                  <li>First specification list goes here​</li>
                  <li>Second specification list here​​</li>
                  <li>Third specification list goes here​​</li>
                  <li>And another one goes here​​</li>
                </ul>
              </div>
            </Col>
            <Col lg={7} md={6} sm={12}>
              <img src={p5} alt="" className="img-fluid d-block"/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Portfolio;

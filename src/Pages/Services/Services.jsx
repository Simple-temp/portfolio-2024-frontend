import React from "react";
import "./Services.scss";
import { Col, Container, Row } from "react-bootstrap";
import services from "../../img/services.jpg";

function Services() {
  return (
    <div className="services-wrapper services">
      <h1>Services</h1>
      <Container>
        <Row>
          <Col lg={7} md={6} sm={12}>
            <h3>An Exemplary End Result​</h3>
            <p>
              A descriptive paragraph that tells clients how good you are and
              proves that you are the best choice that they’ve made. This
              paragraph is also for those who are looking out for a reliable
              interior designer. You can use a few enticing words and flaunt
              your capabilities that will attract future clients and encourage
              them to hire you right away. I lead projects from start to finish.
              Click edit button to change this text.
            </p>
          </Col>
          <Col lg={5} md={6} sm={12}>
            <img
              src={services}
              alt=""
              className="img-fluid d-block w-100 h-auto"
            />
          </Col>
        </Row>
        <div className="expertise">
          <Row>
            <Col lg={4} col={6} sm={12} className="py-1">
              <p>01</p>
              <h5>Interior Design​</h5>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </small>
            </Col>
            <Col lg={4} col={6} sm={12} className="py-1">
              <p>01</p>
              <h5>Interior Design​</h5>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </small>
            </Col>
            <Col lg={4} col={6} sm={12} className="py-1">
              <p>01</p>
              <h5>Interior Design​</h5>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </small>
            </Col>
            <Col lg={4} col={6} sm={12} className="py-1">
              <p>01</p>
              <h5>Interior Design​</h5>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </small>
            </Col>
            <Col lg={4} col={6} sm={12} className="py-1">
              <p>01</p>
              <h5>Interior Design​</h5>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </small>
            </Col>
            <Col lg={4} col={6} sm={12} className="py-1">
              <p>01</p>
              <h5>Interior Design​</h5>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </small>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Services;

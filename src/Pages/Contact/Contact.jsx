import React from "react";
import "./Contact.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Col, Container, Row } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <Container>
        <Row>
          <Col lg={8} md={8} sm={12} className="mx-auto">

              <TextField id="outlined-basic" label="Outlined" variant="outlined" className="input-field" />
              <TextField id="outlined-basic" label="Outlined" variant="outlined" className="input-field" />
              <TextField id="outlined-basic" label="Outlined" variant="outlined" className="input-field" />
              <TextField id="outlined-basic" label="Outlined" variant="outlined" className="input-field" />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

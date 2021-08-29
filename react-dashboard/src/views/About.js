import React from "react";
import "./About.css";
import Avery from "../assets/img/avery.jpeg";
import Luqmaan from "../assets/img/Luqmaan.jpeg";
import Teila from "../assets/img/Teila.jpg";

// react-bootstrap components
import { Image, Button, Col, Card, Container, Row } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <h1> The Developers Room </h1>
      <Container className="about-container">
        <Row>
          <Col xs={1} md={1} lg={1} className="img-vert">
            <Image className="photosizing" src={Luqmaan} roundedCircle />
          </Col>
        </Row>
        <Card
          bg="light"
          style={{ width: "18rem" }}
          className="mb-2 text-center"
        >
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title> Luqmaan Bradford </Card.Title>
            <Card.Text>
              Full Stack Developer{" "}
              <b>
                <i>|| </i>{" "}
              </b>
              Project Manager{" "}
              <b>
                <i>|| </i>{" "}
              </b>
              IT Technician
            </Card.Text>
          </Card.Body>
        </Card>
        <Row>
          <Col xs={1} md={1} lg={1} className="img-vert">
            <Image className="photosizing" src={Teila} roundedCircle />
          </Col>
        </Row>
        <Card
          bg="light"
          style={{ width: "18rem" }}
          className="mb-2 text-center"
        >
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title> Teila Garraway </Card.Title>
            <Card.Text>Full Stack Developer </Card.Text>
          </Card.Body>
        </Card>
        <Row>
          <Col xs={1} md={1} lg={1} className="img-vert">
            <Image className="averyphotosizing" src={Avery} roundedCircle />
          </Col>
        </Row>
        <Card
          bg="light"
          style={{ width: "18rem" }}
          className="mb-2 text-center"
        >
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title> Avery </Card.Title>
            <Card.Text>Full Stack Developer </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
export default AboutUs;

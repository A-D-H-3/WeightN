import React from "react";
import "./About.css";
import Avery from "../assets/img/avery.jpeg";
import Luqmaan from "../assets/img/Luqmaan.jpeg";
import Teila from "../assets/img/Teila.jpg";
import GITHUB from "assets/img/github-icon-removebg-preview.png";
import LINKEDIN from "assets/img/linkedin.png";

// react-bootstrap components
import { Image, Button, Col, Card, Container, Row } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <Container>
        <h1> The Developers Room </h1>

        <Row xs={1} md={2}>
          <Col>
            <Card id="card-top" style={{ width: "16rem" }}>
              <Card.Img id="card-img" variant="top" src={Luqmaan} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="card-txt">
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
                <Button className="our-button" variant="primary">
                  <span className="sign-in-google">
                    <img src={GITHUB} />
                  </span>
                  <span className="sign-in-google">
                    <img src={LINKEDIN} />
                  </span>
                </Button>
              </Card.Body>
            </Card>
            <Card id="card-top" style={{ width: "16rem" }}>
              <Card.Img id="card-img" variant="top" src={Teila} />
              <Card.Body>
                <Card.Title>Teila Garraway</Card.Title>
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
                <Button className="our-button" variant="primary">
                  <span className="sign-in-google">
                    <img src={GITHUB} />
                  </span>
                  <span className="sign-in-google">
                    <img src={LINKEDIN} />
                  </span>
                </Button>
              </Card.Body>
            </Card>
            <Card id="card-top" style={{ width: "16rem" }}>
              <Card.Img id="card-img-avery" variant="top" src={Avery} />
              <Card.Body>
                <Card.Title>Avery Hampton</Card.Title>
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
                <Button className="our-button" variant="primary">
                  <span className="sign-in-google">
                    <img src={GITHUB} />
                  </span>
                  <span className="sign-in-google">
                    <img src={LINKEDIN} />
                  </span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutUs;

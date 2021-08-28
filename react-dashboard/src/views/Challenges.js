import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import push from "assets/img/shape-push_up_challenge.jpg";
import ab from "assets/img/30-day-ab.jpeg";
import pull from "assets/img/30-day-pull-up.jpeg";
import squat from "assets/img/30-day-squat.jpeg";
import full from "assets/img/90-day-full-body.jpg";
import running from "assets/img/6wk-running.jpg";

function ChallengeList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Let the fun Begin!!</Card.Title>
                <p className="card-category">
                  Challenge Yourself and Your Friends
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Level</th>
                      <th className="border-0">Challenge</th>
                      <th className="border-0">Length</th>
                      <th className="border-0">Calendar</th>
                      <th className="border-0">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3</td>
                      <td>Push-Up</td>
                      <td>30 Days</td>
                      <td onClick={() => window.open(push, "_blank")}>
                        Push-Up Calendar
                      </td>
                      <td>Strength</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Ab</td>
                      <td>30 Days</td>
                      <td onClick={() => window.open(ab, "_blank")}>
                        Ab Calendar
                      </td>
                      <td>Tone</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Pull-Up </td>
                      <td>30 Days</td>
                      <td onClick={() => window.open(pull, "_blank")}>
                        Pull-Up Calendar
                      </td>
                      <td>Strength</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Full Body </td>
                      <td>90 Days</td>
                      <td onClick={() => window.open(full, "_blank")}>
                        Full Body Calendar
                      </td>
                      <td>Conditioning</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Running</td>
                      <td>6 Weeks</td>
                      <td onClick={() => window.open(running, "_blank")}>
                        Run Calendar
                      </td>
                      <td>Endurance</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Squat</td>
                      <td>30 Days</td>
                      <td onClick={() => window.open(squat, "_blank")}>
                        Squat Calendar
                      </td>
                      <td>Tone</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default ChallengeList;

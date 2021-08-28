import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react-bootstrap components
import {
  Alert,
  Badge,
  Button,
  Card,
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import {ChatRoom} from "../services/login";

function ChatBox() {
  
  return (
    <>
      <div className="rna-container">
        {/* <NotificationAlert ref={notificationAlertRef} /> */}
      </div>
      <Container fluid>
        <Card>
          <ChatRoom />
        </Card>
      </Container>
    </>
  );
}

export default ChatBox;

import { Container, Row, Tabs, Tab } from "react-bootstrap";
import React from "react";
import "./Tabs.css";

const BsTabs = () => {
  return (
    <div>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Tabs
            justify
            variant="pills"
            defaultActiveKey="home"
            className="mb-1 p=0"
          >
            <Tab eventKey="home" title="Home">
              Home
            </Tab>
            <Tab eventKey="samePage" title="Profile">
              Profile
            </Tab>
            <Tab eventKey="contact" title="Contact">
              Contact
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default BsTabs;

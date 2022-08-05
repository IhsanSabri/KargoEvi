import { Container, Row, Tabs, Tab } from "react-bootstrap";
import React from "react";
import '../styles/Tabs.css';

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
            <Tab eventKey="kurye Tasimasi" title="Kurye Tasimasi">
              Kurye Tasimasi
            </Tab>
            <Tab eventKey="Hava Yolu Tasimasi" title="Hava Yolu Tasimasi">
              Hava Yolu Tasimasi
            </Tab>
            <Tab eventKey="Deniz Yolu Tasimasi " title="Deniz Yolu Tasimasi">
              Deniz Yolu Taşıması
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default BsTabs;

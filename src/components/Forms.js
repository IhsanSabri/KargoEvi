import React from 'react'
import BsTabs from "./BsTabs";
import { Container,Row, Col, Form, Button } from "react-bootstrap";

const Forms = () => {
  return (
    <div>

<div className="planner">
                  <BsTabs />
                  <Form style={{display:"flex", margin:"0px 0px 20px 40px"}}>
                  <Form.Check type="radio" aria-label="radio 1" />
                  Turkiye'den gonder
                  <Form.Check type="radio" aria-label="radio 1" />
                  Turkiye'ye getir
    </Form>
    <Form.Select aria-label="Default select example" style={{margin:" 0px 10px 30px 20px;"}}>
      <option>Nereye</option>
      <option value="1">Almanya</option>
      <option value="2">Turkiye</option>
    </Form.Select>
    <Form style={{display:"flex", margin:"0px 10px 15px 13px"}}>
    <Form.Label htmlFor="inputPassword5">AGRILIK</Form.Label>
      <Form.Control
          aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
       
      </Form.Text>    <Form.Label htmlFor="inputPassword5">Uzunluk</Form.Label>
      <Form.Control

        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
       
      </Form.Text>    <Form.Label htmlFor="inputPassword5">GENSLIK</Form.Label>
      <Form.Control
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
       
      </Form.Text>    <Form.Label htmlFor="inputPassword5">YUKSELIK</Form.Label>
      <Form.Control
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
      </Form.Text>
      </Form>
      <Container style={{display:"flex"}}>
      <Row>
        <Col>Odenecek Tutar: 
        21 USD</Col>
        
      </Row>
      
        <Button variant="danger" size="sm">
        Devam ET
        </Button>
        </Container>
        </div>

    </div>
  )
}

export default Forms
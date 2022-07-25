import React from "react";
import BsTabs from "./BsTabs";
import { Container,Row, Col, Form, Button, Card } from "react-bootstrap";
import "./style.css";

const Home = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://i.pinimg.com/originals/03/c7/5f/03c75fa1c2f9c4e2cbb547b6bfb1c440.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "99.8vw",
          height: "91vh",
          overScroll: "none",
          overflow: "none",
        }}
      >
        
                <div className="planner">
                  <BsTabs />
                  <Form style={{display:"flex"}}>
                  <Form.Check type="radio" aria-label="radio 1" />
                  Turkiye'den gonder
                  <Form.Check type="radio" aria-label="radio 1" />
                  Turkiye'ye getir
    </Form>
    <Form.Select aria-label="Default select example">
      <option>Nereye</option>
      <option value="1">Almanya</option>
      <option value="2">Turkiye</option>
    </Form.Select>
    <Form style={{display:"flex"}}>
    <Form.Label htmlFor="inputPassword5">AGRILIK</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
       
      </Form.Text>
      <Form.Label htmlFor="inputPassword5">AGRILIK</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
       
      </Form.Text>    <Form.Label htmlFor="inputPassword5">Uzunluk</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
       
      </Form.Text>    <Form.Label htmlFor="inputPassword5">GENSLIK</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
       
      </Form.Text>    <Form.Label htmlFor="inputPassword5">YUKSELIK</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
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
        
              
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
        kurumsal müşterilerimiz <br /> ozel 15'e varan ekstra <br />{" "}
          indirimleri icin
        </Card.Text>
        <Button variant="secondary">iletişim icin</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
        KargoEvi <br /> Nasil Calisir?  > 
      </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
        Cinden Urun <br /> Nasil Cetriir?  > 
      </Card.Text>
      </Card.Body>
    </Card>
        </div>
        </div>
  );
};
export default Home;

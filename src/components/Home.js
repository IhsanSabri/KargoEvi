import React from "react";
import BsTabs from "./BsTabs";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Cards from "./Cards";
import "./style.css";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(" + "https://i.ibb.co/M1ZfgWx/background.png" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          overScroll: "none",
          overflow: "none",
        }}
      >
        <div className="planner">
          <BsTabs />
          <div className="checkbox">
            <Form style={{ display: "flex" }}>
              <Form.Check type="radio" aria-label="radio 1" />
              Turkiye'den gonder
              <Form.Check type="radio" aria-label="radio 1" />
              Turkiye'ye getir
            </Form>
          </div>
          <div className="form">
            <div className="select">
              <Form.Select aria-label="Default select example">
                <option>Nereye</option>
                <option value="1">Almanya</option>
                <option value="2">Turkiye</option>
              </Form.Select>
            </div>
            <div className="input">
              <Form style={{ display: "flex" }}>
                <Form.Label htmlFor="inputPassword5">AGRILIK</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted></Form.Text>{" "}
                <Form.Label htmlFor="inputPassword5">Uzunluk</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted></Form.Text>{" "}
                <Form.Label htmlFor="inputPassword5">GENSLIK</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted></Form.Text>{" "}
                <Form.Label htmlFor="inputPassword5">YUKSELIK</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted></Form.Text>
              </Form>
            </div>
            <div className="container-bottom">
              <Container style={{ display: "flex" }}>
                <Row>
                  <Col>
                    Odenecek Tutar: <br />0 USD
                  </Col>
                </Row>
                <div className="button">
                  <Button className="bottom-botton" variant="danger" size="sm">
                    Devam ET
                  </Button>
                </div>
              </Container>
            </div>
          </div>
        </div>

        {/*               
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
    </Card> */}

        <Cards />
      </div>
    </div>
  );
};
export default Home;

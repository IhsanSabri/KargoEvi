import React from "react";
import { Card, Button } from "react-bootstrap";
import '../styles/Cards.css';

const Cards = () => {
  return (
    <div className="cards">
      <Card className="firstcard">
        <Card.Body>
          <Card.Text>
            kurumsal müşterilerimiz <br /> ozel 15'e varan ekstra <br />{" "}
            indirimleri icin
          </Card.Text>
          <Button className='btn btn-outline-secondary"' variant="secondary">
            iletişim icin
          </Button>
        </Card.Body>
      </Card>
      <Card className="middlecard" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>
            KargoEvi <br /> Nasil Calisir? >
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="bottomcard">
        <Card.Body>
          <Card.Text>
            Cinden Urun <br /> Nasil Cetriir? >
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;

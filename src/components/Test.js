import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/Home.css";

const Test = () => {
  return (
    <div id="mainPage">
      <div className="mainImage">
        <img
          className="h-100 w-100"
          src="https://i.ibb.co/M1ZfgWx/background.png"
          alt="MainPageImage"
        />
      </div>
      <div className="contactTab">
        <div>Kurumsal müşterilerimize özel %15'e varan ekstra indirim için</div>
        <div className="button">
          <Button className="bottom-botton" variant="danger" size="sm">
            Devam ET
          </Button>
        </div>
      </div>
      <div className="infoTab"></div>
      <div className="transportInfoTab"></div>
    </div>
  );
};

export default Test;

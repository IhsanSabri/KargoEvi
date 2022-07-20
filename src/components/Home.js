import React from "react";
import { Tabs, Form } from "react-bootstrap";
import "./style.css";

const Home = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <>
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
        <div className="section>">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="planner">
                  <Tabs />
                  <div className="form-group">
                    <div className="checkbox">
                      <div className="row">
                        <label>
                          <input
                            className="checkbox-round"
                            type="checkbox"
                            defaultChecked={checked}
                            onChange={() => setChecked(!checked)}
                          />
                          Türkiye'den Gönder
                        </label>
                      </div>
                      <label>
                        <input
                          className="checkbox-round"
                          type="checkbox"
                          defaultChecked={!checked}
                          onChange={() => setChecked(!checked)}
                        />
                        Türkiye'ye Getir
                      </label>
                    </div>
                    <div className="form">
                      <div className="row">
                        <label htmlFor="">Kurye Taşıması</label>
                      </div>
                      <div className="space">
                        <Form.Select
                          aria-label="Default select example"
                          size="sm"
                          width="50%"
                          margin="auto"
                        >
                          <option>Nereye</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                        </Form.Select>
                      </div>
                      <div className="input-container">
                        <div className="labels">
                          <div className="inputs">
                            <label>AĞRILIK</label>
                            <input type="weight" placeholder="KG" />
                            <label>UZUNLUK</label>
                            <input type="height" placeholder="CM" />
                            <label>CENSLIK</label>
                            <input type="height" placeholder="CM" />
                            <label> YUKSELIK</label>
                            <input type="height" placeholder="CM" />
                          </div>
                        </div>
                      </div>
                      <div className="total">
                        <h2>ODENECEK TUTAR</h2>
                      </div>
                      <button>DEVAM ET</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

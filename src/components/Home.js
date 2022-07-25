import React from "react";
import BsTabs from "./BsTabs";
import { Form } from "react-bootstrap";
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
                  <BsTabs />
                  <div className="form-group">
                    <label htmlFor="">Kurye Taşıması</label>
                    <div className="checkbox">
                      <div className="row">
                        <label>
                          <input
                            className="checkbox-round"
                            type="checkbox"
                            defaultChecked={checked}
                            onChange={() => setChecked(!checked)}
                          />
                          Türkiye'ye Getir
                        </label>
                      </div>
                      <label>
                        <input
                          className="checkbox-round"
                          type="checkbox"
                          defaultChecked={!checked}
                          onChange={() => setChecked(!checked)}
                        />
                        Türkiye'den Gönder
                      </label>
                    </div>
                    <div className="form">
                      <div className="space">
                        <Form.Select
                          aria-label="Default select example"
                          size="sm"
                          width="50%"
                          margin="auto"
                        >
                          <option>Nereye</option>
                          <option value="1">Almanya</option>
                          <option value="2">Türkiye</option>
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
        <p className="communicate">
          kurumsal müşterilerimiz <br /> ozel 15'e varan ekstra <br />{" "}
          indirimleri icin
          <button>iletişim icin</button>
        </p>
        <label className="bottom">
          KargoEvi <br /> Nasil Calisir?{" "}
        </label>
        <label htmlFor="" className="bottom2">
          {" "}
          Cin'den Urun <br /> Nasil Getirir?
        </label>
      </div>
    </>
  );
};
export default Home;

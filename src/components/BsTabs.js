import React, { useState } from "react";
import { Link } from "react-router-dom";

const BsTabs = (props) => {
  const [checked, setChecked] = useState("false");
  const [sechecked, setSechecked] = useState("false");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [selected, setSelected] = useState("");

  const getFormData = (e) => {
    console.log(checked, sechecked, selected, weight, length, width, height);
  };
  return (
    <div
      className="container"
      style={{
        fontFamily: "Poppins, sans-seri",
        position: "absolute",
        top: "50px",
        right: "15%",
      }}
    >
      <div className="row d-none d-sm-block">
        <div
          className="col-md-7 col-lg-4 offset-md-4 offset-lg-8"
          style={{
            paddingRight: "0",
            paddingLeft: "0",
          }}
        >
          <div
            id="anasayfaSliderTab"
            style={{ width: "455px", marginLeft: "-30px" }}
          >
            <ul
              className="nav nav-tabs nav-justified"
              role="tablist"
              style={{
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              <li
                className="nav-item"
                role="presentation"
                style={{ marginRight: "5px" }}
              >
                <a
                  className="nav-link active anasayfaSliderTab"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#tab-1"
                  style={{
                    color: "#141414",
                    padding: "15px 10px 15px 10px",
                    background: "#d1dbe5",
                  }}
                >
                  Kurye Taşıması
                </a>
              </li>
              <li
                className="nav-item"
                role="presentation"
                style={{ marginRight: "5px" }}
              >
                <a
                  className="nav-link anasayfaSliderTab"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#tab-2"
                  style={{
                    color: "#141414",
                    padding: "15px 10px 15px 10px",
                    background: "#d1dbe5",
                  }}
                >
                  Havayolu Taşıması
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link anasayfaSliderTab"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#tab-3"
                  style={{
                    color: "#141414",
                    padding: "15px 10px 15px 10px",
                    background: "#d1dbe5",
                  }}
                >
                  Denizyolu Taşıması
                </a>
              </li>
            </ul>
            <div
              className="tab-content"
              style={{
                padding: "25px 30px 25px 30px",
                background: "#ffffff",
              }}
            >
              <div className="tab-pane active" role="tabpanel" id="tab-1">
                <div className="row" value={checked}>
                  <div className="col-lg-6">
                    <div className="form-check">
                      <input
                        value={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                        type="radio"
                        aria-label="radio 1"
                        defaultChecked
                        className="form-check-input shadow-none"
                        id="formCheck-1"
                        style={{
                          width: "23px",
                          height: "23px",
                        }}
                        name="anasayfaslidertabradio"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formCheck-1"
                        style={{
                          padding: "4px 0 0 8px",
                          fontWeight: "300",
                        }}
                      >
                        Türkiye'den Gönder
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-check">
                      <input
                        value={sechecked}
                        onChange={(e) => {
                          setSechecked(e.target.sechecked);
                        }}
                        type="radio"
                        aria-label="radio 2"
                        className="form-check-input shadow-none"
                        id="formCheck-2"
                        style={{
                          width: "23px",
                          height: "23px",
                        }}
                        name="anasayfaslidertabradio"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formCheck-2"
                        style={{
                          padding: "4px 0 0 8px",
                          fontWeight: "300",
                        }}
                      >
                        Türkiye'ye Getir
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ paddingTop: "30px", textAlign: "left" }}
                >
                  <div className="col-lg-12">
                    <label
                      className="form-label"
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "var(--bs-gray)",
                        marginBottom: "0",
                      }}
                    >
                      NEREYE
                    </label>
                    <select
                      value={selected}
                      onChange={(e) => setSelected(e.target.value)}
                      className="form-select shadow-none"
                      style={{
                        height: "55px",
                        color: "var(--bs-gray)",
                      }}
                    >
                      <option value="" defaultValue="">
                        Seçiniz
                      </option>
                      <option value="Turkiye">Turkiye</option>
                      <option value="Almanya">Almanya</option>
                    </select>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ paddingTop: "30px", textAlign: "left" }}
                >
                  <div className="col-md-3">
                    <label
                      className="form-label"
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "var(--bs-gray)",
                        marginBottom: "0",
                      }}
                    >
                      AĞIRLIK
                    </label>
                    <div className="input-group">
                      <input
                        id="1"
                        type="text"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="form-control shadow-none"
                        style={{
                          borderRightWidth: "0",
                          fontSize: "15px",
                          padding: "12px 6px 12px 9px",
                        }}
                      />
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgb(255,255,255)",
                          borderLeftWidth: "0",
                          fontSize: "15px",
                          padding: "0 6px 0 6px",
                        }}
                      >
                        KG
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label
                      className="form-label"
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "var(--bs-gray)",
                        marginBottom: "0",
                      }}
                    >
                      UZUNLUK
                    </label>
                    <div className="input-group">
                      <input
                        id="2"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="form-control shadow-none"
                        type="text"
                        style={{
                          borderRightWidth: "0",
                          fontSize: "15px",
                          padding: "12px 6px 12px 9px",
                        }}
                      />
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgb(255,255,255)",
                          borderLeftWidth: "0",
                          fontSize: "15px",
                          padding: "0 6px 0 6px",
                        }}
                      >
                        CM
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label
                      className="form-label"
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "var(--bs-gray)",
                        marginBottom: "0",
                      }}
                    >
                      GENİŞLİK
                    </label>
                    <div className="input-group">
                      <input
                        id="3"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="form-control shadow-none"
                        type="text"
                        style={{
                          borderRightWidth: "0",
                          fontSize: "15px",
                          padding: "12px 6px 12px 9px",
                        }}
                      />
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgb(255,255,255)",
                          borderLeftWidth: "0",
                          fontSize: "11px",
                          padding: "0 6px 0 6px",
                        }}
                      >
                        CM
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label
                      className="form-label"
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "var(--bs-gray)",
                        marginBottom: "0",
                      }}
                    >
                      YÜKSEKLİK
                    </label>
                    <div className="input-group">
                      <input
                        id="4"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="form-control shadow-none"
                        type="text"
                        style={{
                          borderRightWidth: "0",
                          fontSize: "15px",
                          padding: "12px 6px 12px 9px",
                        }}
                      />
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgb(255,255,255)",
                          borderLeftWidth: "0",
                          fontSize: "11px",
                          padding: "0 6px 0 6px",
                        }}
                      >
                        CM
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ paddingTop: "30px", textAlign: "left" }}
                >
                  <div className="col-md-6">
                    <label className="form-label" style={{ marginBottom: "0" }}>
                      Ödenecek Tutar
                    </label>
                    <label
                      className="form-label"
                      style={{
                        fontSize: "31px",
                        fontWeight: "500",
                      }}
                    >
                      USD 21,23
                    </label>
                  </div>
                  <Link className="flex flex-row-reverse mt-[-5rem] no-underline" to="/page2">
                    <div className="col-md-6 d-xl-flex justify-content-xl-center align-items-xl-center">
                      <div
                        onClick={getFormData}
                        variant="danger"
                        className="btn btn-danger btn-lg d-xl-flex shadow-none"
                        role="button"
                        style={{
                          padding: "14px 35px 14px 35px",
                          zIndex: "4",
                        }}
                      >
                        Devam Et &gt;
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="tab-pane" role="tabpanel" id="tab-2">
                <p>Test</p>
              </div>
              <div className="tab-pane" role="tabpanel" id="tab-3">
                <p>Test</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BsTabs;

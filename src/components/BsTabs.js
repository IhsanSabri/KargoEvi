import React from "react";

const BsTabs = () => {
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
            paddingLeft: "0"
          }}
        >
          <div id="anasayfaSliderTab" style={{ width: "455px", marginLeft: "-30px" }}>
            <ul
              className="nav nav-tabs nav-justified"
              role="tablist"
              style={{
                fontSize: "12px",
                fontWeight: "500"
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
                    background: "#d1dbe5"
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
                    background: "#d1dbe5"
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
                    background: "#d1dbe5"
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
                background: "#ffffff"
              }}
            >
              <div className="tab-pane active" role="tabpanel" id="tab-1">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-check">
                      <input
                        className="form-check-input shadow-none"
                        type="radio"
                        id="formCheck-1"
                        style={{
                          width: "23px",
                          height: "23px"
                        }}
                        name="anasayfaslidertabradio"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formCheck-1"
                        style={{
                          padding: "4px 0 0 8px",
                          fontWeight: "300"
                        }}
                      >
                        Türkiye'den Gönder
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-check">
                      <input
                        className="form-check-input shadow-none"
                        type="radio"
                        id="formCheck-2"
                        style={{
                          width: "23px",
                          height: "23px"
                        }}
                        name="anasayfaslidertabradio"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="formCheck-2"
                        style={{
                          padding: "4px 0 0 8px",
                          fontWeight: "300"
                        }}
                      >
                        Türkiye'ye Getir
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "30px", textAlign: "left" }}>
                  <div className="col-lg-12">
                    <label
                      className="form-label"
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "var(--bs-gray)",
                        marginBottom: "0"
                      }}
                    >
                      NEREYE
                    </label>
                    <select
                      className="form-select shadow-none"
                      style={{
                        height: "55px",
                        color: "var(--bs-gray)"
                      }}
                    >
                      <option value="" defaultValue="">
                        Seçiniz
                      </option>
                      <option value="">Almanya</option>
                    </select>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "30px", textAlign: "left" }}>
                  <div className="col-md-3">
                    <label
                      className="form-label"
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "var(--bs-gray)",
                        marginBottom: "0"
                      }}
                    >
                      AĞIRLIK
                    </label>
                    <div className="input-group">
                      <input
                        className="form-control shadow-none"
                        type="text"
                        style={{
                          borderRightWidth: "0",
                          fontSize: "15px",
                          padding: "12px 6px 12px 9px"
                        }}
                      />
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgb(255,255,255)",
                          borderLeftWidth: "0",
                          fontSize: "15px",
                          padding: "0 6px 0 6px"
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
                        marginBottom: "0"
                      }}
                    >
                      UZUNLUK
                    </label>
                    <div className="input-group">
                      <input
                        className="form-control shadow-none"
                        type="text"
                        style={{
                          borderRightWidth: "0",
                          fontSize: "15px",
                          padding: "12px 6px 12px 9px"
                        }}
                      />
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgb(255,255,255)",
                          borderLeftWidth: "0",
                          fontSize: "15px",
                          padding: "0 6px 0 6px"
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
                        marginBottom: "0"
                      }}
                    >
                      GENİŞLİK
                    </label>
                    <div className="input-group">
                      <input
                        className="form-control shadow-none"
                        type="text"
                        style={{
                          borderRightWidth: "0",
                          fontSize: "15px",
                          padding: "12px 6px 12px 9px"
                        }}
                      />
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgb(255,255,255)",
                          borderLeftWidth: "0",
                          fontSize: "11px",
                          padding: "0 6px 0 6px"
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
                        marginBottom: "0"
                      }}
                    >
                      YÜKSEKLİK
                    </label>
                    <div className="input-group">
                      <input
                        className="form-control shadow-none"
                        type="text"
                        style={{
                          borderRightWidth: "0",
                          fontSize: "15px",
                          padding: "12px 6px 12px 9px"
                        }}
                      />
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgb(255,255,255)",
                          borderLeftWidth: "0",
                          fontSize: "11px",
                          padding: "0 6px 0 6px"
                        }}
                      >
                        CM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "30px", textAlign: "left" }}>
                  <div className="col-md-6">
                    <label className="form-label" style={{ marginBottom: "0" }}>
                      Ödenecek Tutar
                    </label>
                    <label
                      className="form-label"
                      style={{
                        fontSize: "31px",
                        fontWeight: "500"
                      }}
                    >
                      USD 21,23
                    </label>
                  </div>
                  <div className="col-md-6 d-xl-flex justify-content-xl-center align-items-xl-center">
                    <a
                      className="btn btn-danger btn-lg d-xl-flex shadow-none"
                      role="button"
                      style= {{
                        padding: "14px 35px 14px 35px",
                        zIndex: "4"
                      }}
                      href="urun-icerik-bilgileri.html"
                    >
                      Devam Et &gt;
                    </a>
                  </div>
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

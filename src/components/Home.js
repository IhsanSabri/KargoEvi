import React from "react";
import BsTabs from "./BsTabs";
import "../styles/Home.css";
import firstImage from "../assests/cin.jpg";
import secondImage from "../assests/nasilcalisir.webp";
import backgroundImage from "../assests/background.png";

const Home = ({ nexPageLink }) => {
  console.log('testson');
  return (
    <div id="mainPage">
      <div className="mainImage">
        <img
          className="h-100 w-100"
          src={backgroundImage}
          alt="MainPageImage"
        />
      </div>
      <BsTabs nextPageLink={nexPageLink}/>
      <div
        className="container d-md-none d-lg-block d-sm-none d-md-block d-none"
        id="mainPageBottomSlider"
      >
        <div className="row d-xl-flex d-xxl-flex align-items-xl-end align-items-xxl-end">
          <div className="col-lg-4">
            <div
              className="card"
              style={{
                background: "#7c8da1",
                padding: "23px",
                borderRadius: "6px",
              }}
            >
              <div className="card-body">
                <h4
                  className="card-title"
                  style={{
                    color: "rgb(255,255,255)",
                    fontWeight: "300",
                    lineHeight: "44px",
                    fontSize: "28px",
                    textAlign: "left",
                    width: "85%",
                  }}
                >
                  Kurumsal müşterilerimize özel %15'e varan ekstra indirimler
                  için
                </h4>
                <button
                  className="btn btn-outline-light"
                  type="button"
                  style={{
                    padding: "12px 20px 12px 20px",
                    marginTop: "19px",
                    fontSize: "18px",
                    float: "left",
                  }}
                >
                  İletişime Geçin
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card"
              style={{
                borderRadius: "6px",
              }}
            >
              <div
                className="card-body"
                style={{
                  background: "#ffffff",
                  borderRadius: "6px",
                  padding: "0",
                }}
              >
                <div className="row">
                  <div className="col-md-6" style={{ paddingRight: "0px" }}>
                    <img
                      className="img-fluid"
                      src={firstImage}
                      style={{ borderRadius: "4px" }}
                      alt="firstImage"
                    />
                  </div>
                  <div
                    className="col-md-5 d-xl-flex justify-content-xl-center align-items-xl-center"
                    style={{ marginLeft: "-10px" }}
                  >
                    <h4
                      style={{
                        color: "var(--bs-gray-800)",
                        fontSize: "22px",
                        fontWeight: "500",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "35,4px",
                      }}
                    >
                      KargoEvi Nasıl Çalışır?
                    </h4>
                  </div>
                  <div
                    className="col d-xl-flex align-items-xl-center"
                    style={{
                      fontSize: "25px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-chevron-right"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card" style={{ borderRadius: "6px" }}>
              <div
                className="card-body"
                style={{
                  background: "#ffffff",
                  borderRadius: "6px",
                  padding: "unset",
                }}
              >
                <div className="row">
                  <div className="col-md-6" style={{ paddingRight: "0px" }}>
                    <img
                      className="img-fluid"
                      src={secondImage}
                      style={{ borderRadius: "4px" }}
                      alt="secondImage"
                    />
                  </div>
                  <div
                    className="col-md-5 d-xl-flex justify-content-xl-center align-items-xl-center"
                    style={{ marginLeft: "-10px" }}
                  >
                    <h4
                      style={{
                        color: "var(--bs-gray-800)",
                        fontSize: "22px",
                        fontWeight: "500",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "35,4px",
                      }}
                    >
                      Çinden Ürün Nasıl Getirilir?
                    </h4>
                  </div>
                  <div
                    className="col d-xl-flex align-items-xl-center"
                    style={{
                      fontSize: "25px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-chevron-right"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

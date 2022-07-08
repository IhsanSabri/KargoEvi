import React from "react";
import { style } from "./style.css";

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
                  <form>
                    <div className="row">
                      <label>
                        <input
                          type="checkbox"
                          defaultChecked={checked}
                          onChange={() => setChecked(!checked)}
                        />
                        Türkiye'den Gönder
                      </label>
                    </div>
                    <div className="row">
                      <label>
                        <input
                          type="checkbox"
                          defaultChecked={!checked}
                          onChange={() => setChecked(!checked)}
                        />
                        Türkiye'ye Getir
                      </label>
                    </div>
                    <div className="row">
                      <label htmlFor="">Kurye Taşıması</label>
                      <label> Nereye</label>
                    </div>
                    <div className="row">
                      <select>
                        <option value="">Almanya</option>
                        <option value=""></option>
                      </select>
                    </div>
                    <div className="inputs">
                      <div className="row">
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
                    <div className="row">
                      <div className="total">
                        <h2>ODENECEK TUTAR</h2>
                      </div>
                      <button>DEVAM ET</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// const Section = styled.section`
//   margin-top: 2rem;
//   position: relative;
//   .background {
//     img {
//       height: 90vh;
//       width: 100%;
//     }
//   }
//   .content {
//     .info {
//       position: absolute;
//       top: 5rem;
//       margin-left: 8rem;
//       h1 {
//         font-size: 5rem;
//         margin-bottom: 2rem;
//       }
//     }
//     .planner {
//       position: absolute;
//       bottom: -2rem;
//       right: 0;
//       background-color: white;
//       padding: 2rem;
//       box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//       form {
//         display: flex;
//         align-items: center;
//         justify-content: flex-end;
//         gap: 3rem;
//         .row {
//           display: flex;
//           flex-direction: column;
//           text-align: start;
//           label {
//             font-size: 0.7rem;
//             color: var(--secondary-text);
//           }
//           input[type="date"]::-webkit-calendar-picker-indicator {
//             cursor: pointer;
//             filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
//               brightness(105%) contrast(101%);
//           }
//           input:focus {
//             outline: none;
//           }
//           input,
//           select {
//             border: none;
//             width: 100%;
//             color: var(--primary-color);
//             margin-top: 0.5rem;
//             background-color: white;
//             font-size: 1.1rem;
//             border-bottom: 1px solid #f5ebe9;
//             padding-bottom: 0.3rem;
//           }
//         }
//       }
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     .background {
//       img {
//         height: 50vh;
//       }
//     }
//     .content {
//       .info {
//         margin-left: 2rem;
//         h1 {
//           font-size: 2rem;
//           margin-bottom: 1rem;
//         }
//       }
//       .planner {
//         position: initial;
//         margin: 2rem;
//         form {
//           align-items: flex-start;
//           flex-direction: column;
//         }
//       }
//     }
//   }
// `;

export default Home;

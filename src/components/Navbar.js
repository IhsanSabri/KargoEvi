import "../styles/Navbar.css";
import logo from "../assests/logo.png";

function NavBar() {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg"
      style={{
        background: "#262b37",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="container" id="menu">
        <img className="navbar-brand" src={logo} alt="brandImage" />
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler shadow-none"
          data-bs-target="#navcol-2"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navcol-2"
          style={{
            fontSize: "17px",
            fontWeight: "300",
          }}
        >
          <ul className="navbar-nav">
            <li className="nav-item" style={{ paddingRight: "20px" }}>
              <a className="nav-link active" href="#">
                Hizmetlerimiz
              </a>
            </li>
            <li className="nav-item" style={{ paddingRight: "20px" }}>
              <a className="nav-link active" href="#">
                Blog &amp; Haberler
              </a>
            </li>
            <li className="nav-item" style={{ paddingRight: "20px" }}>
              <a className="nav-link active" href="#">
                Bilgi Bankası
              </a>
            </li>
            <li className="nav-item" style={{ paddingRight: "20px" }}>
              <a className="nav-link active" href="#">
                Gönderi Takibi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                İletişim
              </a>
            </li>
            <li className="nav-item d-block d-sm-none d-md-block d-lg-none">
              <a className="nav-link active" href="#">
                Üyelik
              </a>
            </li>
            <li className="nav-item d-block d-sm-none d-md-block d-lg-none">
              <a className="nav-link active" href="#">
                Sepetim
              </a>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-outline-light d-md-none d-lg-block d-sm-none d-md-block d-none"
          type="button"
          style={{
            padding: "9px 27px 9px 22px",
            fontWeight: "300",
            borderRadius: "2px",
            marginRight: "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-person"
            style={{ width: "20px", height: "20px" }}
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
          </svg>
          &nbsp; Üyelik
        </button>
        <button
          className="btn btn-outline-light d-md-none d-lg-block d-sm-none d-md-block d-none"
          type="button"
          style={{
            padding: "9px 27px 9px 22px",
            fontWeight: "300",
            borderRadius: "2px",
            marginRight: "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-bag"
            style={{ width: "20px", height: "20px" }}
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
          </svg>
          &nbsp; Sepetim
        </button>
      </div>
    </nav>
  );
}

export default NavBar;

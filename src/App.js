import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import ProductInfoPage from "./pages/ProductInfoPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import React from "react";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Route exact path="/">
          <Home nexPageLink={"/page1"}/>
        </Route>
        <Route exact path="/page1">
          <ProductInfoPage nextPageLink={"/page2"} />
          <Footer prevPageLink={"/"} />
        </Route>
        <Route exact path="/page2">
          <PersonalInfoPage nextPageLink={"/page3"} />
          <Footer prevPageLink={"/page1"} />
        </Route>
      </Router>
    </div>
  );
}

export default App;

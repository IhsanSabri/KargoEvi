import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductInfoPage from "./pages/ProductInfoPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import PaymentPageContainer from "./pages/PaymentPageContainer";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";

import "./App.css";
import "antd/dist/antd.min.css";

function App() {

  return (
    <div className="App h-[auto]">
      <Router>
        <Header />
        <Navbar />
        <Route exact path="/">
          <Home nexPageLink={"/page1"}/>
        </Route>
        <Route exact path="/page1">
          <ProductInfoPage nextPageLink={"/page2"} />
          <Footer prevPageLink={"/"} isSummaryPage={false} />
        </Route>
        <Route exact path="/page2">
          <PersonalInfoPage nextPageLink={"/page3"} />
          <Footer prevPageLink={"/page1"} isSummaryPage={false} />
        </Route>
        <Route exact path="/page3">
          <OrderSummaryPage nexPageLink={"/page4"} />
          {/* <Footer prevPageLink={"/page2"} isSummaryPage={true} /> */}
        </Route>
        <Route exact path="/page4">
          <PaymentPageContainer nexPageLink={"/page4"} />
        </Route>
      </Router>
    </div>
  );
}

export default App;

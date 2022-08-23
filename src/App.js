import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductInfoPage from "./pages/ProductInfoPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import PaymentPageContainer from "./pages/PaymentPageContainer";

import Footer from "./components/UI/Footer";
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
          <Home nexPageLink={"/productInfo"}/>
        </Route>
        <Route exact path="/productInfo">
          <ProductInfoPage nextPageLink={"/personalInfo"} />
          <Footer prevPageLink={"/"} isSummaryPage={false} />
        </Route>
        <Route exact path="/personalInfo">
          <PersonalInfoPage nextPageLink={"/orderSummary"} />
          <Footer prevPageLink={"/productInfo"} isSummaryPage={false} />
        </Route>
        <Route exact path="/orderSummary">
          <OrderSummaryPage nexPageLink={"/paymentPage"} />
          {/* <Footer prevPageLink={"/personalInfo"} isSummaryPage={true} /> */}
        </Route>
        <Route exact path="/paymentPage">
          <PaymentPageContainer nexPageLink={"/orderSummary"} />
        </Route>
      </Router>
    </div>
  );
}

export default App;

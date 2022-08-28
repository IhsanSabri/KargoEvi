import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductInfoPage from "./pages/ProductInfoPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import PaymentPageContainer from "./pages/PaymentPageContainer";
import AdressPage from "./pages/AdressPage";
import ThankYouPage from "./pages/ThankYouPage";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";

import "./App.css";
import "antd/dist/antd.min.css";

function App() {
  return (
    <div className="App h-screen bg-[#f0f2f5]">
      <Router>
        <Header />
        <Navbar />
        <Route exact path="/">
          <Home nexPageLink={"/productInfo"} />
        </Route>
        <Route exact path="/productInfo">
          <ProductInfoPage nextPageLink={"/personalInfo"} />
        </Route>
        <Route exact path="/personalInfo">
          <PersonalInfoPage nextPageLink={"/orderSummary"} />
        </Route>
        <Route exact path="/orderSummary">
          <OrderSummaryPage nexPageLink={"/address"} />
        </Route>
        <Route exact path="/address">
          <AdressPage nextPageLink={"/paymentPage"} />
        </Route>
        <Route exact path="/paymentPage">
          <PaymentPageContainer nexPageLink={"/thankYouPage"} />
        </Route>
        <Route exact path="/thankYouPage">
          <ThankYouPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;

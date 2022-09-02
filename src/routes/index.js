import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "../components/Layouts/DefaultLayout";
import MainLayout from "../components/Layouts/MainLayout";
import ToolsLayout from "../components/Layouts/ToolsLayout";
import CustomSuspense from "../components/UI/ComponentRender/CustomSuspense";

const Home = lazy(() => import("../components/Home"));
const ProductInfoPage = lazy(() => import("../pages/ProductInfoPage"));
const PersonalInfoPage = lazy(() => import("../pages/PersonalInfoPage"));
const OrderSummaryPage = lazy(() => import("../pages/OrderSummaryPage"));
const PaymentPageContainer = lazy(() =>
  import("../pages/PaymentPageContainer")
);
const AdressPage = lazy(() => import("../pages/AdressPage"));
const ThankYouPage = lazy(() => import("../pages/ThankYouPage"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <CustomSuspense>
                <Home nexPageLink={"/productInfo"} />
              </CustomSuspense>
            }
          />
        </Route>

        <Route element={<ToolsLayout />}>
          <Route
            path="/productInfo"
            element={
              <CustomSuspense>
                <ProductInfoPage nextPageLink={"/personalInfo"} />
              </CustomSuspense>
            }
          />
          <Route
            path="/personalInfo"
            element={
              <CustomSuspense>
                <PersonalInfoPage nextPageLink={"/orderSummary"} />
              </CustomSuspense>
            }
          />
          <Route
            path="/address"
            element={
              <CustomSuspense>
                <AdressPage nextPageLink={"/paymentPage"} />
              </CustomSuspense>
            }
          />
          <Route
            path="/paymentPage"
            element={
              <CustomSuspense>
                <PaymentPageContainer nexPageLink={"/thankYouPage"} />
              </CustomSuspense>
            }
          />
        </Route>

        <Route element={<DefaultLayout />}>
          <Route
            path="/orderSummary"
            element={
              <CustomSuspense>
                <OrderSummaryPage nexPageLink={"/address"} />
              </CustomSuspense>
            }
          />
          <Route
            path="/thankYouPage"
            element={
              <CustomSuspense>
                <ThankYouPage />
              </CustomSuspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";

import OrderSummary from "../../OrderSummary";

import { Breadcrumb, Layout } from "antd";
import { Box } from "rebass";
const { Content } = Layout;

const AddressMain = () => {
  return (
    <>
      <div className="row block">
        <div className="col-lg-10 text-center">
          <span className="badge text-[#129068] bg-[#e3eaf1] font-medium inline-flex px-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-check2 w-[18] h-[18]"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
            </svg>
            &nbsp; 1- Gönderi Bilgileri
          </span>
          <span className="badge text-[#129068] bg-[#212529] bg-[#ced9e5] font-medium inline-flex px-4 py-3 ml-[-5px] text-xs">
            2- Ürün İçerik Bilgileri
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-caret-right-fill text-[#ced9e5] ml-[-6px] relative z-1 inline-flex"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
          </svg>
          <span className="badge text-[#129068] bg-[#e3eaf1] font-medium inline-flex px-6 py-3 ml-[-10px]">
            3-Alıcı Bilgileri
          </span>
        </div>
      </div>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 64,
          display: "flex",
        }}
      >
        <Box
          className="site-layout-background"
          width={3 / 4}
          style={{
            display: "flex",
            padding: 24,
            minHeight: 380,
            border: "1px solid rgba(0,0,0,.125)",
          }}
        >
          Content
        </Box>
        <OrderSummary />
      </Content>
    </>
  );
};

export default AddressMain;

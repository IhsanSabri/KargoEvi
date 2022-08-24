import React from "react";
import { useHistory } from "react-router-dom";

import OrderSummary from "../../OrderSummary";
import Footer from "../Footer";

import { Layout, Button, Form, Row, Radio } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import {
  FooterContainer,
  ColumnBox,
  BoxMain,
  TitleAddress,
  CheckboxMain,
  ColumnBoxAddres,
  AdressSelectionTab,
  UpdateText
} from "./style";

const { Content } = Layout;

const AddressMain = ({ nexPageLink }) => {
  const [form] = Form.useForm();
  let history = useHistory();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    history.push(nexPageLink);
  };

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <div className="block">
          <div className="col-lg-10 text-center">
            <span className="badge text-[#129068] bg-[#e3eaf1] font-medium inline-flex px-4 py-3">
              <CheckOutlined />
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
            marginBottom: "5%",
          }}
        >
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            style={{
              display: "flex",
              padding: 24,
              minHeight: 380,
              border: "1px solid rgba(0,0,0,.125)",
              background: "white",
              marginRight: "3%",
              width: "75%",
              flexDirection: "column",
            }}
          >
            <TitleAddress>
              <BoxMain orientation="left">Adres Seçiniz</BoxMain>
              <CheckboxMain>Fatura Adresim Aynı</CheckboxMain>
            </TitleAddress>
            <Radio.Group>
              <Row gutter={[24, 24]} style={{ padding: "15px" }}>
                <ColumnBox span={11}>
                  <AdressSelectionTab>
                    <Radio style={{ fontSize: "18px" }} value="firstAddress">
                      Çağlayan Ofis
                    </Radio>
                    <UpdateText>Düzenle</UpdateText>
                  </AdressSelectionTab>
                  <ColumnBoxAddres></ColumnBoxAddres>
                </ColumnBox>
                <ColumnBox span={11}>
                  <Radio style={{ fontSize: "18px" }} value="secondAddress">
                    Harbiye Ofis
                  </Radio>
                </ColumnBox>
                <ColumnBox span={11} />
              </Row>
            </Radio.Group>
          </Form>
          <OrderSummary />
        </Content>
        <Footer prevLink={"/"}>
          <FooterContainer>
            <button
              as={Button}
              className="submitAndContinueButton"
              type="submit"
              form="hook-form"
            >
              Devam Et
            </button>
          </FooterContainer>
        </Footer>
      </Layout>
    </>
  );
};

export default AddressMain;

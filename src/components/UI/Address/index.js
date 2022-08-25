import React from "react";
import { useHistory } from "react-router-dom";

import OrderSummary from "../../OrderSummary";
import AddressColumn from "../AddressColumn";
import Footer from "../Footer";
import AntModal from "../AntModal";
import AddAddress from "../AddAddress";

import { useModal } from "../../../config/hooks/useModal";
import { Layout, Button, Form, Row, Radio } from "antd";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import {
  FooterContainer,
  ColumnBox,
  BoxMain,
  TitleAddress,
  CheckboxMain,
  ColumnBoxAddres,
  PaymentImage,
} from "./style";
import paymentLogo from "../../../assests/paymentLogo.png";

const { Content } = Layout;

const AddressMain = ({ nexPageLink }) => {
  const { isModalVisible, openModal, closeModal } = useModal();
  const [form] = Form.useForm();
  let history = useHistory();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    history.push(nexPageLink);
  };

  const dummyAddressData = [
    {
      id: 1,
      addressName: "Çağlayan Ofis",
      userName: "Ayşe Keskin",
      phoneNumber: "+90 505 *** ** 55",
      address:
        "Akevler Mahallesi, Reşat Nuri Güntekin Sokak, 1065 Apt Adalar, İstanbul, Türkiye",
    },
    {
      id: 2,
      addressName: "Harbiye Ofis",
      userName: "Ayşe Keskin",
      phoneNumber: "+90 505 *** ** 55",
      address:
        "Akevler Mahallesi, Reşat Nuri Güntekin Sokak, 1065 Apt Adalar, İstanbul, Türkiye",
    },
    {
      id: 3,
      addressName: "Harbiye Ofis",
      userName: "Ayşe Keskin",
      phoneNumber: "+90 505 *** ** 55",
      address:
        "Akevler Mahallesi, Reşat Nuri Güntekin Sokak, 1065 Apt Adalar, İstanbul, Türkiye",
    },
  ];

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <div className="block">
          <div className="col-lg-10 text-center">
            <span className="badge text-[#129068] bg-[#e3eaf1] font-medium inline-flex px-4 py-3">
              <CheckOutlined />
              &nbsp; 1- Üyelik Girişi
            </span>
            <span className="badge text-[#129068] bg-[#212529] bg-[#ced9e5] font-medium inline-flex px-4 py-3 ml-[-5px] text-xs">
              2- Adres Seçimi
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
              3- Ödeme
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
            minHeight: "665px",
            justifyContent: "center",
          }}
        >
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            id="hook-form"
            style={{
              display: "flex",
              padding: 24,
              minHeight: 380,
              border: "1px solid rgba(0,0,0,.125)",
              background: "white",
              marginRight: "3%",
              width: "60%",
              flexDirection: "column",
            }}
          >
            <TitleAddress>
              <BoxMain orientation="left">Adres Seçiniz</BoxMain>
              <CheckboxMain>Fatura Adresim Aynı</CheckboxMain>
            </TitleAddress>
            <Radio.Group defaultValue={1}>
              <Row gutter={[24, 24]} style={{ padding: "15px" }}>
                {dummyAddressData.map((address, id) => {
                  return <AddressColumn key={id} address={address} />;
                })}
                <ColumnBox span={11}>
                  <ColumnBoxAddres>
                    <PlusOutlined />
                    <div onClick={openModal}>Yeni Adres Ekle</div>
                  </ColumnBoxAddres>
                </ColumnBox>
              </Row>
            </Radio.Group>
          </Form>
          <OrderSummary />
        </Content>
        <PaymentImage>
          <img src={paymentLogo} />
        </PaymentImage>
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
        <AntModal visible={isModalVisible} onCancel={closeModal}>
        <AddAddress event={closeModal}/>
      </AntModal>
      </Layout>
    </>
  );
};

export default AddressMain;

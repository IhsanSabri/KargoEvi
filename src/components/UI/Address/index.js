import React from "react";
import { useNavigate } from "react-router-dom";

import OrderSummary from "../../OrderSummary";
import AddressColumn from "../AddressColumn";
import Footer from "../Footer";
import AntModal from "../AntModal";
import AddAddress from "../AddAddress";
import Steps from "../Steps";

import { useModal } from "../../../config/hooks/useModal";
import { Layout, Button, Form, Row, Radio } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  FooterContainer,
  ColumnBox,
  BoxMain,
  TitleAddress,
  CheckboxMain,
  ColumnBoxAddres,
  PaymentImage,
} from "./style";
import { StepsMain, MainCol } from "../Steps/style";
import paymentLogo from "../../../assests/paymentLogo.png";

const { Content } = Layout;

const AddressMain = ({ nextPageLink }) => {
  console.log(nextPageLink);
  const { isModalVisible, openModal, closeModal } = useModal();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    navigate(nextPageLink);
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

  const stepsInfo = [
    {
      id: 1,
      text: "1- Üyelik Girişi",
      isChecked: true,
      isActive: false,
      isNextStepExist: false,
    },
    {
      id: 2,
      text: "2- Adres Seçimi",
      isChecked: false,
      isActive: true,
      isNextStepExist: true,
    },
    {
      id: 3,
      text: "3- Ödeme",
      isChecked: false,
      isActive: false,
      isNextStepExist: false,
    },
  ];

  return (
    <>
        <StepsMain>
          <MainCol flex={4}>
            {stepsInfo.map((step) => {
              return <Steps key={step.id} steps={step} />;
            })}
          </MainCol>
        </StepsMain>
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
          <AddAddress event={closeModal} />
        </AntModal>
    </>
  );
};

export default AddressMain;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import OrderSummary from "../OrderSummary";
import AddressColumn from "../AddressColumn";
import Footer from "../Footer";
import AntModal from "../AntModal";
import AddAddress from "../AddAddress";
import Steps from "../Steps";

import { Flex } from "rebass";

import { useModal } from "../../../config/hooks/useModal";
import { modifiedData } from "../../../store/DeliveryDetail";
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
import paymentLogo from "../../../assests/paymentLogo.png";

const { Content } = Layout;

const AddressMain = ({ nextPageLink }) => {
  const dispatch = useDispatch();
  const [borderValue, setBorderValue] = useState([]);
  const { isModalVisible, openModal, closeModal } = useModal();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { userAddress } = useSelector(({ delivery }) => delivery);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    navigate(nextPageLink);
  };

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

  useEffect(() => {
    axios
      .get("/mockData/savedAddress.json")
      .then(function (response) {
        dispatch(modifiedData({ name: "userAddress", data: response?.data }));
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {
      dispatch(modifiedData({ name: "updateAddress", data: {} }));
    };
  }, []);

  const handleRadioGroup = (event) => {
    const selectedAddress = userAddress.filter(
      (address) => address._id === event.target.value
    );

    setBorderValue(event.target.value);

    dispatch(modifiedData({ name: "selectedAddress", data: selectedAddress }));
  };

  const handleNewAddress = () => {
    dispatch(modifiedData({ name: "updateAddress", data: {} }));

    openModal();
  };

  return (
    <>
      <Flex justifyContent={"center"}>
        {stepsInfo.map((step) => {
          return <Steps key={step.id} steps={step} />;
        })}
      </Flex>
      <Flex justifyContent="center" width={"70%"} m="30px auto">
        <Content
          className="site-layout"
          style={{
            padding: "0 75px",
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
              flexDirection: "column",
            }}
          >
            <TitleAddress>
              <BoxMain orientation="left">Adres Seçiniz</BoxMain>
              <CheckboxMain>Fatura Adresim Aynı</CheckboxMain>
            </TitleAddress>
            <Radio.Group defaultValue={1} onChange={handleRadioGroup}>
              <Row gutter={[24, 24]} style={{ padding: "15px" }}>
                {userAddress.map((address) => {
                  return (
                    <AddressColumn
                      key={address._id}
                      address={address}
                      borderValue={borderValue}
                      openModal={openModal}
                    />
                  );
                })}
                <ColumnBox span={11}>
                  <ColumnBoxAddres>
                    <PlusOutlined />
                    <div onClick={handleNewAddress}>Yeni Adres Ekle</div>
                  </ColumnBoxAddres>
                </ColumnBox>
              </Row>
            </Radio.Group>
          </Form>
        </Content>
      </Flex>
      <OrderSummary />
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
        <AddAddress closeModal={closeModal} />
      </AntModal>
    </>
  );
};

export default AddressMain;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserService } from "../../../services";

import OrderSummary from "../OrderSummary";
import AddressColumn from "../AddressColumn";
import Footer from "../Footer";
import AntModal from "../AntModal";
import AddAddress from "../AddAddress";
import Steps from "../Steps";

import { Flex } from "rebass";

import { useModal } from "../../../config/hooks/useModal";
import { modifiedData } from "../../../store/DeliveryDetail";
import { Form, Row, Radio } from "antd";
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
import { ContinueButton } from "../../../styles/styles";
import paymentLogo from "../../../assests/paymentLogo.png";

const userService = new UserService();

const AddressMain = ({ nextPageLink }) => {
  const dispatch = useDispatch();
  const [borderValue, setBorderValue] = useState([]);
  const { isModalVisible, openModal, closeModal } = useModal();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const {
    userAddress,
    userInfo: { userId },
    isPaymentAddress,
    selectedAddress,
  } = useSelector(({ delivery }) => delivery);

  const onFinish = (values) => {
    Object.keys(selectedAddress).length && navigate(nextPageLink);
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
    userService
      .getUserAddress({ id: userId })
      .then((res) => {
        dispatch(modifiedData({ name: "userAddress", data: res?.data }));
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

  const handleCheckBox = (e) => {
    dispatch(
      modifiedData({ name: "isPaymentAddress", data: e.target.checked })
    );
  };

  return (
    <>
      <Flex justifyContent={"center"}>
        {stepsInfo.map((step) => {
          return <Steps key={step.id} steps={step} />;
        })}
      </Flex>
      <Flex justifyContent="center" width={"60%"} m="30px auto">
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          id="hook-form"
          style={{
            display: "flex",
            padding: 24,
            minHeight: 665,
            border: "1px solid #e7e7e7",
            borderRadius: "8px",
            background: "white",
            flexDirection: "column",
          }}
        >
          <TitleAddress>
            <BoxMain orientation="left">Adres Seçiniz</BoxMain>
            <CheckboxMain
              defaultChecked={isPaymentAddress}
              onChange={handleCheckBox}
            >
              Fatura Adresim Aynı
            </CheckboxMain>
          </TitleAddress>
          <Radio.Group
            defaultValue={selectedAddress[0]?._id}
            onChange={handleRadioGroup}
          >
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
                <ColumnBoxAddres onClick={handleNewAddress}>
                  <PlusOutlined />
                  <div>Yeni Adres Ekle</div>
                </ColumnBoxAddres>
              </ColumnBox>
            </Row>
          </Radio.Group>
        </Form>
      </Flex>
      <OrderSummary />
      <PaymentImage>
        <img src={paymentLogo} />
      </PaymentImage>
      <Footer prevLink={"/orderSummary"}>
        <FooterContainer>
          <ContinueButton
            type="submit"
            form="hook-form"
            disabled={!Object.keys(selectedAddress).length > 0}
          >
            Devam Et
          </ContinueButton>
        </FooterContainer>
      </Footer>
      <AntModal visible={isModalVisible} onCancel={closeModal}>
        <AddAddress closeModal={closeModal} />
      </AntModal>
    </>
  );
};

export default AddressMain;

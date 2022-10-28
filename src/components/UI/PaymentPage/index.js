import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

import { Button } from "antd";
import { Box, Flex } from "rebass";

import Steps from "../Steps";
import OrderSummary from "../OrderSummary";
import CreditCard from "../CreditCard";
import WalletPayment from "../WalletPayment";
import PayWithTransfer from "../PayWithTransfer";
import PayOnDelivery from "../PayOnDelivery";
import Footer from "../Footer";
import AntCollapse from "../CollapseMenu";
import GdprBox from "../GdprBox";

//import { OrderService } from "../../../services";

import { PaymentPageMainWrapper, FooterContainer } from "./style";
import { SafetyCertificateOutlined } from "@ant-design/icons";
// import { setNotificationMessage } from "../../../config/utils";
// import { modifiedData } from "../../../store/DeliveryDetail";

// const orderService = new OrderService();

const PaymentPage = () => {
  const [cardInfo, setCardInfo] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
    isCardSaved: false,
  });

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const {
  //   userInfo: { userId },
  //   userAddress,
  //   updateAddress: {
  //     _id: updateAddressId,
  //     addressTitle,
  //     userName,
  //     phoneNumber,
  //     country,
  //     city,
  //     district,
  //     postalCode,
  //     addressDescription,
  //     PhonePrefix,
  //   },
  // } = useSelector(({ delivery }) => delivery);
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
      isChecked: true,
      isActive: false,
      isNextStepExist: false,
    },
    {
      id: 3,
      text: "3- Ödeme",
      isChecked: false,
      isActive: true,
      isNextStepExist: false,
    },
  ];

  const menus = [
    {
      subKey: "creditCard",
      title: "Kredi Kartı İle Öde",
      component: <CreditCard cardInfo={cardInfo} setCardInfo={setCardInfo} />,
    },
    {
      subKey: "walletPayment",
      title: "Cüzdanım İle Öde",
      component: <WalletPayment />,
    },
    {
      subKey: "payWithTransfer",
      title: "Havale İle Öde",
      component: <PayWithTransfer />,
    },
    {
      subKey: "payOnDelivery",
      title: "Kargo Tesliminde Öde",
      component: <PayOnDelivery />,
    },
  ];

  const handleCompleteOrder = () => {
    console.log("cardInfo", cardInfo);

    // orderService
    //   .addOrder({
    //     userId,
    //     direction,
    //     description,
    //     dimention,
    //     weight,
    //     amount,
    //     total,
    //     GTIP,
    //     clientAdress,
    //     ispaymentadress,
    //   })
    //   .then((res) => {
    //     console.log("res", res);
    //     if (res.success) {
    //       //TODO: address will be added to state
    //       console.log("success");

    //       dispatch(modifiedData({ name: "orderId", data: res?.data?._id }));

    //       setNotificationMessage({
    //         type: "success",
    //         message: "Siparişiniz Oluşturuldu",
    //       });

    //       navigate("/thankYouPage");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
  };

  return (
    <>
      <PaymentPageMainWrapper
        style={{ minHeight: "100%", backgroundColor: "#eff2f5" }}
      >
        <Flex justifyContent={"center"}>
          {stepsInfo.map((step) => {
            return <Steps key={step.id} steps={step} />;
          })}
        </Flex>
        <Flex justifyContent="center" width={"60%"} m="30px auto">
          <Box width={1}>
            <AntCollapse menus={menus} />
          </Box>
        </Flex>
        <OrderSummary />
        <GdprBox />
      </PaymentPageMainWrapper>
      <Footer prevLink={"/personalInfo"}>
        <FooterContainer>
          <Button
            className="completePayment"
            type="submit"
            danger
            form="hook-form"
            onClick={handleCompleteOrder}
          >
            <SafetyCertificateOutlined
              style={{
                position: "relative",
                top: "1px",
              }}
            />
            Ödeme Yap
          </Button>
        </FooterContainer>
      </Footer>
    </>
  );
};

export default PaymentPage;

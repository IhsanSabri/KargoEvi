import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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

import { OrderService } from "../../../services";

import { PaymentPageMainWrapper, FooterContainer } from "./style";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { setNotificationMessage } from "../../../config/utils";
import { modifiedData } from "../../../store/DeliveryDetail";

const orderService = new OrderService();

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [cardInfo, setCardInfo] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
    isCardSaved: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    userInfo: { userId },
    deliveryDetail,
    productDetailInfo,
    deliveryPrice,
    isPaymentAddress,
    receiverInfo,
  } = useSelector(({ delivery }) => delivery);
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
      component: (
        <CreditCard
          cardInfo={cardInfo}
          setCardInfo={setCardInfo}
          setPaymentMethod={setPaymentMethod}
        />
      ),
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

  const setDirectionArray = () => {
    let directionArray = [deliveryDetail.country];

    if (deliveryDetail.destination === "toTr") {
      directionArray.push("Türkiye");
    } else {
      directionArray.unshift("Türkiye");
    }

    return directionArray;
  };

  const payWithCreditCard = () => {
    if (cardInfo.isCardSaved) {
      //TODO: send request to save card
    }

    // orderService
    //   .addOrder({
    //     userId,
    //     direction: setDirectionArray(),
    //     description: productDetailInfo.description,
    //     dimention: [
    //       Number(deliveryDetail.length),
    //       Number(deliveryDetail.width),
    //       Number(deliveryDetail.height),
    //     ],
    //     weight: deliveryDetail.weight,
    //     amount: deliveryPrice,
    //     total: productDetailInfo.total,
    //     GTIP: productDetailInfo.GTIP,
    //     clientAdress: {
    //       name: receiverInfo.name,
    //       mail: receiverInfo.mail,
    //       country: receiverInfo.country,
    //       city: receiverInfo.city,
    //       district: receiverInfo.district,
    //       postCode: receiverInfo.postCode,
    //       adress: receiverInfo.adress,
    //       ETGB: receiverInfo.ETGB,
    //       phone: receiverInfo.phone,
    //     },
    //     ispaymentadress: isPaymentAddress,
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

    //       //navigate("/thankYouPage");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
  };

  const payWithSavedCard = () => {
    console.log("payWithSavedCard");
  };

  const payWithWallet = () => {
    console.log("payWithWallet");
  };

  const payWithTransfer = () => {
    console.log("payWithTransfer");
  };

  const payWithDelivery = () => {
    console.log("payWithDelivery");
  };

  const handleCompleteOrder = () => {
    console.log("cardInfo", cardInfo);
    console.log("paymentMethod", paymentMethod);

    switch (paymentMethod) {
      case "creditCard":
        payWithCreditCard();

        break;
      case "InstantPayment":
        payWithCreditCard();

        break;
      case "SavedCardPayment":
        payWithSavedCard();

        break;
      case "walletPayment":
        payWithWallet();
        break;
      case "payWithTransfer":
        payWithTransfer();
        break;
      case "payOnDelivery":
        payWithDelivery();
        break;
      default:
        console.log("Payment method is not selected");
    }
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
            <AntCollapse menus={menus} setPaymentMethod={setPaymentMethod} />
          </Box>
        </Flex>
        <OrderSummary />
        <GdprBox />
      </PaymentPageMainWrapper>
      <Footer prevLink={"/address"}>
        <FooterContainer>
          <Button
            className="completePayment"
            type="submit"
            danger
            form="hook-form"
            onClick={handleCompleteOrder}
            disabled={!paymentMethod}
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

import React from "react";
import { useNavigate } from "react-router-dom";

import { Checkbox, Button } from "antd";
import { Box, Flex, Text } from "rebass";

import Steps from "../Steps";
import OrderSummary from "../../OrderSummary";
import CreditCard from "../CreditCard";
import WalletPayment from "../WalletPayment";
import PayWithTransfer from "../PayWithTransfer";
import PayOnDelivery from "../PayOnDelivery";
import Footer from "../Footer";
import AntMenu from "../CollapseMenu";

import { PaymentPageMainWrapper, FooterContainer } from "./style";
import { SafetyCertificateOutlined } from "@ant-design/icons";

const PaymentPage = () => {
  const navigate = useNavigate();
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
      itemKey: "card",
      component: <CreditCard />,
    },
    {
      subKey: "walletPayment",
      title: "Cüzdanım İle Öde",
      itemKey: "wallet",
      component: <WalletPayment />,
    },
    {
      subKey: "payWithTransfer",
      title: "Havale İle Öde",
      itemKey: "transfer",
      component: <PayWithTransfer />,
    },
    {
      subKey: "payOnDelivery",
      title: "Kargo Tesliminde Öde",
      itemKey: "delivery",
      component: <PayOnDelivery />,
    },
  ];

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
        <Flex justifyContent="center" width={"70%"} m="30px auto" px={"50px"}>
          <Box width={1}>
            <AntMenu menus={menus} />
          </Box>
        </Flex>
        <OrderSummary />
        <Box
          sx={{
            position: "absolute",
            top: "460px",
            right: "25px",
            minWidth: "290px",
          }}
        >
          <Box
            width={"290px"}
            mt={20}
            p={10}
            sx={{
              background: "white",
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
          >
            <Checkbox onChange={(e) => console.log(e)}>
              <Text
                fontSize={13}
                textAlign={"left"}
                sx={{ top: "-12px", position: "relative" }}
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Ön Bilgilendirme Koşulları
                </a>
                'nı ve{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Mesafeli Satış Sözleşmesini
                </a>{" "}
                okudum, onaylıyorum.
              </Text>
            </Checkbox>
          </Box>
        </Box>
      </PaymentPageMainWrapper>
      <Footer prevLink={"/personalInfo"}>
        <FooterContainer>
          <Button
            className="completePayment"
            type="submit"
            danger
            form="hook-form"
            onClick={() => navigate("/thankYouPage")}
          >
            <SafetyCertificateOutlined
              style={{
                position: "relative",
                top: "-5px",
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

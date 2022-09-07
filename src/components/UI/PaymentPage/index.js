import React from "react";
import { useNavigate } from "react-router-dom";

import { Menu, Checkbox, Button } from "antd";
import { Box, Flex, Text } from "rebass";

import Steps from "../Steps";
import OrderSummary from "../../OrderSummary";
import CreditCard from "../CreditCard";
import WalletPayment from "../WalletPayment";
import PayWithTransfer from "../PayWithTransfer";
import PayOnDelivery from "../PayOnDelivery";
import Footer from "../Footer";

import {
  MenuContainer,
  Title,
  PaymentPageMainWrapper,
  FooterContainer,
} from "./style";
import {
  PlusOutlined,
  MinusOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

function PaymentPage() {
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
            <MenuContainer justifyContent="center" width={1}>
              <Box width={1}>
                <Menu
                  style={{
                    width: "100%",
                  }}
                  mode="inline"
                >
                  <SubMenu
                    key="sub1"
                    expandIcon={(props) =>
                      props.isOpen ? <MinusOutlined /> : <PlusOutlined />
                    }
                    title={
                      <span>
                        <Title>Kredi Kartı İle Öde</Title>
                      </span>
                    }
                  >
                    <Menu.Item key="1">
                      <CreditCard />
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    expandIcon={(props) =>
                      props.isOpen ? <MinusOutlined /> : <PlusOutlined />
                    }
                    title={
                      <span>
                        <Title>Cüzdanım İle Öde</Title>
                      </span>
                    }
                  >
                    <Menu.Item key="2">
                      <WalletPayment />
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    expandIcon={(props) =>
                      props.isOpen ? <MinusOutlined /> : <PlusOutlined />
                    }
                    title={
                      <span>
                        <Title>Havale İle Öde</Title>
                      </span>
                    }
                  >
                    <Menu.Item key="3">
                      <PayWithTransfer />
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub4"
                    expandIcon={(props) =>
                      props.isOpen ? <MinusOutlined /> : <PlusOutlined />
                    }
                    title={
                      <span>
                        <Title>Kargo Tesliminde Öde</Title>
                      </span>
                    }
                  >
                    <Menu.Item key="4">
                      <PayOnDelivery />
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Box>
            </MenuContainer>
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
}

export default PaymentPage;

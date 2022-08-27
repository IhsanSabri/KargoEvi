import { Menu } from "antd";
import React from "react";
import { Box, Flex } from "rebass";

import OrderSummary from "../../OrderSummary";
import CreditCard from "../CreditCard";
import WalletPayment from "../WalletPayment";
import PayWithTransfer from "../PayWithTransfer";
import PayOnDelivery from "../PayOnDelivery";

import { MenuContainer, Title } from "./style";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

function PaymentPage() {
  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Flex width={"70%"} m={"50px 15%"}>
      <Box width={1}>
        <MenuContainer justifyContent="center" width={1}>
          <Box width={1}>
            <Menu
              onClick={onClick}
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
      <Box
        sx={{
          left: "30px",
          position: "relative",
          display: "flex",
        }}
      >
        <OrderSummary />
      </Box>
    </Flex>
  );
}

export default PaymentPage;

import { Menu } from "antd";
import React from "react";
import { Box } from "rebass";

import OrderSummary from "../../OrderSummary";
import PaymentForm from "../CreditCard";
import WalletPayment from "../WalletPayment";
import PayWithTransfer from "../PayWithTransfer";
import PayOnDelivery from "../PayOnDelivery";

import { MenuContainer } from "./style";

const { SubMenu } = Menu;

function PaymentPage() {
  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <>
      <MenuContainer justifyContent="center" width={1}>
        <Box width="60%">
          <Menu
            onClick={onClick}
            style={{
              width: "100%",
            }}
            // defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <span>Kredi Kartı İle Öde</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <PaymentForm />
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <span>Cüzdanım İle Öde</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <WalletPayment />
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <span>Havale İle Öde</span>
                </span>
              }
            >
              <Menu.Item key="3">
                <PayWithTransfer />
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <span>Kargo Tesliminde Öde</span>
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
      <div style={{ position: "absolute", right: "10px", top: "104px" }}>
        <OrderSummary />
      </div>
    </>
  );
}

export default PaymentPage;

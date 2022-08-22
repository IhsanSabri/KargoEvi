import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Box, Flex } from "rebass/styled-components";

import OrderSummary from "../../OrderSummary";

const { SubMenu } = Menu;

function PaymentPage() {
  // function getItem(label, key, icon, children, type) {
  //   return {
  //     key,
  //     icon,
  //     children,
  //     label,
  //     type,
  //   };
  // }

  // const items = [
  //   getItem("Navigation One", "sub1", <MailOutlined />,),
  //   getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
  //     getItem("Option 5", "5"),
  //     getItem("Option 6", "6"),
  //     getItem("Submenu", "sub3", null, [
  //       getItem("Option 7", "7"),
  //       getItem("Option 8", "8"),
  //     ]),
  //   ]),
  //   getItem("Navigation Three", "sub4", <SettingOutlined />, [
  //     getItem("Option 9", "9"),
  //     getItem("Option 10", "10"),
  //     getItem("Option 11", "11"),
  //     getItem("Option 12", "12"),
  //   ]),
  // ];

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Flex>
      <Box width={2 / 3}>
        <Menu
          onClick={onClick}
          style={{
            width: "100%",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <div>asd</div>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Box>
      <Box width={1 / 3}>
        <OrderSummary />
      </Box>
    </Flex>
  );
}

export default PaymentPage;

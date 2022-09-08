import React from "react";

import { Box } from "rebass";
import { Menu } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { MenuContainer, Title } from "./style";

const { SubMenu } = Menu;

const AntMenu = ({ menus }) => {
  return (
    <MenuContainer justifyContent="center" width={1}>
      <Box width={1}>
        <Menu
          style={{
            width: "100%",
          }}
          mode="inline"
        >
          {menus?.map((eachMenu) => (
            <SubMenu
              key={eachMenu.subKey}
              expandIcon={(props) =>
                props.isOpen ? <MinusOutlined /> : <PlusOutlined />
              }
              title={
                <span>
                  <Title>{eachMenu.title}</Title>
                </span>
              }
            >
              <Menu.Item key={eachMenu.itemKey}>{eachMenu.component}</Menu.Item>
            </SubMenu>
          ))}
        </Menu>
      </Box>
    </MenuContainer>
  );
};

export default AntMenu;

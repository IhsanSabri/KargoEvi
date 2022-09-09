import React from "react";

import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { MenuMain, MainHeader } from "./style";
import { Flex } from "rebass";

const items = ["info@kargoevi.com", "+90 850 340 17 17"].map((index, key) => ({
  key,
  label:
    index === "info@kargoevi.com" ? (
      <Flex>
        <MailOutlined style={{ marginRight: "0.4rem" }} />
        {index}
      </Flex>
    ) : (
      <Flex>
        <PhoneOutlined
          style={{ transform: "scaleX(-1)", marginRight: "0.4rem" }}
        />
        {index}
      </Flex>
    ),
}));

const Header = () => {
  return (
    <MainHeader>
      <MenuMain theme="dark" mode="horizontal" items={items} />
    </MainHeader>
  );
};

export default Header;

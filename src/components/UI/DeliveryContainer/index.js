import React from "react";

import { Flex, Box, Text } from "rebass";
import { Radio } from "antd";

import { DeliveryDesignContainer } from "./style";

const DeliveryContainer = ({
  icon,
  mainText,
  text,
  borderedValue,
  setItemValue,
}) => {
  const handleOnClick = () => {
    setItemValue(text);
  };

  return (
    <DeliveryDesignContainer
      onClick={handleOnClick}
      style={{
        border:
          borderedValue === text ? "1px solid #50749c" : "1px solid #f0f0f0",
      }}
    >
      <Flex>
        <Radio value={text}></Radio>
        {icon}
        <Box sx={{ lineHeight: "initial" }}>
          <Text fontSize={"13px"}>{mainText}</Text>
          <Text color={"lightgray"} fontSize={"12px"} padding={"3px 0"}>
            {text}
          </Text>
        </Box>
      </Flex>
    </DeliveryDesignContainer>
  );
};

export default DeliveryContainer;

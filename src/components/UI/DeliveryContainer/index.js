import React from "react";

import { Flex, Box, Text } from "rebass";
import { Radio } from "antd";

import { DeliveryDesignContainer } from "./style";

const DeliveryContainer = ({ icon, mainText, text }) => {
  return (
    <DeliveryDesignContainer>
      <Flex>
        <Radio value={text}></Radio>
        {icon}
        <Box sx={{ lineHeight: "initial" }}>
          <Text fontSize={"13px"}>{mainText}</Text>
          <Text color={"lightgray"} fontSize={"12px"} padding={'3px 0'}>
            {text}
          </Text>
        </Box>
      </Flex>
    </DeliveryDesignContainer>
  );
};

export default DeliveryContainer;

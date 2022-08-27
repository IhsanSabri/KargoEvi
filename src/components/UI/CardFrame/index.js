import React from "react";

import { Card, Radio } from "antd";
import { Box, Image, Text } from "rebass/styled-components";

import { CardFrameContainer } from "./style";

const CardFrame = ({ value, IconContainer, UserInfo, BankName }) => {
  return (
    <CardFrameContainer m={"0 10% 0 6px"}>
      <Radio value={value} style={{ marginBottom: "10px" }}>
        {BankName} Kartım
      </Radio>
      <Card
        style={{
          borderRadius: "10px",
          marginRight: "10px",
        }}
      >
        <Image
          src={IconContainer?.src}
          width={IconContainer?.width}
          height={IconContainer?.height}
          sx={{ float: "right" }}
        />
        <Box p={"18% 0 4% 10%"}>
          <Text>{UserInfo?.cardNumber}</Text>
          <Text fontSize={12} color={"gray"}>
            {UserInfo?.name}
          </Text>
          <Text mt={"15px"}>{UserInfo?.expire}</Text>
        </Box>
      </Card>
    </CardFrameContainer>
  );
};

export default CardFrame;

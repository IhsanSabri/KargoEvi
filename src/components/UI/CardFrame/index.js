import React from "react";

import { Card, Radio } from "antd";
import { Box, Image, Text } from "rebass/styled-components";

import { CardFrameContainer } from "./style";

const CardFrame = ({
  value,
  borderedValue,
  setBorderedValue,
  IconContainer,
  cardInfo,
}) => {
  const handleOnClick = () => {
    setBorderedValue(value);
  };

  return (
    <CardFrameContainer m={"0 10% 0 6px"}>
      <Radio value={value} style={{ marginBottom: "10px", minWidth: "200px" }}>
        {cardInfo?.bankName} Kartım
      </Radio>
      <Card
        onClick={handleOnClick}
        style={{
          border:
            borderedValue === value ? "1px solid #50749c" : "1px solid #f0f0f0",
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
          <Text>{cardInfo?.cardNumber}</Text>
          <Text fontSize={12} color={"gray"}>
            {cardInfo?.name}
          </Text>
          <Text mt={"15px"}>{cardInfo?.expire}</Text>
        </Box>
      </Card>
    </CardFrameContainer>
  );
};

export default CardFrame;

import React from "react";

import { Card, Radio } from "antd";
import { Box, Image, Text } from "rebass/styled-components";

const CardFrame = ({ value, IconContainer, UserInfo, BankName }) => {
  return (
    <Box>
      <Radio value={value}>{BankName} Kartım</Radio>
      <Card
        style={{
          width: 300,
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
        <Box p={20}>
          <Text>{UserInfo?.cardNumber}</Text>
          <Text>{UserInfo?.name}</Text>
          <Text>{UserInfo?.expire}</Text>
        </Box>
      </Card>
    </Box>
  );
};

export default CardFrame;

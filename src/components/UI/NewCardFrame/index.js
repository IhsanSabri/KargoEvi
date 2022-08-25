import React from "react";
import { Box, Text, Flex } from "rebass";

import { CreditCardOutlined } from "@ant-design/icons";

const NewCardFrame = ({ icon, text }) => {
  return (
    <Box
      sx={{
        height: "154px",
        width: "298px",
        border: "1px dashed #eaeff4",
        top: "35px",
        position: "relative",
        borderRadius: "10px",
        backgroundColor: "#fafbfd",
        color: "#225386",
      }}
    >
      <Box>
        <CreditCardOutlined
          style={{
            fontSize: "40px",
            display: "block",
            justifyContent: "center",
            marginTop: "25px",
          }}
        />
        <Flex sx={{ justifyContent: "center", marginTop: "10px" }}>
          {icon}
          <Text>{text}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default NewCardFrame;

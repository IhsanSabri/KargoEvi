import React from "react";
import { Box, Text, Flex } from "rebass";

import { CreditCardOutlined } from "@ant-design/icons";

const NewCardFrame = ({ icon, text }) => {
  return (
    <Box
      width={"98%"}
      m={"0 10% 0 5px"}
      p={"12.5%"}
      sx={{
        border: "1px dashed #eaeff4",
        top: "43px",
        position: "relative",
        borderRadius: "10px",
        backgroundColor: "#fafbfd",
        color: "#225386",
        whiteSpace: "break-spaces",
        textAlign: "center",
        lineHeight: "1.3",
      }}
    >
      <Box>
        <CreditCardOutlined
          style={{
            fontSize: "40px",
            display: "block",
            justifyContent: "center",
            marginTop: "10px",
          }}
        />
        <Flex
          sx={{
            justifyContent: "center",
            marginTop: "10px",
            minWidth: "175px",
          }}
        >
          {icon}
          <Text style={{ fontSize: "13px" }}>{text}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default NewCardFrame;

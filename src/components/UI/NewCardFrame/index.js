import React from "react";
import { Box, Text, Flex } from "rebass";

import { CreditCardOutlined, PlusOutlined } from "@ant-design/icons";

const NewCardFrame = () => {
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
          <PlusOutlined
            style={{
              position: "relative",
              margin: "4px",
            }}
          />
          <Text>Yeni Kart Ekle</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default NewCardFrame;

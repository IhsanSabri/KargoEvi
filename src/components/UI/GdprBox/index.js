import React from "react";

import { Box, Text } from "rebass";
import { Checkbox } from "antd";

import { GdprContainer } from "./style";

const GdprBox = ({ setIsGdprAllowed }) => {
  const handleChange = (event) => {
    setIsGdprAllowed(event.target.checked);
  };

  return (
    <GdprContainer width={"15%"}>
      <Box p={2}>
        <Checkbox onChange={handleChange}>
          <Text
            fontSize={13}
            textAlign={"left"}
            sx={{ top: "-12px", position: "relative" }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              Ön Bilgilendirme Koşulları
            </a>
            'nı ve{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Mesafeli Satış Sözleşmesini
            </a>{" "}
            okudum, onaylıyorum.
          </Text>
        </Checkbox>
      </Box>
    </GdprContainer>
  );
};

export default GdprBox;

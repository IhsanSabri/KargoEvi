import React, { useState } from "react";
import Cards from "react-credit-cards";

import { Flex, Box } from "rebass";
import { Checkbox } from "antd";

import "react-credit-cards/es/styles-compiled.css";

const InstantPayment = ({ cardInfo, setCardInfo }) => {
  const [focus, setFocus] = useState("");

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCardInfo({ ...cardInfo, [name]: value });
  };

  const handleSaveCard = (e) => {
    setCardInfo({ ...cardInfo, isCardSaved: e.target.checked });
  };

  return (
    <Flex width={1}>
      <Box width={1 / 2} px={10}>
        <form>
          <label>kart numarası</label>
          <input
            type="number"
            name="number"
            placeholder="**** **** **** ****"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <label>kart üzerindeki isim</label>
          <input
            type="tel"
            name="name"
            placeholder="Kart sahibinin Adı ve Soyadı"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <Flex width={1}>
            <Box width={1 / 2} sx={{ display: "grid", paddingRight: "5px" }}>
              <label>son kullana tarihi</label>
              <input
                className="expire"
                type="tel"
                name="expiry"
                placeholder="Ay/yıl"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Box>
            <Box width={1 / 2} sx={{ display: "grid" }}>
              <label>güvenlik kodu</label>
              <input
                type="tel"
                name="cvc"
                placeholder="CVC/CVV"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Box>
          </Flex>
        </form>
        <Checkbox onChange={handleSaveCard}>
          Kart Bilgilerimi Sonraki Siparişler için sakla
        </Checkbox>
      </Box>
      <Box width={1 / 2} mt={20}>
        <Cards
          cvc={cardInfo.cvc}
          expiry={cardInfo.expiry}
          focused={focus}
          name={cardInfo.name}
          number={cardInfo.number}
        />
      </Box>
    </Flex>
  );
};

export default InstantPayment;

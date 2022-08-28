import React, { useState } from "react";

import { Text, Image } from "rebass";
import { Radio } from "antd";
import DeliveryContainer from "../DeliveryContainer";

import { CreditCardOutlined } from "@ant-design/icons";
import money from "../../../assests/money.svg";

import { PayOnDeliveryContainer } from "./style";

const PayOnDelivery = () => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <PayOnDeliveryContainer>
      <Text color={"black"}>Ödeme yöntemini seçiniz</Text>
      <Radio.Group value={selectedValue}>
        <DeliveryContainer
          icon={<Image src={money} width={"55px"} height={"35px"} />}
          mainText="Kapıda Öde"
          text="Kapıda ödeme"
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <DeliveryContainer
          icon={
            <CreditCardOutlined
              style={{
                fontSize: "30px",
                margin: "0 20px",
              }}
            />
          }
          mainText="Kapıda Kredi Kartı ile Öde"
          text="Kuryemizin yanında POS cihazı ile gelir"
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </Radio.Group>
    </PayOnDeliveryContainer>
  );
};

export default PayOnDelivery;

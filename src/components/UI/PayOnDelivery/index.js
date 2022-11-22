import React from "react";

import { Text, Image } from "rebass";
import { Radio } from "antd";
import DeliveryContainer from "../DeliveryContainer";

import { CreditCardOutlined } from "@ant-design/icons";
import money from "../../../assests/money.svg";

import { PayOnDeliveryContainer } from "./style";
import { useBorderFrame } from "../../../config/hooks/useBorderFrame";

const PayOnDelivery = () => {
  const { borderedValue, setItemValue } = useBorderFrame();

  return (
    <PayOnDeliveryContainer>
      <Text color={"black"}>Ödeme yöntemini seçiniz</Text>
      <Radio.Group value={borderedValue}>
        <DeliveryContainer
          icon={<Image src={money} width={"55px"} height={"35px"} />}
          mainText="Kapıda Öde"
          text="Kapıda ödeme"
          borderedValue={borderedValue}
          setItemValue={setItemValue}
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
          borderedValue={borderedValue}
          setItemValue={setItemValue}
        />
      </Radio.Group>
    </PayOnDeliveryContainer>
  );
};

export default PayOnDelivery;

import React from "react";

import { Tabs } from "antd";

import InstantPayment from "../InstantPayment";
import SavedCardPayment from "../SavedCardPayment";

import { CardContainer } from "./style";

const { TabPane } = Tabs;

const CreditCard = ({ cardInfo, setCardInfo, setPaymentMethod }) => {
  const handleOnChange = (key) => {
    console.log("key", key);

    setPaymentMethod(key);
  };

  return (
    <CardContainer id="PaymentForm">
      <Tabs defaultActiveKey="InstantPayment" onChange={handleOnChange}>
        <TabPane tab="Yeni Kart" key="InstantPayment">
          <InstantPayment cardInfo={cardInfo} setCardInfo={setCardInfo} />
        </TabPane>
        <TabPane tab="Kayıtlı Kartlar" key="SavedCardPayment">
          <SavedCardPayment />
        </TabPane>
      </Tabs>
    </CardContainer>
  );
};

export default CreditCard;

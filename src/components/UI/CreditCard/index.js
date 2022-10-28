import React from "react";

import { Tabs } from "antd";

import InstantPayment from "../InstantPayment";
import SavedCardPayment from "../SavedCardPayment";

import { CardContainer } from "./style";

const { TabPane } = Tabs;

const CreditCard = ({ cardInfo, setCardInfo }) => {
  return (
    <CardContainer id="PaymentForm">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Yeni Kart" key="1">
          <InstantPayment cardInfo={cardInfo} setCardInfo={setCardInfo} />
        </TabPane>
        <TabPane tab="Kayıtlı Kartlar" key="2">
          <SavedCardPayment />
        </TabPane>
      </Tabs>
    </CardContainer>
  );
};

export default CreditCard;

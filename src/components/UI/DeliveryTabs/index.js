import React from "react";

import { Tabs, Button } from "antd";
import { Box, Flex, Text } from "rebass";

import CourierDelivery from "../CourierDelivery";
import AirlineTransport from "../AirlineTransport";
import ShippingTransport from "../ShippingTransport";

import { TabsContainer } from "./style";
import { RightOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const DeliveryTabs = ({ nextPageLink }) => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <TabsContainer>
      <Tabs onChange={onChange} type="card">
        <TabPane tab="Kurye Taşıması" key="1">
          <CourierDelivery />
        </TabPane>
        <TabPane tab="Hava Yolu Taşıması" key="2">
          <AirlineTransport />
        </TabPane>
        <TabPane tab="Deniz Yolu Taşıması" key="3">
          <ShippingTransport />
        </TabPane>
      </Tabs>
      <Flex
        justifyContent="space-between"
        p={3}
        sx={{ borderTop: "1px solid lightgrey" }}
      >
        <Box>
          <Text fontSize={1} fontWeight="300">
            Ödenecek Tutar
          </Text>
          <Text fontSize={4} fontWeight="600">
            USD 0
          </Text>
        </Box>
        <Button
          type="primary"
          danger
          size="large"
          style={{
            width: "170px",
            height: "50px",
            borderColor: "#d84148",
            background: "#d5353b",
          }}
        >
          Devam Et
          <RightOutlined
            style={{
              fontSize: "15px",
              position: "relative",
              top: "-3px",
            }}
          />
        </Button>
      </Flex>
    </TabsContainer>
  );
};

export default DeliveryTabs;

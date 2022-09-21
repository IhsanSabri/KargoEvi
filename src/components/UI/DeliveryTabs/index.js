import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Tabs } from "antd";
import { Box, Flex, Text } from "rebass";

import CourierDelivery from "../CourierDelivery";
import AirlineTransport from "../AirlineTransport";
import ShippingTransport from "../ShippingTransport";

import { modifiedData } from "../../../store/DeliveryDetail";

import { TabsContainer, SubmitButton } from "./style";
import { RightOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const DeliveryTabs = ({ nextPageLink }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { deliveryPrice } = useSelector(({ delivery }) => delivery);

  const onChange = (key) => {
    console.log(key);
  };

  const handleTabs = (data) => {
    console.log("delivery tabs data", data);

    dispatch(modifiedData({ name: "deliveryDetail", data }));

    navigate(nextPageLink);
    /*TODO: axios POST request */
  };

  return (
    <TabsContainer>
      <form id="hook-form" onSubmit={handleSubmit(handleTabs)}>
        <Tabs onChange={onChange} type="card">
          <TabPane tab="Kurye Taşıması" key="1">
            <CourierDelivery register={register} />
          </TabPane>
          <TabPane tab="Hava Yolu Taşıması" key="2">
            <AirlineTransport register={register} />
          </TabPane>
          <TabPane tab="Deniz Yolu Taşıması" key="3">
            <ShippingTransport register={register} />
          </TabPane>
        </Tabs>
      </form>
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
            {`USD ${deliveryPrice}`}
          </Text>
        </Box>
        <SubmitButton type="submit" form="hook-form">
          Devam Et
          <RightOutlined
            style={{
              fontSize: "15px",
              position: "relative",
              top: "-3px",
            }}
          />
        </SubmitButton>
      </Flex>
    </TabsContainer>
  );
};

export default DeliveryTabs;

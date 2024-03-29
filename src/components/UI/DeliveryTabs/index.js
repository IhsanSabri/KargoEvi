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
  };

  return (
    <TabsContainer>
      <form id="hook-form" onSubmit={handleSubmit(handleTabs)}>
        <Tabs onChange={onChange} type="card">
          <TabPane tab="Kurye Taşıması" key="1">
            <CourierDelivery register={register} />
          </TabPane>
          <TabPane tab="Hava Yolu Taşıması" key="2" disabled>
            <AirlineTransport register={register} />
          </TabPane>
          <TabPane tab="Deniz Yolu Taşıması" key="3" disabled>
            <ShippingTransport register={register} />
          </TabPane>
        </Tabs>
      </form>
      <Flex
        justifyContent="space-between"
        p={3}
        sx={{ borderTop: "1px solid lightgrey", background: "white" }}
      >
        <Box width={1 / 2}>
          <Text fontSize={1} fontWeight="300">
            Ödenecek Tutar
          </Text>
          <Text
            fontSize={4}
            fontWeight="600"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {`USD ${deliveryPrice}`}
          </Text>
        </Box>
        <SubmitButton type="submit" form="hook-form">
          Devam Et
          <RightOutlined
            style={{
              fontSize: "15px",
              position: "relative",
              top: "-1px",
              right: "-5px",
            }}
          />
        </SubmitButton>
      </Flex>
    </TabsContainer>
  );
};

export default DeliveryTabs;

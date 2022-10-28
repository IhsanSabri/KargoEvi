import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Image } from "rebass";

import destination from "../../../assests/destination.svg";
import { calculatePrice } from "../../../config/utils";
import { modifiedData } from "../../../store/DeliveryDetail";

import {
  MainOrderSummry,
  MainOrderSummryBox,
  SummaryTitle,
  Destination,
  InfoBox,
  SeperationLine,
  TotalSummry,
} from "./style";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const {
    deliveryPrice,
    deliveryDetail: {
      destination: direction,
      country,
      weight,
      length,
      width,
      height,
    },
  } = useSelector(({ delivery }) => delivery);

  const volume = (Number(width) * Number(length) * Number(height)) / 1000000;

  useEffect(() => {
    let totalPrice = calculatePrice({ weight, length, width, height });

    dispatch(modifiedData({ name: "deliveryPrice", data: totalPrice }));
  }, [weight]);

  return (
    <MainOrderSummry width={"15%"}>
      <MainOrderSummryBox>
        <SummaryTitle>SİPARİŞ ÖZET</SummaryTitle>
        <Destination>
          <Box width={"50%"} className="destinationBox">
            <label>{direction === "fromTr" ? "Türkiye" : country}</label>
          </Box>
          <Box>
            <Image src={destination}></Image>
          </Box>
          <Box width={"50%"} className="destinationBox">
            <label>{direction === "fromTr" ? country : "Türkiye"}</label>
          </Box>
        </Destination>
        <InfoBox>
          <Box>
            <label className="cargoInfo">Ağırlık</label>
          </Box>
          <Box>
            <label className="cargoValue">{`${weight}KG`}</label>
          </Box>
        </InfoBox>
        <InfoBox>
          <Box>
            <label className="cargoInfo">Hacim</label>
          </Box>
          <Box>
            <label className="cargoValue">{`${volume}M³`}</label>
          </Box>
        </InfoBox>
        <Box style={{ padding: "0" }}>
          <SeperationLine />
        </Box>
        <TotalSummry>
          <Box>
            <label className="totalPriceName">Toplam Tutar</label>
          </Box>
          <Box>
            <label className="totalPrice">{`USD ${deliveryPrice}`}</label>
          </Box>
        </TotalSummry>
      </MainOrderSummryBox>
    </MainOrderSummry>
  );
};

export default OrderSummary;

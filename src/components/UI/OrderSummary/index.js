import React from "react";
import { useSelector } from "react-redux";

import { Box, Image } from "rebass";

import destination from "../../../assests/destination.svg";

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
  const {
    deliveryPrice,
    deliveryDetail: { destination: direction, weight, length, width, height },
  } = useSelector(({ delivery }) => delivery);
  const volume = Number(width) * Number(length) * Number(height);

  return (
    <MainOrderSummry width={"15%"}>
      <MainOrderSummryBox>
        <SummaryTitle>SİPARİŞ ÖZET</SummaryTitle>
        <Destination>
          <Box width={"50%"} className="destinationBox">
            <label>{direction === "fromTr" ? "Türkiye" : "Almanya"}</label>
          </Box>
          <Box>
            <Image src={destination}></Image>
          </Box>
          <Box width={"50%"} className="destinationBox">
            <label>{direction === "fromTr" ? "Almanya" : "Türkiye"}</label>
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

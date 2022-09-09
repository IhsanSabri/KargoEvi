import React from "react";

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
  return (
    <MainOrderSummry width={"15%"}>
      <MainOrderSummryBox>
        <SummaryTitle>SİPARİŞ ÖZET</SummaryTitle>
        <Destination>
          <Box width={"50%"} className="destinationBox">
            <label>Türkiye</label>
          </Box>
          <Box>
            <Image src={destination}></Image>
          </Box>
          <Box width={"50%"} className="destinationBox">
            <label>Almanya</label>
          </Box>
        </Destination>
        <InfoBox>
          <Box>
            <label className="cargoInfo">Ağırlık</label>
          </Box>
          <Box>
            <label className="cargoValue">31KG</label>
          </Box>
        </InfoBox>
        <InfoBox>
          <Box>
            <label className="cargoInfo">Hacim</label>
          </Box>
          <Box>
            <label className="cargoValue">2.3M³</label>
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
            <label className="totalPrice">USD 21,33</label>
          </Box>
        </TotalSummry>
      </MainOrderSummryBox>
    </MainOrderSummry>
  );
};

export default OrderSummary;

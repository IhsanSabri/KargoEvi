import styled from "@emotion/styled";

import { Box, Flex } from "rebass";

const MainOrderSummry = styled(Box)`
  position: absolute;
  top: 14rem;
  right: 5rem;
  background: white;
  font-family: Manrope;
  font-style: normal;
`;

const MainOrderSummryBox = styled(Box)`
  padding: 1rem 1rem;
`;

const SummaryTitle = styled(Box)`
  font-size: 14px;
  font-weight: 600;
  text-transformation: uppercase;
`;

const Destination = styled(Flex)`
  align-items: center;
  text-align: center;
  margin-top: 10px;

  .destinationBox {
    background: #f5f7f8;
    border-radius: 3px;
    padding-top: 3px;

    label {
      font-weight: 500;
      font-size: 11px;
      line-height: 15px;
      color: #262b37;
    }
  }
`;

const InfoBox = styled(Flex)`
  justify-content: space-between;
  margin-top: 16px;
  padding: 0px 10px;

  .cargoInfo {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: rgba(38, 43, 55, 0.6);
  }

  .cargoValue {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    color: #262b37;
  }
`;

const SeperationLine = styled.hr`
  margin-top: 9px;
  margin-bottom: 5px;
  color: #adb5bd;
`;

const TotalSummry = styled(Flex)`
  padding-top: 10px;
  justify-content: space-between;
  align-items: center;

  .totalPriceName {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #262b37;
  }

  .totalPrice {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #262b37;
  }
`;

export {
  MainOrderSummry,
  MainOrderSummryBox,
  SummaryTitle,
  Destination,
  InfoBox,
  SeperationLine,
  TotalSummry,
};

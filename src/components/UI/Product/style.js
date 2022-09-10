import styled from "@emotion/styled";

import { Flex } from "rebass";

const MainProductCover = styled(Flex)`
  justify-content: center;
  font-family: "Manrope";
  font-style: normal;
  margin-top: 15px;
`;

const WeightFormatSpan = styled.span`
  border: 1px solid rgba(38, 43, 55, 0.24);
  border-radius: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: #666666;
  background: white;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  margin-top: 6px;
  display: flex;
  border-left-width: 0;
  margin-left: -5px;
`;

const PriceSelect = styled.select`
  background: #e5e5e5;
  border: 1px solid rgba(38, 43, 55, 0.24);
  border-radius: 4px;
  border-left-width: 0;
  margin-left: -5px;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #262b37;
  margin-top: 6px;
  padding: 0.375rem;
`;

export {
  MainProductCover,
  WeightFormatSpan,
  PriceSelect,
};

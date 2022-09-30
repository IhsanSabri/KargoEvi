import styled from "@emotion/styled";

import { Flex } from "rebass";

const MainProductCover = styled(Flex)`
  justify-content: center;
  font-family: "Manrope";
  font-style: normal;
  margin-top: 15px;
`;

const PriceFormatSelect = styled.select`
  background: #e5e5e5;
  border-radius: 4px;
  border-width: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #262b37;
  padding: 0.375rem;
  position: relative;
  top: 0.458rem;
  height: 2.81rem;
  right: 45px;
`;

export { MainProductCover, PriceFormatSelect };

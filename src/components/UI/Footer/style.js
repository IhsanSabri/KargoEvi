import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import { Flex } from "rebass";

const FooterMain = styled(Flex)`
  box-shadow: 0px 0px 10px rgba(38, 43, 55, 0.25);
  height: 120px;
  bottom: 0px;
  position: fixed;
  width: 100%;
  background-color: white;
`;

const BackButton = styled(Link)`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #225386;

  &:hover {
    text-decoration: underline;
  }
`;

export { FooterMain, BackButton };

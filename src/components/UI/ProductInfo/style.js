import styled from "@emotion/styled";
import { Flex } from "rebass";

const FooterContainer = styled(Flex)`
  .submitAndContinueButton {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    width: 14rem;
    height: 64px;
    font-size: 24px;

    &:hover {
      color: #fff;
      background-color: #bb2d3b;
      border-color: #b02a37;
    }
  }
`;

const Download = styled.a`
  color: #1a926b;
`;

export { FooterContainer, Download };

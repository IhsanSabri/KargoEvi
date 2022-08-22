import styled from "@emotion/styled";
import { Flex } from "rebass";

const FooterContainer = styled(Flex)`
  .newOrderButton {
    color: #dc3545;
    border-color: #dc3545;
    margin-right: 15px;
    width: 15%;
    width: 16rem;
    display: flex;
    align-items: center;
    height: 64px;
    font-size: 24px;

    &:hover {
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
    }
  }

  .completeOrderButton {
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

export { FooterContainer };

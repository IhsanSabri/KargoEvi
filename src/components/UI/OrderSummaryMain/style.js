import styled from "@emotion/styled";
import { Box, Flex } from "rebass";

const MainContent = styled(Flex)`
  background: #ffffff;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 0px 8px rgba(38, 43, 55, 0.2);
  border-radius: 8px;
  font-family: "Manrope";
  font-style: normal;
  flex-direction: column;
`;

const Destination = styled(Flex)`
  align-items: center;
  text-align: center;
  padding: 0 10rem 0 10rem;

  .destinationBox {
    background: #f5f7f8;
    border-radius: 4px;
    height: 64px;
    padding-top: 3px;
    align-items: flex-start;
    padding-left: 32px;
    flex-direction: column;
    justify-content: center;

    label:nth-of-type(1) {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #262b37;
      opacity: 0.6;
    }

    label:nth-of-type(2) {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #262b37;
    }
  }
`;

const Content = styled(Flex)`
  padding: 1.5rem 10rem 0 10rem;
  justify-content: space-between;

  div:nth-of-type(1) {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: rgba(38, 43, 55, 0.6);
  }

  div:nth-of-type(2) {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #262B37;
  }
`;

const MainTitle = styled(Flex)`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #262b37;
  width: 100%;
  padding: 32px;
`;

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

export { Content, MainContent, MainTitle, Destination, FooterContainer };

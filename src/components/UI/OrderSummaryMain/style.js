import styled from "@emotion/styled";
import { Box, Flex } from "rebass";

const MainBox = styled(Flex)`
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

const MainContent = styled(Box)`
  padding: 1.5rem 10rem 0 10rem;

  div:nth-of-type(6) {
    padding-top: 3rem !important;
  }

  div:nth-of-type(10) {
    padding-bottom: 3.75rem;

    div:nth-of-type(1) {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #262B37;
    }

    div:nth-of-type(2) {
      font-weight: 700;
      font-size: 32px;
      line-height: 44px;
      color: #262B37;
    }
  } 
`;

const Content = styled(Flex)`
  justify-content: space-between;
  padding-top: 16px;
  align-items: center;

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
    color: #262b37;
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

export {
  MainContent,
  Content,
  MainBox,
  MainTitle,
  Destination,
  FooterContainer,
};

import styled from "@emotion/styled";

import { Flex } from "rebass";
import { CopyOutlined } from "@ant-design/icons";

const MainBox = styled(Flex)`
  background: #ffffff;
  border-radius: 8px;
  font-family: "Manrope";
  font-style: normal;
  flex-direction: column;
`;

const MainTitle = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: #262b37;
  margin-bottom: -20px;
`;

const MainContent = styled(Flex)`
  font-family: "Manrope";
  font-style: normal;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  padding: 56px;
  background: #fff;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 0px 3px #e7e7e7;
  border-radius: 8px;
`;

const OrderInfo = styled(Flex)`
  background: #f9fbfd;
  height: 104px;
  border: 1px dashed #e7e7e7;
  border-radius: 4px;
  justify-content: space-around;
  align-items: center;
`;

const DeliveryInfo = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  font-family: "Manrope";
  font-style: normal;
  color: #000000;
  font-weight: 600;
  text-align: left;
`;

const CopyButton = styled(Flex)`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: rgb(34, 83, 134);
  align-items: center;
  cursor: pointer;
  text-decoration: unset;

  &:hover {
    text-decoration: underline;
  }
`;

const CopyIcon = styled(CopyOutlined)`
  padding-right: 7px;
`;

const OrderText = styled(Flex)`
  padding: 50px 35px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;

export {
  MainBox,
  MainTitle,
  OrderInfo,
  DeliveryInfo,
  CopyButton,
  CopyIcon,
  MainContent,
  OrderText,
};

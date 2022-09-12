import styled from "@emotion/styled";

import { Flex, Image } from "rebass";
import { Button } from "antd";

const MainBackgroundImage = styled(Image)`
  height: 80vh;
`;

const MainBottomTabs = styled(Flex)`
  align-items: flex-end;
  margin-top: -12rem;
  height: 330px;
`;

const BottomTabsCardFirst = styled(Flex)`
  background: #7c8da1;
  padding: 3rem;
  border-radius: 6px;
  flex-direction: column;
  width: 95%;
`;

const BottomTabsCardOthers = styled(Flex)`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 12px rgba(46, 57, 70, 0.3);
  width: 95%;
  height: 134px;
`;

const BottomTabsCarOthersTitle = styled(Flex)`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #262b37;
  align-items: center;
  padding: 2rem;
  height: inherit;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ContactButton = styled(Button)`
  border: 1px solid #ffffff;
  border-radius: 4px;
  background: transparent;
  color: #ffffff;
  height: 64px;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-top: 43px;

  &:hover {
    border-color: unset !important;
    background: rgba(255, 255, 255, 0.15) !important;
    color: #ffffff !important;
  }
`;

export {
  MainBackgroundImage,
  MainBottomTabs,
  BottomTabsCardFirst,
  ContactButton,
  BottomTabsCardOthers,
  BottomTabsCarOthersTitle,
};

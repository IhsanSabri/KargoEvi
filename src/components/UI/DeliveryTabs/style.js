import styled from "@emotion/styled";

import { Box } from "rebass";

const TabsContainer = styled(Box)`
  position: absolute;
  top: 15%;
  right: 10%;
  z-index: 99;
  background-color: white;
  width: 26%;

  .ant-tabs-tab-btn {
    font-size: 13px;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: black;
  }
`;

const SubmitButton = styled.button`
  width: 170px;
  height: 50px;
  border-color: #d84148;
  background: #d5353b;
  color: white;
  border-radius: 5px;
`;

export { TabsContainer, SubmitButton };

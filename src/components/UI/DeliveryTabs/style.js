import styled from "@emotion/styled";

import { Box } from "rebass";

const TabsContainer = styled(Box)`
  position: absolute;
  top: 15%;
  right: 10%;
  z-index: 99;
  width: 26%;

  .ant-tabs-nav {
    margin: 0 !important;

    .ant-tabs-nav-operations {
      display: none;
    }
  }

  .ant-tabs-nav-list {
    width: 100%;

    .ant-tabs-tab {
      border-radius: 4px 4px 0 0 !important;
      width: 33.3%;
    }
  }

  .ant-tabs-tab-btn {
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: black;
  }
`;

const SubmitButton = styled.button`
  width: 55%;
  height: 64px;
  border-color: #d84148;
  background: #d5353b;
  color: white;
  border-radius: 5px;
  font-weight: 600;
  font-size: 24px;
  border-width: inherit;
`;

export { TabsContainer, SubmitButton };

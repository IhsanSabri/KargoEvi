import styled from "@emotion/styled";
import { Flex } from "rebass";

const MenuContainer = styled(Flex)`
  margin-top: 20px;

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: inherit;
  }

  .ant-menu-submenu-title {
    background: #f6f7f8;
  }

  .ant-menu-sub.ant-menu-inline > .ant-menu-item {
    height: inherit;
  }

  .ant-menu-title-content {
    color: black;
  }

  .ant-menu-item:after {
    border-right: none;
  }
`;

export { MenuContainer };

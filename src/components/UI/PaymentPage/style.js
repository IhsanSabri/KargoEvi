import styled from "@emotion/styled";
import { Flex } from "rebass";

const MenuContainer = styled(Flex)`
  .ant-menu-submenu-title {
    background: #f6f7f8;
  }

  .ant-menu-sub.ant-menu-inline>.ant-menu-item {
    height: inherit;
  }
`;

export { MenuContainer };

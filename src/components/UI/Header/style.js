import styled from "@emotion/styled";

import { Menu, Layout } from "antd";
const { Header } = Layout;

const MainHeader = styled(Header)`
  height: 40px;
  background: #2e3946;
`;

const MenuMain = styled(Menu)`
  background: #2e3946;
  border-bottom: unset;
  color: white;
  justify-content: flex-end;
  width: 90%;
  height: inherit;
  align-items: center;

  .ant-menu-item-selected {
    color: unset !important;
  }

  li {
    height: inherit !important;
    align-items: center !important;
    display: flex !important;

    &:hover {
      color: unset !important;
    }

    span {
      align-items: center !important;
      display: flex !important;
    }
  }
`;

export { MenuMain, MainHeader };

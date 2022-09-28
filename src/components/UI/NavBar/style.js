import styled from "@emotion/styled";

import { Image } from "rebass";
import { Layout, Menu, Button } from "antd";
const { Header } = Layout;

const Navbar = styled(Header)`
  align-items: center;
  display: flex;
  background: rgb(38, 43, 55) !important;
`;

const MenuMain = styled(Menu)`
  width: 60%;
  background: rgb(38, 43, 55) !important;
  border-bottom: unset;

  .ant-menu-item {
    .nav-item {
      color: #ffffff;
      text-decoration: none;
      font-family: "Manrope";
      font-style: normal;
      font-weight: 400;
      font-size: 21px;
      line-height: 29px;
    }
  }
`;

const MainButton = styled(Button)`
  background: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.6) !important;
  border-radius: 2px;
  padding: 9px 27px 9px 22px;
  display: flex;
  align-items: center;
  height: 48px;
  color: white !important;
  font-weight: 500;
  font-size: 18px;
  font-family: "Manrope";
  font-style: normal;
  line-height: 22px;
  margin-left: 1rem;

  &:hover {
    border-color: unset !important;
    background: rgba(255, 255, 255, 0.15) !important;
  }
`;

const ImageMain = styled(Image)`
  min-width: unset;
  max-width: unset;
  margin-right: 0.5rem;
`;
export { Navbar, MenuMain, MainButton, ImageMain };

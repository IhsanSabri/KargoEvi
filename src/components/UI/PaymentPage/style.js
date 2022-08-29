import styled from "@emotion/styled";
import { Flex } from "rebass";

const MenuContainer = styled(Flex)`
  .ant-menu-inline {
    background-color: #eff2f5;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: white;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: black;
  }

  .ant-menu-submenu {
    border-bottom: 10px solid #eff2f5;
  }

  .ant-tabs-tab-btn {
    font-size: 19px;
    font-weight: 300;
  }

  .ant-menu-submenu-title {
    background: #f6f7f8;
    margin: 0;
    padding: 27px;
    border-radius: 10px;
    border: 1px solid lightgray;
  }

  .ant-menu-sub.ant-menu-inline > .ant-menu-item {
    height: inherit;
    background-color: white;
    margin-top: -10px;
    border-bottom: 1px solid lightgray;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .ant-menu-title-content {
    color: black;
  }

  .ant-menu-item {
    padding: 10px 45px 25px;

    &:after {
      border-right: none;
    }
  }
`;

const Title = styled.span`
  font-size: 19px;
  font-weight: 400;
`;

const PaymentPageMainWrapper = styled.div`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #225386;
    border-color: #225386;
  }
  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
    margin: 5px;

    &::after {
      width: 8px;
      height: 13px;
    }
  }
`;

const FooterContainer = styled(Flex)`
  .completePayment {
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

export { MenuContainer, Title, PaymentPageMainWrapper, FooterContainer };

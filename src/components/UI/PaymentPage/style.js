import styled from "@emotion/styled";
import { Flex } from "rebass";

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

    &:disabled {
      background: #ea9a9d;
      border-color: #ea9a9d;
      cursor: unset !important;
    }
  }
`;

export { PaymentPageMainWrapper, FooterContainer };

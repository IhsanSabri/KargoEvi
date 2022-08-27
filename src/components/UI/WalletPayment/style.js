import styled from "@emotion/styled";

import { Box } from "rebass/styled-components";

const WalletContainer = styled(Box)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #225386;
    border-color: #225386;
  }
  .ant-checkbox-inner {
    width: 25px;
    height: 25px;

    &::after {
      width: 10px;
      height: 15px;
    }
  }

  .ant-card {
    width: 100% !important;
    box-shadow: -1px 1px 5px 4px #eeeeee;
    min-width: 175px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 12px;
      color: gray;
      text-transform: uppercase;
    }

    input {
      margin: 3px 0 15px;
      height: 50px;
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 10px;
      width: 100%;
    }
  }
`;

export { WalletContainer };

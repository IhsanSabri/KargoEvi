import styled from "@emotion/styled";

import { Form, Button } from "antd";

const FormItem = styled(Form.Item)`
  border: unset;

  .ant-row.ant-form-item-row {
    flex-direction: column;
    text-align-last: left;

    div {
      max-width: unset;
    }
  }

  .ant-form-item-control-input-content {
    display: inline-flex;
    justify-content: space-between;

    .ant-input-group {
      height: inherit;

      .ant-input-group-addon {
        height: inherit;
      }

      #register_phone {
        height: inherit;
      }
    }
  }
  .ant-form-item-explain-error {
    text-align-last: initial;
  }
`;

const ButtonRegister = styled(Button)`
  width: 100%;
  text-align-last: center;
  height: 64px;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
`;

export { FormItem, ButtonRegister };

import styled from "@emotion/styled";

import { Form, Button } from "antd";

const FormItem = styled(Form.Item)`
  .ant-row.ant-form-item-row {
    flex-direction: column;
    text-align-last: justify;
  }
  .ant-form-item-control-input-content {
    display: inline-flex;
    justify-content: space-between;
  }
  .ant-form-item-explain-error {
    text-align-last: initial;
  }
`;

const ButtonSubmit = styled(Button)`
  width: 100%;
  text-align-last: center;
`;

export { FormItem, ButtonSubmit };

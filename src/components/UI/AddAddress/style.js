import styled from "@emotion/styled";

import { Form, Button } from "antd";

const FormItem = styled(Form.Item)`
  border: unset;

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

const ButtonRegister = styled(Button)`
  width: 20%;
  text-align-last: center;
}
`;

const FormTitle = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  color: #262b37;
`;

export { FormItem, ButtonRegister, FormTitle };

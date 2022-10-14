import styled from "@emotion/styled";

import { Form, Button, Divider } from "antd";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";

const FormItem = styled(Form.Item)`
  .ant-row.ant-form-item-row {
    flex-direction: column;
    text-align-last: left;
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
  height: 64px;
  width: 100%;
  text-align-last: center;

  span {
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    color: #ffffff;
  }
`;

const MainDivider = styled(Divider)`
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #262b37;
    opacity: 0.6;
  }
`;

const FacebookButton = styled(FacebookLoginButton)`
  box-shadow: none !important;
  background: rgb(59, 89, 152) !important;

  &:hover {
    background: rgb(59, 89, 152) !important;
  }

  div {
    flex-direction: column;
    justify-content: center;

    div:nth-of-type(3) {
      text-align: center !important;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

const GoogleButton = styled(GoogleLoginButton)`
  box-shadow: none !important;
  background: #f9edea !important;

  div {
    flex-direction: column;
    justify-content: center;

    div:nth-of-type(3) {
      text-align: center !important;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

const TwitterButton = styled(TwitterLoginButton)`
  box-shadow: none !important;
  background: rgb(90, 164, 235) !important;

  &:hover {
    background: rgb(90, 164, 235) !important;
  }

  div {
    flex-direction: column;
    justify-content: center;

    div:nth-of-type(3) {
      text-align: center !important;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

const AppleButton = styled(AppleLoginButton)`
  box-shadow: none !important;
  background: #e8e8e8 !important;

  div {
    flex-direction: column;
    justify-content: center;

    div:nth-of-type(3) {
      text-align: center !important;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export {
  FormItem,
  ButtonSubmit,
  MainDivider,
  FacebookButton,
  GoogleButton,
  TwitterButton,
  AppleButton,
};

import React from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

import useSignInProcess from "../../../config/hooks/useSignInProcess";

import {
  FormItem,
  ButtonSubmit,
  LoginFormForgotButton,
  RememberMeCheckbox,
} from "./style";
import { Flex } from "rebass";

const Login = ({ nextPageLink, closeModal }) => {
  const { login } = useSignInProcess(closeModal, nextPageLink);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { username, password } = values;

    login(username, password);
  };

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <FormItem
          label="E-MAİL ADRESİNİZ"
          name="username"
          rules={[
            {
              required: true,
              message: "Lütfen, kullanıcı adını giriniz!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Yazınız"
          />
        </FormItem>
        <FormItem
          label="ŞİFRENİZ"
          name="password"
          rules={[
            {
              required: true,
              message: "Lütfen, şifre giriniz!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Yazınız"
          />
        </FormItem>
        <FormItem>
          <FormItem name="remember" valuePropName="checked" noStyle>
            <RememberMeCheckbox>Beni Hatırla</RememberMeCheckbox>
          </FormItem>

          <LoginFormForgotButton className="login-form-forgot" href="">
            Şifremi Unuttum
          </LoginFormForgotButton>
        </FormItem>

        <FormItem>
          <ButtonSubmit
            danger
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Giriş Yap
          </ButtonSubmit>
        </FormItem>
      </Form>
    </>
  );
};

export default Login;

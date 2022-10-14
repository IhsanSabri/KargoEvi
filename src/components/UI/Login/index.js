import React from "react";

import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from "antd";

import useSignInProcess from "../../../config/hooks/useSignInProcess";

import {
  FormItem,
  ButtonSubmit,
  MainDivider,
  FacebookButton,
  GoogleButton,
  TwitterButton,
  AppleButton,
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
            <Checkbox>Beni Hatırla</Checkbox>
          </FormItem>

          <a className="login-form-forgot" href="">
            Şifremi Unuttum
          </a>
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
      {
        // <MainDivider>veya</MainDivider>
        // <Flex>
        //   <GoogleButton onClick={() => alert("Hello")}>
        //     <span>Google</span>
        //   </GoogleButton>
        //   <TwitterButton onClick={() => alert("Hello")}>
        //     <span>Twitter</span>
        //   </TwitterButton>
        //   <FacebookButton onClick={() => alert("Hello")}>
        //     <span>Facebook</span>
        //   </FacebookButton>
        //   <AppleButton onClick={() => alert("Hello")}>
        //     <span>Apple</span>
        //   </AppleButton>
        // </Flex>
      }
    </>
  );
};

export default Login;

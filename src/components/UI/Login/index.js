import React from "react";
import { useNavigate } from "react-router-dom";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from "antd";

import { AuthService } from "../../../services";

import { FormItem, ButtonSubmit } from "./style";

const authService = new AuthService();

const Login = ({ nexPageLink }) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { username, password } = values;

    authService
      .login({
        email: username,
        password,
      })
      .then((res) => {
        console.log("res", res);

        if (res.success) {
          navigate(nexPageLink);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
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
          <Checkbox>Remember me</Checkbox>
        </FormItem>

        <a className="login-form-forgot" href="">
          Forgot password
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
  );
};

export default Login;

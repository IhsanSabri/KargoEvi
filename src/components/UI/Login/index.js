import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from "antd";
import React from "react";

import { FormItem, ButtonSubmit } from "./style";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
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

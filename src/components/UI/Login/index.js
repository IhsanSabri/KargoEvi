import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from "antd";

import { AuthService, UserService } from "../../../services";
import { modifiedData } from "../../../store/DeliveryDetail";
import { setNotificationMessage } from "../../../config/utils";

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

const authService = new AuthService();
const userService = new UserService();

const Login = ({ nexPageLink }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getToken = async (username, password) => {
    authService
      .login({
        email: username,
        password,
      })
      .then(async (res) => {
        if (res.success) {
          dispatch(modifiedData({ name: "token", data: res.access_token }));

          await getUserId(username);
        }
      })
      .catch((err) => {
        setNotificationMessage({
          type: "error",
          message: "Please check you credentials",
        });
      });
  };

  const getUserId = (username) => {
    userService
      .getSingleUser({
        email: username,
      })
      .then((res) => {
        console.log("res", res);
        if (res.success) {
          const {
            data: { _id, adress },
          } = res;

          dispatch(modifiedData({ name: "userId", data: _id }));
          dispatch(modifiedData({ name: "userAddress", data: adress }));

          setNotificationMessage({
            type: "success",
            message: "Logged in successfully",
          });

          setTimeout(() => {
            navigate(nexPageLink);
          }, 500);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { username, password } = values;

    getToken(username, password);
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
      <MainDivider>veya</MainDivider>
      <Flex>
        <GoogleButton onClick={() => alert("Hello")}>
          <span>Google</span>
        </GoogleButton>
        <TwitterButton onClick={() => alert("Hello")}>
          <span>Twitter</span>
        </TwitterButton>
        <FacebookButton onClick={() => alert("Hello")}>
          <span>Facebook</span>
        </FacebookButton>
        <AppleButton onClick={() => alert("Hello")}>
          <span>Apple</span>
        </AppleButton>
      </Flex>
    </>
  );
};

export default Login;

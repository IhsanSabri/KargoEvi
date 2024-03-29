import React from "react";

import { Checkbox, Form, Input, Select, Radio } from "antd";

import { UserService } from "../../../services";
import { setNotificationMessage } from "../../../config/utils";
import useSignInProcess from "../../../config/hooks/useSignInProcess";

import { FormItem, ButtonRegister } from "./style";

const { Option } = Select;

const userService = new UserService();

const SignUp = ({ nextPageLink, closeModal }) => {
  const [form] = Form.useForm();

  const { login } = useSignInProcess(closeModal, nextPageLink);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { username, lastName, email, password, type, phone, prefix } = values;

    userService
      .addUser({
        name: `${username} ${lastName}`,
        email,
        password,
        type,
        phone: `${prefix}${phone}`,
      })
      .then((res) => {
        if (res.success) {
          login(email, password);
        }
      })
      .catch((err) => {
        console.log("err", err);

        setNotificationMessage({
          type: "error",
          message: "This e-mail is exist",
        });
      });
  };

  const prefixSelector = (
    <FormItem name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="90">+90</Option>
        <Option value="1">+1</Option>
      </Select>
    </FormItem>
  );

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "90",
      }}
      scrollToFirstError
    >
      <Form.Item name="type">
        <Radio.Group
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Radio style={{ fontSize: "18px" }} value="personal">
            {" "}
            Bireysel Üyelik
          </Radio>
          <Radio style={{ fontSize: "18px" }} value="corporate">
            {" "}
            Kurumsal Üyelik{" "}
          </Radio>
        </Radio.Group>
      </Form.Item>

      <Input.Group compact>
        <FormItem
          label="ADINIZ"
          name="username"
          rules={[
            {
              required: true,
              message: "Lütfen, kullanıcı adını giriniz!",
            },
          ]}
          style={{
            width: "50%",
          }}
        >
          <Input
            placeholder="Username"
            style={{
              width: "95%",
            }}
          />
        </FormItem>

        <FormItem
          label="SOYADINIZ"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Lütfen, kullanıcı soyadını giriniz!",
            },
          ]}
          style={{
            width: "50%",
          }}
        >
          <Input
            placeholder="LastName"
            style={{
              width: "100%",
            }}
          />
        </FormItem>
      </Input.Group>

      <FormItem
        name="phone"
        label="GSM NUMARANIZ"
        rules={[
          {
            required: true,
            message: "Lütfen, telefon numarası giriniz!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
            height: "inherit"
          }}
        />
      </FormItem>

      <FormItem
        name="email"
        label="E-MAİL ADRESİNİZ"
        rules={[
          {
            type: "email",
            message: "Geçerli bir e-mail giriniz!",
          },
          {
            required: true,
            message: "Lütfen e-mail giriniz!",
          },
        ]}
      >
        <Input />
      </FormItem>

      <FormItem
        name="password"
        label="ŞİFRENİZ"
        rules={[
          {
            required: true,
            message: "Lütfen, şifre giriniz!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </FormItem>

      <FormItem
        name="confirm"
        label="ŞİFRENİZ (Tekrar)"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Şifreinizi kontrol ediniz!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("Şifreler eşleşmedi.Tekrar deneyiniz!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </FormItem>

      <FormItem
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(
                    new Error("Kullanım koşullarını kabul ediniz!")
                  ),
          },
        ]}
      >
        <Checkbox>
          Tüm <a href="">Kullanım Şartları'</a>nı okudum ve kabul ediyorum.
        </Checkbox>
      </FormItem>
      <FormItem>
        <ButtonRegister danger type="primary" htmlType="submit">
          Kayıt Ol
        </ButtonRegister>
      </FormItem>
    </Form>
  );
};

export default SignUp;

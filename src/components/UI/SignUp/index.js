import React from "react";

import { Checkbox, Form, Input, Select, Radio } from "antd";
import { FormItem, ButtonRegister } from "./style";

const { Option } = Select;


const SignUp = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
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
      <Form.Item>
        <Radio.Group>
          <Radio style={{ fontSize: "20px" }} value="bireyselÜyelik"> Bireysel Üyelik</Radio>
          <Radio style={{ fontSize: "20px" }} value="kurumsalÜyelik"> Kurumsal Üyelik </Radio>
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
          name="username"
          rules={[
            {
              required: true,
              message: "Lütfen, kullanıcı soyadını giriniz!",
            },
          ]}
        >
          <Input
            placeholder="Username"
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
                    new Error("Kullanım koşullarını kabuk ediniz!")
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
          Register
        </ButtonRegister>
      </FormItem>
    </Form>
  );
};

export default SignUp;

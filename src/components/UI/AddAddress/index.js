import React from "react";

import { Form, Input, Select } from "antd";
import { FormItem, ButtonRegister, FormTitle } from "./style";

const { Option } = Select;

const AddAddress = ({ event }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelectorPhone = (
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
        prefix: "+90",
      }}
      scrollToFirstError
    >
      <FormTitle>Yeni Adres Ekle</FormTitle>
      <Input.Group compact>
        <FormItem
          label="ADRES BAŞLIĞI"
          name="addressTitle"
          rules={[
            {
              required: true,
              message: "Lütfen, adres başlığını giriniz!",
            },
          ]}
          style={{
            width: "48%",
            paddingRight: "2%",
          }}
        >
          <Input placeholder="Yazınız" />
        </FormItem>

        <FormItem
          label="AD SOYAD"
          name="username"
          rules={[
            {
              required: true,
              message: "Lütfen, kullanıcı adı ve soyadını giriniz!",
            },
          ]}
          style={{
            width: "50%",
          }}
        >
          <Input placeholder="Yazınız" />
        </FormItem>
      </Input.Group>
      <Input.Group compact>
        <FormItem
          name="phone"
          label="GSM NUMARANIZ"
          rules={[
            {
              required: true,
              message: "Lütfen, telefon numarası giriniz!",
            },
          ]}
          style={{
            width: "48%",
            paddingRight: "2%",
          }}
        >
          <Input addonBefore={prefixSelectorPhone} />
        </FormItem>

        <FormItem
          label="ÜLKE"
          name="country"
          rules={[
            {
              required: true,
              message: "Lütfen ülke seçiniz!",
            },
          ]}
          style={{
            width: "50%",
          }}
        >
          <Select>
            <Select.Option value="Türkiye">Türkiye</Select.Option>
            <Select.Option value="Almanya">Almanya</Select.Option>
          </Select>
        </FormItem>
      </Input.Group>

      <Input.Group compact>
        <FormItem
          label="ŞEHİR"
          name="city"
          rules={[
            {
              required: true,
              message: "Lütfen şehir seçiniz!",
            },
          ]}
          style={{
            width: "48%",
            paddingRight: "2%",
          }}
        >
          <Select>
            <Select.Option value="İstabul">İstabul</Select.Option>
            <Select.Option value="Ankara">Ankara</Select.Option>
          </Select>
        </FormItem>

        <FormItem
          label="İlÇE"
          name="district"
          rules={[
            {
              required: true,
              message: "Lütfen ilçe seçiniz!",
            },
          ]}
          style={{
            width: "50%",
          }}
        >
          <Select>
            <Select.Option value="Beşiktaş">Beşiktaş</Select.Option>
            <Select.Option value="Kadıköy">Kadıköy</Select.Option>
          </Select>
        </FormItem>
      </Input.Group>
      <FormItem
        label="POSTA KODU"
        name="postalCode"
        rules={[
          {
            required: true,
            message: "Lütfen, posta kodunu giriniz!",
          },
        ]}
        style={{
          width: "50%",
        }}
      >
        <Input placeholder="Yazınız" />
      </FormItem>
      <FormItem
        label="AÇIKLAMA"
        name="explanation"
        rules={[
          {
            required: true,
            message: "Lütfen, bir açıklama giriniz!",
          },
        ]}
      >
        <Input.TextArea rows={4} />
      </FormItem>
      <FormItem style={{ marginTop: "4rem", marginBottom: "unset" }}>
        <ButtonRegister danger onClick={event}>
          Vazgeç
        </ButtonRegister>
        <ButtonRegister danger type="primary" htmlType="submit">
          Kaydet
        </ButtonRegister>
      </FormItem>
    </Form>
  );
};

export default AddAddress;

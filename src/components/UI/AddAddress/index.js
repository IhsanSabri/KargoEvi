import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Input, Select } from "antd";

import { UserService } from "../../../services";
import { modifiedData } from "../../../store/DeliveryDetail";

import { FormItem, ButtonRegister, FormTitle } from "./style";

const { Option } = Select;
const userService = new UserService();

const AddAddress = ({ closeModal }) => {
  const dispatch = useDispatch();
  const {
    userInfo: { userId },
    userAddress,
    updateAddress: {
      _id: updateAddressId,
      adressDesc,
      adressName,
      phone,
      country,
      city,
      district,
      postalCode,
      adress,
      phonePrefix,
    },
  } = useSelector(({ delivery }) => delivery);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const data = { ...values, _id: String(Math.floor(Math.random() * 100)) }; //TODO: id will be updated

    if (updateAddressId) {
      const modifiedAddresses = userAddress.map((address) =>
        address._id === updateAddressId
          ? { ...values, _id: address._id }
          : address
      );

      dispatch(modifiedData({ name: "userAddress", data: modifiedAddresses }));
      //TODO: request send for edit address
    } else {
      console.log("data", data);

      userService
        .addUserAddress({
          id: userId,
          adress: [data],
        })
        .then((res) => {
          console.log("res", res);
          if (res.success) {
            //TODO: address will be added to state
            console.log("success");
            dispatch(
              modifiedData({
                name: "userAddress",
                data: res.data.adress,
              })
            );
          }
        })
        .catch((err) => {
          console.log("err", err);
        });

      //TODO: request send for new address with excluding random id.
    }

    setTimeout(() => {
      closeModal();
    }, 500);
  };

  const prefixSelectorPhone = (
    <FormItem name="phonePrefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+90">+90</Option>
        <Option value="+1">+1</Option>
      </Select>
    </FormItem>
  );

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        phonePrefix: phonePrefix || "+90",
      }}
      scrollToFirstError
    >
      <FormTitle>Yeni Adres Ekle</FormTitle>
      <Input.Group compact>
        <FormItem
          label="ADRES BAŞLIĞI"
          name="adressDesc"
          initialValue={adressDesc}
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
          name="adressName"
          initialValue={adressName}
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
          label="GSM NUMARANIZ"
          name="phone"
          initialValue={phone}
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
          initialValue={country}
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
          initialValue={city}
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
          initialValue={district}
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
        initialValue={postalCode}
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
        name="adress"
        initialValue={adress}
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
        <ButtonRegister className="cancel" danger onClick={closeModal}>
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

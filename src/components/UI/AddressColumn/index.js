import React from "react";

import { useDispatch } from "react-redux";

import { PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Radio, Avatar } from "antd";

import {
  ColumnBox,
  ColumnBoxAddres,
  AdressSelectionTab,
  UpdateText,
  UserInfos,
  UserNameText,
} from "./style";
import { modifiedData } from "../../../store/DeliveryDetail";

const AddressColumn = ({ borderValue, openModal, address }) => {
  const {
    _id,
    adressName,
    adressDesc,
    phone,
    //PhonePrefix,
    adress,
    district,
    city,
    country,
    //postalCode,
  } = address;
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(modifiedData({ name: "updateAddress", data: address }));

    openModal();
  };

  return (
    <ColumnBox span={11}>
      <AdressSelectionTab>
        <Radio style={{ fontSize: "18px" }} value={_id}>
          {adressName}
        </Radio>
        <UpdateText onClick={handleUpdate}>Düzenle</UpdateText>
      </AdressSelectionTab>
      <ColumnBoxAddres
        style={{
          border:
            borderValue === _id ? "1px solid #50749c" : "1px solid #f0f0f0",
        }}
      >
        <UserInfos>
          <div className="userInfo">
            <div className="userName">
              <Avatar size="small" icon={<UserOutlined />} />
              <UserNameText>{adressDesc}</UserNameText>
            </div>
            <div className="userPhone">
              <PhoneOutlined />
              {/* {`${PhonePrefix} ${phone}`} */}
              {phone}
            </div>
          </div>
          <div className="userAddress">{`${adress} ${district}, ${city}, ${country}`}</div>
        </UserInfos>
      </ColumnBoxAddres>
    </ColumnBox>
  );
};

export default AddressColumn;

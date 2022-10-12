import React from "react";

import { PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Radio, Avatar } from "antd";
import {
  ColumnBox,
  ColumnBoxAddres,
  AdressSelectionTab,
  UpdateText,
  UserInfos,
} from "./style";

const AddressColumn = ({
  borderValue,
  address: {
    _id,
    addressTitle,
    userName,
    phoneNumber,
    PhonePrefix,
    addressDescription,
    district,
    city,
    country,
    postalCode,
  },
}) => {
  return (
    <ColumnBox span={11}>
      <AdressSelectionTab>
        <Radio style={{ fontSize: "18px" }} value={_id}>
          {addressTitle}
        </Radio>
        <UpdateText>Düzenle</UpdateText>
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
              {userName}
            </div>
            <div className="userPhone">
              <PhoneOutlined />
              {`${PhonePrefix} ${phoneNumber}`}
            </div>
          </div>
          <div className="userAddress">{`${addressDescription} ${postalCode} ${district}, ${city}, ${country}`}</div>
        </UserInfos>
      </ColumnBoxAddres>
    </ColumnBox>
  );
};

export default AddressColumn;

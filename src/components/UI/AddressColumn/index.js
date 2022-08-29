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

const AddressColumn = (props) => {
  const changeStyle = (e) => {
    const selectedElement =
      document.querySelectorAll(".addressColumn")[e.target.value - 1];

    console.log(selectedElement.className);
  };

  return (
    <ColumnBox span={11}>
      <AdressSelectionTab>
        <Radio
          style={{ fontSize: "18px" }}
          value={props.address.id}
          onChange={changeStyle}
        >
          {props.address.addressName}
        </Radio>
        <UpdateText>Düzenle</UpdateText>
      </AdressSelectionTab>
      <ColumnBoxAddres className="addressColumn">
        <UserInfos>
          <div className="userInfo">
            <div className="userName">
              <Avatar size="small" icon={<UserOutlined />} />
              {props.address.userName}
            </div>
            <div className="userPhone">
              <PhoneOutlined />
              {props.address.phoneNumber}
            </div>
          </div>
          <div className="userAddress">{props.address.address}</div>
        </UserInfos>
      </ColumnBoxAddres>
    </ColumnBox>
  );
};

export default AddressColumn;

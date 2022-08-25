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
    const selectedElement = document.querySelectorAll(".addressColumn")[(e.target.value -1)];
    
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
              <div>{props.address.userName}</div>
            </div>
            <div className="userPhone">
              <PhoneOutlined />
              <div>{props.address.phoneNumber}</div>
            </div>
          </div>
          <div className="userAddress">
            <div>{props.address.address}</div>
          </div>
        </UserInfos>
      </ColumnBoxAddres>
    </ColumnBox>
  );
};

export default AddressColumn;

import React from "react";

import { useDispatch, useSelector } from "react-redux";

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

const AddressColumn = ({ openModal, address }) => {
  const {
    _id,
    adressName,
    adressDesc,
    phone,
    //phonePrefix,
    adress,
    district,
    city,
    country,
    //postalCode,
  } = address;
  const { selectedAddress, userAddress } = useSelector(
    ({ delivery }) => delivery
  );
  const dispatch = useDispatch();

  const handleOnClick = (event) => {
    const selectedAddress = userAddress.filter(
      (address) => address._id === event.currentTarget.id
    );

    dispatch(modifiedData({ name: "selectedAddress", data: selectedAddress }));
  };

  const handleUpdate = () => {
    dispatch(modifiedData({ name: "updateAddress", data: address }));

    openModal();
  };

  return (
    <ColumnBox span={11} id={_id} onClick={handleOnClick}>
      <AdressSelectionTab>
        <Radio style={{ fontSize: "18px" }} value={_id}>
          {adressDesc}
        </Radio>
        <UpdateText onClick={handleUpdate}>Düzenle</UpdateText>
      </AdressSelectionTab>
      <ColumnBoxAddres
        style={{
          border:
            selectedAddress[0]?._id === _id
              ? "1px solid #50749c"
              : "1px solid #f0f0f0",
        }}
      >
        <UserInfos>
          <div className="userInfo">
            <div className="userName">
              <Avatar size="small" icon={<UserOutlined />} />
              <UserNameText>{adressName}</UserNameText>
            </div>
            <div className="userPhone">
              <PhoneOutlined />
              {/* {`${phonePrefix} ${phone}`} */}
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

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AntModal from "../AntModal";
import LoginTabs from "../LoginTabs";

import { AuthService } from "../../../services";

import logo from "../../../assests/logo.png";
import userAvatar from "../../../assests/userAvatar.svg";
import { Navbar, MenuMain, MainButton, ImageMain } from "./style";

import { ShoppingOutlined } from "@ant-design/icons";

import { useModal } from "../../../config/hooks/useModal";
import { modifiedData } from "../../../store/DeliveryDetail";
import { Box, Flex } from "rebass";

const items1 = [
  {
    path: "/index",
    name: "Hizmetlerimiz",
  },
  {
    path: "/first",
    name: "Blog Haberler",
  },
  {
    path: "second",
    name: "Bilgi Bankası",
  },
  {
    path: "/third",
    name: "Gönderi Takibi",
  },
  {
    path: "/fourth",
    name: "İletişim",
  },
].map((index, key) => ({
  key,
  label: (
    <Link className="nav-item" to={index.path}>
      {index.name}
    </Link>
  ),
}));

const authService = new AuthService();

const NavBar = () => {
  const dispatch = useDispatch();
  const {
    token,
    userInfo: { name },
  } = useSelector(({ delivery }) => delivery);
  const { isModalVisible, openModal, closeModal } = useModal();

  const handleAccount = () => {
    !token && openModal();
  };

  const handleLogout = () => {
    //authService.logout();
    // TODO: will be removed!
    token && dispatch(modifiedData({ name: "token", data: "" }));
  };

  return (
    <>
      <Navbar className="header">
        <Box>
          <Link to="/" style={{ alignSelf: "center", marginRight: "1rem" }}>
            <img src={logo} alt="brandImage" href="#Home.js" />
          </Link>
        </Box>
        <MenuMain theme="dark" mode="horizontal" items={items1}></MenuMain>
        <Flex>
          <MainButton onClick={handleAccount}>
            <ImageMain src={userAvatar}></ImageMain>
            {token ? name : "Üyelik"}
          </MainButton>
          <MainButton>
            <ShoppingOutlined />
            Sepetim
          </MainButton>
          {token && (
            <MainButton onClick={handleLogout}>
              <ImageMain src={userAvatar}></ImageMain>
              Çıkış
            </MainButton>
          )}
        </Flex>
      </Navbar>
      <AntModal visible={isModalVisible} onCancel={closeModal}>
        <LoginTabs nextPageLink={"/productInfo"} closeModal={closeModal} />
      </AntModal>
    </>
  );
};

export default NavBar;

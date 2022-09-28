import React from "react";
import { Link } from "react-router-dom";

import AntModal from "../AntModal";
import LoginTabs from "../LoginTabs";

import logo from "../../../assests/logo.png";
import userAvatar from "../../../assests/userAvatar.svg";
import { Navbar, MenuMain, MainButton, ImageMain } from "./style";

import { ShoppingOutlined } from "@ant-design/icons";

import { useModal } from "../../../config/hooks/useModal";

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

const NavBar = () => {
  const { isModalVisible, openModal, closeModal } = useModal();

  return (
    <>
      <Navbar className="header">
        <Link to="/" style={{ alignSelf: "center", marginRight: "1rem" }}>
          <img src={logo} alt="brandImage" href="#Home.js" />
        </Link>
        <MenuMain theme="dark" mode="horizontal" items={items1}></MenuMain>
        <MainButton onClick={openModal}>
          <ImageMain src={userAvatar}></ImageMain>
          Üyelik
        </MainButton>
        <MainButton>
          <ShoppingOutlined />
          Sepetim
        </MainButton>
      </Navbar>
      <AntModal visible={isModalVisible} onCancel={closeModal}>
        <LoginTabs nexPageLink={"/productInfo"} />
      </AntModal>
    </>
  );
};

export default NavBar;

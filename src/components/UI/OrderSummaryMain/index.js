import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Divider } from "antd";
import AntModal from "../AntModal";
import Footer from "../Footer";
import LoginTabs from "../LoginTabs";
import { Box, Flex, Image } from "rebass";

import { useModal } from "../../../config/hooks/useModal";

import {
  Content,
  MainBox,
  MainContent,
  MainTitle,
  Destination,
  FooterContainer,
} from "./style";
import { PlusOutlined } from "@ant-design/icons";
import paymentLogo from "../../../assests/paymentLogo.png";
import destination from "../../../assests/destination.svg";

const OrderSummaryMain = ({ nextPageLink }) => {
  const navigate = useNavigate();
  const { isModalVisible, openModal, closeModal } = useModal();
  const {
    deliveryPrice,
    deliveryDetail: {
      destination: direction,
      weight,
      length,
      width,
      height,
      city,
    },
    receiverInfo: { name, number, address },
    token,
  } = useSelector(({ delivery }) => delivery);

  const handleOrderComplete = () => {
    token ? navigate(nextPageLink) : openModal();
  };

  return (
    <>
      <MainBox justifyContent="center" width={"60%"} m="30px auto">
        <MainTitle>Sipariş Özeti</MainTitle>
        <MainContent>
          <Destination>
            <Flex width={"50%"} className="destinationBox">
              <label>Nereden</label>
              <label>{direction === "fromTr" ? "Türkiye" : city}</label>
            </Flex>
            <Box>
              <Image width={"45px"} src={destination}></Image>
            </Box>
            <Flex width={"50%"} className="destinationBox">
              <label>Nereye</label>
              <label>{direction === "toTr" ? city : "Türkiye"}</label>
            </Flex>
          </Destination>
          <Content>
            <Box>Adet</Box>
            <Box>2</Box>
          </Content>
          <Content>
            <Box>Paket İçeriği</Box>
            <Box>Paket</Box>
          </Content>
          <Content>
            <Box>Paket Ölçüleri</Box>
            <Box>
              {width} X {height} X {length}
            </Box>
          </Content>
          <Content>
            <Box>Toplam Ağırlık</Box>
            <Box>{weight}</Box>
          </Content>
          <Content>
            <Box>Alıcı Ad, Soyad</Box>
            <Box>{name}</Box>
          </Content>
          <Content>
            <Box>Alıcı Adres</Box>
            <Box>{address}</Box>
          </Content>
          <Content>
            <Box>Alıcı Telefon</Box>
            <Box>{number}</Box>
          </Content>
          <Divider />
          <Content>
            <Box>Toplam Tutar</Box>
            <Box>USD {deliveryPrice}</Box>
          </Content>
        </MainContent>
      </MainBox>
      <Flex
        justifyContent={"center"}
        style={{ paddingTop: "2.375rem", paddingBottom: "2rem" }}
      >
        <Image src={paymentLogo}></Image>
      </Flex>
      <Footer prevLink={"/personalInfo"}>
        <FooterContainer>
          <Button className="newOrderButton" danger>
            <PlusOutlined />
            Yeni Gönderi Ekle
          </Button>
          <Button
            className="completeOrderButton"
            type="submit"
            danger
            form="hook-form"
            onClick={handleOrderComplete}
          >
            Siparişi Tamamla
          </Button>
        </FooterContainer>
      </Footer>
      <AntModal visible={isModalVisible} onCancel={closeModal}>
        <LoginTabs nextPageLink={nextPageLink} closeModal={closeModal} />
      </AntModal>
    </>
  );
};

export default OrderSummaryMain;

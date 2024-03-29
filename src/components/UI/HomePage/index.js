import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { Flex, Box, Text, Image } from "rebass";
import DeliveryTabs from "../DeliveryTabs";

import { modifiedData } from "../../../store/DeliveryDetail";

import { RightOutlined } from "@ant-design/icons";

import {
  MainBackgroundImage,
  MainBottomTabs,
  BottomTabsCardFirst,
  ContactButton,
  BottomTabsCardOthers,
  BottomTabsCarOthersTitle,
} from "./style";

import firstImage from "../../../assests/cin.jpg";
import secondImage from "../../../assests/nasilcalisir.webp";
import backgroundImage from "../../../assests/background.png";

const Home = ({ nextPageLink }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/mockData/directions.json")
      .then(function (response) {
        dispatch(
          modifiedData({ name: "deliveryCountries", data: response?.data })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Flex
      id="mainPage"
      flexDirection={"column"}
      style={{ fontFamily: "Manrope", fontStyle: "normal" }}
    >
      <MainBackgroundImage
        src={backgroundImage}
        alt="MainPageImage"
      ></MainBackgroundImage>
      <DeliveryTabs nextPageLink={nextPageLink} />
      <MainBottomTabs p={5}>
        <Flex width={1 / 3} justifyContent={"center"}>
          <BottomTabsCardFirst>
            <Box>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontWeight: "500",
                  lineHeight: "49px",
                  fontSize: "36px",
                  opacity: "0.6",
                }}
              >
                Kurumsal müşterilerimize özel %15'e varan ekstra indirimler için
              </Text>
              <ContactButton type="button">İletişime Geçin</ContactButton>
            </Box>
          </BottomTabsCardFirst>
        </Flex>
        <Flex width={1 / 3} justifyContent={"center"}>
          <BottomTabsCardOthers>
            <Image
              src={firstImage}
              style={{ borderRadius: "8px" }}
              alt="firstImage"
              width={1 / 2}
              height={"interit"}
            />
            <BottomTabsCarOthersTitle>
              KargoEvi Nasıl Çalışır?
              <Flex alignItems={"center"}>
                <RightOutlined style={{ color: "#2E3946", fontSize: "24px" }} />
              </Flex>
            </BottomTabsCarOthersTitle>
          </BottomTabsCardOthers>
        </Flex>
        <Flex width={1 / 3} justifyContent={"center"}>
          <BottomTabsCardOthers>
            <Image
              src={secondImage}
              style={{ borderRadius: "8px" }}
              alt="firstImage"
              width={1 / 2}
              height={"interit"}
            />
            <BottomTabsCarOthersTitle>
              Çinden Ürün Nasıl Getirilir?
              <Flex alignItems={"center"}>
                <RightOutlined style={{ color: "#2E3946", fontSize: "24px" }} />
              </Flex>
            </BottomTabsCarOthersTitle>
          </BottomTabsCardOthers>
        </Flex>
      </MainBottomTabs>
    </Flex>
  );
};

export default Home;

import React, { useEffect, useState } from "react";

import { Divider, Checkbox, Radio, Row, Col } from "antd";
import { Box, Flex, Text } from "rebass";
import CardFrame from "../CardFrame";
import NewCardFrame from "../NewCardFrame";

import { WalletOutlined } from "@ant-design/icons";
import { WalletContainer } from "./style";

import visa from "../../../assests/visa.png";
import axios from "axios";

const WalletPayment = () => {
  const [borderedValue, setBorderedValue] = useState(0);
  const [savedCards, setSavedCards] = useState([]);

  const handleOnChange = (event) => {
    setBorderedValue(event.target.value);
  };

  useEffect(() => {
    axios
      .get("/mockData/savedCreditCards.json")
      .then(function (response) {
        console.log("response", response);

        setSavedCards(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <WalletContainer>
      <Box width={1}>
        <Flex width={1} style={{ marginTop: "20px" }}>
          <Box width={1}>
            <Box width={1}>
              <Checkbox onChange={(e) => console.log(e)}>
                <span style={{ fontSize: "18px", fontWeight: 500 }}>
                  349,10 TL
                </span>{" "}
                Cüzdan Bakiyemden Kullan
              </Checkbox>
            </Box>
            <Box width={1}>
              <Text
                width={1}
                color={"black"}
                fontSize={13}
                fontWeight={300}
                style={{ whiteSpace: "break-spaces", padding: "10px" }}
              >
                Kargo Evi Cüzdan ile sipariş tamamlamak için{" "}
                <span style={{ fontWeight: "bold" }}>'Ödeme Yap' </span>
                butonuna tıklayınız
              </Text>
            </Box>
          </Box>
          <Box width={1 / 2}>
            <Box
              width={1}
              sx={{
                height: "100px",
                border: "1px dashed #eaeff4",
                borderRadius: "10px",
                backgroundColor: "#fafbfd",
                color: "#225386",
              }}
            >
              <Flex
                sx={{
                  justifyContent: "center",
                  marginTop: "30px",
                  color: "black",
                }}
              >
                <WalletOutlined
                  style={{
                    fontSize: "40px",
                    marginRight: "3px",
                  }}
                />
                <Box>
                  <Text fontSize={"10px"} lineHeight={"2"}>
                    Güncel Cüzdan Bakiyesi
                  </Text>
                  <Text fontWeight={"bold"} lineHeight={"1"}>
                    1.240,50 TL
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Divider style={{ margin: "15px 0" }} />
      <Box width={1} mb={10}>
        <Box>
          <Text fontWeight={"bold"}>Kargo Evi. Cüzdanıma Yükle ve Kullan</Text>
        </Box>
        <Flex width={1}>
          <Box width={2 / 3}>
            <Flex width={1} mt={10}>
              <Radio.Group
                style={{ width: "100%" }}
                value={borderedValue}
                onChange={handleOnChange}
              >
                <Row gutter={[16, 16]}>
                  {savedCards.map((card) => (
                    <Col key={card.id} span={12}>
                      <CardFrame
                        value={card.id}
                        borderedValue={borderedValue}
                        setBorderedValue={(value) => setBorderedValue(value)}
                        cardInfo={card}
                        IconContainer={{
                          src: visa,
                          width: "57",
                          heigth: "30",
                        }}
                      />
                    </Col>
                  ))}
                </Row>
              </Radio.Group>
            </Flex>
          </Box>
          <Box width={1 / 3}>
            <NewCardFrame text={"Başka bir kartla ödeme yap"} />
          </Box>
        </Flex>
      </Box>
    </WalletContainer>
  );
};

export default WalletPayment;

import React from "react";

import { Divider, Checkbox, Radio } from "antd";
import { Box, Flex, Text } from "rebass";
import CardFrame from "../CardFrame";
import NewCardFrame from "../NewCardFrame";

import { WalletOutlined } from "@ant-design/icons";
import { WalletContainer } from "./style";

import visa from "../../../assests/visa.png";
import yapikredi from "../../../assests/yapikredi.png";

const WalletPayment = () => {
  return (
    <WalletContainer>
      <Box width={1}>
        <Flex width={1} style={{ marginTop: "20px" }}>
          <Box width={1}>
            <Box width={1}>
              <Checkbox
                style={{ width: "20px" }}
                onChange={(e) => console.log(e)}
              >
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
                style={{ whiteSpace: "break-spaces", padding: "0 10px" }}
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
              <Radio.Group style={{ width: "100%" }}>
                <Flex width={1}>
                  <Box width={1 / 2}>
                    <CardFrame
                      value={1}
                      IconContainer={{
                        src: visa,
                        width: "57",
                        heigth: "30",
                      }}
                      UserInfo={{
                        cardNumber: "5400 65** **** 5432",
                        name: "Ayşe Keskin",
                        expire: "10/24",
                      }}
                      BankName="QNB Finansbank"
                    />
                  </Box>
                  <Box width={1 / 2}>
                    <CardFrame
                      value={2}
                      IconContainer={{
                        src: yapikredi,
                        width: "77",
                        heigth: "30",
                      }}
                      UserInfo={{
                        cardNumber: "5400 65** **** 5432",
                        name: "Ayşe Keskin",
                        expire: "10/24",
                      }}
                      BankName="Yapı Kredi Bankası"
                    />
                  </Box>
                </Flex>
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

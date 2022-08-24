import React from "react";

import { Divider, Checkbox, Radio } from "antd";
import { Box, Flex, Text } from "rebass";
import CardFrame from "../CardFrame";
import NewCardFrame from "../NewCardFrame";

import { WalletOutlined } from "@ant-design/icons";

import visa from "../../../assests/visa.png";
import yapikredi from "../../../assests/yapikredi.png";

const WalletPayment = () => {
  return (
    <>
      <Box>
        <Flex style={{ marginTop: "20px" }}>
          <Box width={1}>
            <Box>
              <Checkbox onChange={(e) => console.log(e)}>
                349,10 TL Cüzdan Bakiyemden Kullan
              </Checkbox>
            </Box>
            <Box>
              <Text color={"black"}>
                Kargo Evi Cüzdan ile sipariş tamamlamak için 'ödeme yap'
                butonuna tıklayınız
              </Text>
            </Box>
          </Box>
          <Box width={1 / 2}>
            <Box
              sx={{
                height: "100px",
                width: "298px",
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
                  <Text fontSize={'10px'} lineHeight={'2'}>Güncel Cüzdan Bakiyesi</Text>
                  <Text fontWeight={'bold'} lineHeight={'1'}>1.240,50 TL</Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Divider />
      <Box>
          <Box>
              <Text fontWeight={'bold'}>Korgo Evi. Cüzdanıma yükle ve kullan</Text>
          </Box>
          <Flex >
          <Flex m={10}>
              <Radio.Group style={{display: 'flex'}}>
                <Box>
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
              </Radio.Group>
            </Flex>
            <NewCardFrame />
          </Flex>
      </Box>
    </>
  );
};

export default WalletPayment;

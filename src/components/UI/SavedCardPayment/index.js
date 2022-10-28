import React, { useState } from "react";

import { Flex, Box } from "rebass";
import { Radio, Checkbox } from "antd";
import { SafetyCertificateOutlined, PlusOutlined } from "@ant-design/icons";

import CardFrame from "../CardFrame";
import NewCardFrame from "../NewCardFrame";

import visa from "../../../assests/visa.png";
import yapikredi from "../../../assests/yapikredi.png";

const SavedCardPayment = () => {
  const [borderedValue, setBorderedValue] = useState(0);

  const handleOnChange = (event) => {
    setBorderedValue(event.target.value);
  };

  return (
    <Flex width={1}>
      <Box width={2 / 3}>
        <Flex width={1} mt={10}>
          <Radio.Group
            style={{ width: "100%" }}
            onChange={handleOnChange}
            value={borderedValue}
          >
            <Flex width={1}>
              <Box width={1 / 2}>
                <CardFrame
                  value={1}
                  borderedValue={borderedValue}
                  setBorderedValue={(value) => setBorderedValue(value)}
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
                <Checkbox
                  style={{ marginTop: "30px" }}
                  onChange={(e) => console.log(e)}
                >
                  <SafetyCertificateOutlined
                    style={{
                      fontSize: "21px",
                      marginRight: "3px",
                    }}
                  />
                  3D secure ile Ödemek İstiyorum
                </Checkbox>
              </Box>
              <Box width={1 / 2}>
                <CardFrame
                  value={2}
                  borderedValue={borderedValue}
                  setBorderedValue={(value) => setBorderedValue(value)}
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
      {/*
                <Box width={1 / 3}>
                <NewCardFrame
                  icon={
                    <PlusOutlined
                      style={{
                        position: "relative",
                        margin: "1px",
                      }}
                    />
                  }
                  text={"Yeni Kart Ekle"}
                />
              </Box>*/}
    </Flex>
  );
};

export default SavedCardPayment;

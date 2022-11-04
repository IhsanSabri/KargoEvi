import React, { useEffect, useState } from "react";

import { Flex, Box } from "rebass";
import { Radio, Checkbox, Col, Row } from "antd";
import { SafetyCertificateOutlined, PlusOutlined } from "@ant-design/icons";

import CardFrame from "../CardFrame";
import NewCardFrame from "../NewCardFrame";

import visa from "../../../assests/visa.png";
import axios from "axios";

const SavedCardPayment = () => {
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
    <Flex width={1}>
      <Box width={2 / 3}>
        <Flex width={1} mt={10}>
          <Radio.Group
            style={{ width: "100%" }}
            onChange={handleOnChange}
            value={borderedValue}
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
              <Col span={24}>
                <Checkbox onChange={(e) => console.log(e)}>
                  <SafetyCertificateOutlined
                    style={{
                      fontSize: "21px",
                      marginRight: "3px",
                    }}
                  />
                  3D secure ile Ödemek İstiyorum
                </Checkbox>
              </Col>
            </Row>
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

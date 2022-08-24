import React from "react";
import Cards from "react-credit-cards";

import { Tabs, Checkbox, Radio } from "antd";
import { Box, Flex } from "rebass/styled-components";
import CardFrame from "../CardFrame";
import NewCardFrame from "../NewCardFrame";

import "react-credit-cards/es/styles-compiled.css";
import { CardContainer } from "./style";
import { SafetyCertificateOutlined } from "@ant-design/icons";

import visa from "../../../assests/visa.png";
import yapikredi from "../../../assests/yapikredi.png";

const { TabPane } = Tabs;
export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <CardContainer id="PaymentForm">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Yeni Kart" key="1">
            <Flex>
              <Box px={10}>
                <form>
                  <label>Kart Numarası</label>
                  <input
                    type="tel"
                    name="number"
                    placeholder="**** **** **** ****"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                  <label>Kart Üzerindeki İsim</label>
                  <input
                    type="tel"
                    name="name"
                    placeholder="Kart sahibinin Adı ve Soyadı"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                  <Flex>
                    <Box sx={{ display: "grid", paddingRight: "5px" }}>
                      <label>Son Kullana Tarihi</label>
                      <input
                        className="expire"
                        type="tel"
                        name="expiry"
                        placeholder="Ay/yıl"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </Box>
                    <Box sx={{ display: "grid" }}>
                      <label>Güvenlik Kodu</label>
                      <input
                        type="tel"
                        name="cvc"
                        placeholder="CVC/CVV"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </Box>
                  </Flex>
                </form>
                <Checkbox onChange={(e) => console.log(e)}>
                  Kart Bilgilerimi Sonraki Siparişler için sakla
                </Checkbox>
              </Box>
              <Cards
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focused={this.state.focus}
                name={this.state.name}
                number={this.state.number}
              />
            </Flex>
          </TabPane>
          <TabPane tab="Kayıtlı Kartlar" key="2">
            <Flex m={10}>
              <Radio.Group>
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
                  <Checkbox
                    style={{ marginTop: "10px" }}
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
          </TabPane>
        </Tabs>
      </CardContainer>
    );
  }
}

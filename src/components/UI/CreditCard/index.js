import React from "react";
import Cards from "react-credit-cards";

import { Tabs, Checkbox, Card, Radio } from "antd";
import { Box, Flex, Image, Text } from "rebass/styled-components";

import "react-credit-cards/es/styles-compiled.css";
import { CardContainer } from "./style";

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
                <Radio value={1}>QNB</Radio>
                <Card
                  style={{
                    width: 300,
                    borderRadius: "10px",
                    marginRight: "10px",
                  }}
                >
                  <Image
                    src={visa}
                    width="57"
                    height="30"
                    sx={{ float: "right" }}
                  />
                  <Box p={20}>
                    <Text>5400 65** **** 5432</Text>
                    <Text>Ayşe Keskin</Text>
                    <Text>10/24</Text>
                  </Box>
                </Card>

                <Radio value={2}>Yapı Kredi</Radio>
                <Card
                  style={{
                    width: 300,
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src={yapikredi}
                    width="77"
                    height="30"
                    sx={{ float: "right" }}
                  />
                  <Box p={20}>
                    <Text>5400 65** **** 5432</Text>
                    <Text>Ayşe Keskin</Text>
                    <Text>10/24</Text>
                  </Box>
                </Card>
              </Radio.Group>
            </Flex>
          </TabPane>
        </Tabs>
      </CardContainer>
    );
  }
}

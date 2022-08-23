import React from "react";
import Cards from "react-credit-cards";

import { Tabs, Checkbox, Card } from "antd";
import { Box, Flex, Image, Text } from "rebass/styled-components";

import "react-credit-cards/es/styles-compiled.css";
import { CardContainer } from "./style";

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
              <Box>
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
                    <Box sx={{display: 'grid'}}>
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
                    <Box sx={{display: 'grid'}}>
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
            <Flex>
              <Card
                style={{
                  width: 300,
                  borderRadius: "10px",
                }}
              >
                <Image src="" width="18" height="24" />
                <Text>5400 65** **** 5432</Text>
                <Text>Ayşe Keskin</Text>
                <Text>10/24</Text>
              </Card>
              <Card
                style={{
                  width: 300,
                  borderRadius: "10px",
                }}
              >
                <Image src="" width="18" height="24" />
                <Text>5400 65** **** 5432</Text>
                <Text>Ayşe Keskin</Text>
                <Text>10/24</Text>
              </Card>
            </Flex>
          </TabPane>
        </Tabs>
      </CardContainer>
    );
  }
}

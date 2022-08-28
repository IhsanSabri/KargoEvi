import React from "react";
import Cards from "react-credit-cards";

import { Tabs, Checkbox, Radio } from "antd";
import { Box, Flex } from "rebass/styled-components";
import CardFrame from "../CardFrame";
import NewCardFrame from "../NewCardFrame";

import "react-credit-cards/es/styles-compiled.css";
import { CardContainer } from "./style";
import { SafetyCertificateOutlined, PlusOutlined } from "@ant-design/icons";

import visa from "../../../assests/visa.png";
import yapikredi from "../../../assests/yapikredi.png";

const { TabPane } = Tabs;
export default class CreditCard extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    borderedValue: 0,
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleOnChange = (event) => {
    this.setState({ borderedValue: event.target.value });
  };

  render() {
    return (
      <CardContainer id="PaymentForm">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Yeni Kart" key="1">
            <Flex width={1}>
              <Box width={1 / 2} px={10}>
                <form>
                  <label>kart numarası</label>
                  <input
                    type="tel"
                    name="number"
                    placeholder="**** **** **** ****"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                  <label>kart üzerindeki isim</label>
                  <input
                    type="tel"
                    name="name"
                    placeholder="Kart sahibinin Adı ve Soyadı"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                  <Flex width={1}>
                    <Box
                      width={1 / 2}
                      sx={{ display: "grid", paddingRight: "5px" }}
                    >
                      <label>son kullana tarihi</label>
                      <input
                        className="expire"
                        type="tel"
                        name="expiry"
                        placeholder="Ay/yıl"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </Box>
                    <Box width={1 / 2} sx={{ display: "grid" }}>
                      <label>güvenlik kodu</label>
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
              <Box width={1 / 2} mt={20}>
                <Cards
                  cvc={this.state.cvc}
                  expiry={this.state.expiry}
                  focused={this.state.focus}
                  name={this.state.name}
                  number={this.state.number}
                />
              </Box>
            </Flex>
          </TabPane>
          <TabPane tab="Kayıtlı Kartlar" key="2">
            <Flex width={1}>
              <Box width={2 / 3}>
                <Flex width={1} mt={10}>
                  <Radio.Group
                    style={{ width: "100%" }}
                    onChange={this.handleOnChange}
                    value={this.state.borderedValue}
                  >
                    <Flex width={1}>
                      <Box width={1 / 2}>
                        <CardFrame
                          value={1}
                          borderedValue={this.state.borderedValue}
                          setBorderedValue={(value) =>
                            this.setState({ borderedValue: value })
                          }
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
                          borderedValue={this.state.borderedValue}
                          setBorderedValue={(value) =>
                            this.setState({ borderedValue: value })
                          }
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
                <NewCardFrame
                  icon={
                    <PlusOutlined
                      style={{
                        position: "relative",
                        margin: "4px",
                      }}
                    />
                  }
                  text={"Yeni Kart Ekle"}
                />
              </Box>
            </Flex>
          </TabPane>
        </Tabs>
      </CardContainer>
    );
  }
}

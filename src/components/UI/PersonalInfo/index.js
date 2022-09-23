import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Flex, Box, Text } from "rebass";

import OrderSummary from "../OrderSummary";
import ExcelImporting from "../ExcelImporting";
import Footer from "../Footer";
import Steps from "../Steps";

import { modifiedData } from "../../../store/DeliveryDetail";

import { Button, Collapse } from "antd";
import {
  FooterContainer,
  PersonalInfoContainer,
  ContainerTitle,
  ContainerInfo,
  PhoneSelect,
  InputCheckBox,
  CheckBoxLabel,
  CollapseMain,
} from "./style";
import { LabelText, InputText, SelectOption } from "../../../styles/styles";

const { Panel } = Collapse;

const PersonalInfo = ({ nextPageLink }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  const handleRegistration = (data) => {
    console.log(data);

    dispatch(modifiedData({ name: "receiverInfo", data }));

    navigate(nextPageLink);
  };
  const isCheckboxChecked = (event) => {
    setIsChecked(event.target.checked);
  };

  const stepsInfo = [
    {
      id: 1,
      text: "1- Gönderi Bilgileri",
      isChecked: true,
      isActive: false,
      isNextStepExist: false,
    },
    {
      id: 2,
      text: "2- Ürün İçerik Bilgileri",
      isChecked: true,
      isActive: false,
      isNextStepExist: false,
    },
    {
      id: 3,
      text: "3- Alıcı Bilgileri",
      isChecked: false,
      isActive: true,
      isNextStepExist: false,
    },
  ];

  const fileTemplate = {
    title: (
      <Text
        p={1}
        style={{
          whiteSpace: "break-spaces",
          lineHeight: "1.5",
        }}
      >
        ETGB'li gönderinin yapılabilmesi için 'Resmi Satış Faturası'nın gönderi
        talebine eklenmesi gereklidir. Lütfen daha sonra resmi satış faturasını
        ve diğer gönderi evrakları ile birlikte kuryeye teslim ediniz.
      </Text>
    ),
    isDownloadTemplate: false,
  };

  return (
    <>
      <Flex justifyContent={"center"}>
        {stepsInfo.map((step) => {
          return <Steps key={step.id} steps={step} />;
        })}
      </Flex>
      <Flex justifyContent="center" width={"60%"} m="30px auto">
        <PersonalInfoContainer>
          <ContainerTitle>
            <h1>Alıcı Bilgileri</h1>
          </ContainerTitle>
          <ContainerInfo>
            <form id="hook-form" onSubmit={handleSubmit(handleRegistration)}>
              <Flex>
                <Box width={1 / 3} textAlign={"left"} marginRight={"10px"}>
                  <LabelText style={{ color: "#000000" }}>
                    ALICI ADI, SOYADI
                  </LabelText>
                  <InputText required {...register("name")} type="text" />
                </Box>
                <Box width={1 / 3} textAlign={"left"} marginRight={"10px"}>
                  <LabelText style={{ color: "#000000" }}>
                    ALICI TELEFON NUMARASI
                  </LabelText>
                  <Flex>
                    <PhoneSelect>
                      <option value="">+90</option>
                      <option value="">+10</option>
                    </PhoneSelect>
                    <InputText
                      required
                      {...register("number")}
                      type="text"
                      style={{
                        borderBottomLeftRadius: "0",
                        borderTopLeftRadius: "0",
                      }}
                    />
                  </Flex>
                </Box>
                <Box width={1 / 3} textAlign={"left"} marginRight={"10px"}>
                  <LabelText style={{ color: "#000000" }}>
                    ALICI E-POSTA ADRESİ
                  </LabelText>
                  <InputText required {...register("email")} type="text" />
                </Box>
              </Flex>
              <Flex paddingTop={"30px"}>
                <Box width={1 / 3} textAlign={"left"} marginRight={"10px"}>
                  <LabelText style={{ color: "#000000" }}>ALICI ÜLKE</LabelText>
                  <SelectOption required {...register("country")}>
                    <option value="" defaultValue="">
                      Seçiniz
                    </option>
                    <option value="Germany">Almanya</option>
                    <option value="Netherland">Hollanda</option>
                  </SelectOption>
                </Box>
                <Box width={1 / 3} textAlign={"left"} marginRight={"10px"}>
                  <LabelText style={{ color: "#000000" }}>
                    ALICI ŞEHİR
                  </LabelText>
                  <SelectOption required {...register("city")}>
                    <option value="" defaultValue="">
                      Seçiniz
                    </option>
                    <option value="Istanbul">İstanbul</option>
                  </SelectOption>
                </Box>
                <Box width={1 / 3} textAlign={"left"} marginRight={"10px"}>
                  <LabelText style={{ color: "#000000" }}>ALICI İLÇE</LabelText>
                  <SelectOption required {...register("region")}>
                    <option value="" defaultValue="">
                      Seçiniz
                    </option>
                    <option value="Bakirkoy">Bakırköy</option>
                  </SelectOption>
                </Box>
              </Flex>
              <Flex paddingTop={"30px"}>
                <Box width={1 / 3} textAlign={"left"} marginRight={"10px"}>
                  <LabelText style={{ color: "#000000" }}>POSTA KODU</LabelText>
                  <InputText required {...register("code")} type="text" />
                </Box>
                <Box width={2 / 3} textAlign={"left"} marginRight={"10px"}>
                  <LabelText style={{ color: "#000000" }}>
                    ALICI AÇIK ADRES
                  </LabelText>
                  <InputText required {...register("address")} type="text" />
                </Box>
              </Flex>
              <Flex paddingTop={"50px"} paddingLeft={"12px"}>
                <Box style={{ paddingLeft: "1.5em" }}>
                  <InputCheckBox
                    id="etgbcheckbox"
                    {...register("sendWithEtgb")}
                    onChange={isCheckboxChecked}
                  />
                  <CheckBoxLabel>&nbsp; ETGB ile Gönder</CheckBoxLabel>
                  <CollapseMain
                    activeKey={isChecked ? ["1"] : ["0"]}
                    ghost={true}
                  >
                    <Panel key="1" showArrow={false}>
                      <ExcelImporting template={fileTemplate} />
                    </Panel>
                  </CollapseMain>
                </Box>
              </Flex>
            </form>
          </ContainerInfo>
        </PersonalInfoContainer>
      </Flex>
      <OrderSummary />
      <Footer prevLink={"/"}>
        <FooterContainer>
          <button
            as={Button}
            className="submitAndContinueButton"
            type="submit"
            form="hook-form"
          >
            Devam Et
          </button>
        </FooterContainer>
      </Footer>
    </>
  );
};

export default PersonalInfo;

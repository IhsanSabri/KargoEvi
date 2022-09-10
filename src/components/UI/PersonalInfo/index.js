import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Flex, Box } from "rebass";

import OrderSummary from "../OrderSummary";
import Footer from "../Footer";
import Steps from "../Steps";

import { Button } from "antd";
import {
  FooterContainer,
  PersonalInfoContainer,
  ContainerTitle,
  ContainerInfo,
  PhoneSelect,
} from "./style";
import { LabelText, InputText, SelectOption } from "../../../styles/styles";

const PersonalInfo = ({ nextPageLink }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    console.log(data);
    navigate(nextPageLink);
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
                <div className="col-lg-12">
                  <div className="form-check text-left">
                    <input
                      className="form-check-input shadow-none w-[25px] h-[25px] border-[1px] text-[#373c47] rounded-[2px]"
                      type="checkbox"
                      id="etgbcheckbox"
                    />
                    <label
                      className="form-check-label text-[23px] text-[#373c47]"
                      htmlFor="formCheck-1"
                    >
                      &nbsp; ETGB ile Gönder
                    </label>
                  </div>
                </div>
              </Flex>
              <div className="row pl-[12px] py-[25px]" id="etgbpanel">
                <div className="col-lg-12">
                  <p className="mb-0 text-[#373c47]">
                    ETGB'li gönderinin yapılabilmesi için 'Resmi Satış
                    Faturası'nın gönderi talebine eklenmesi gereklidir. Lütfen
                    daha sonra resmi satış faturasını ve diğer gönderi evrakları
                    ile birlikte kuryeye teslim ediniz.
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-5 pt-[25px]">
                  <button
                    className="btn btn-outline-danger btn-lg active shadow-none border-dashed	bg-white text-[rgb(220,53,69)] text-[19px] py-[35px] px-[120px] mb-[20px]"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-cloud-upload w-[20px] h-[20px]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                      ></path>
                    </svg>
                    &nbsp; Yükle
                  </button>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="row d-xl-flex align-items-xl-center m-0 relative top-2/4 translate-y-[-50%]">
                    <div className="col-lg-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-file-earmark d-none d-sm-none d-lg-block w-[40px] h-[40px] text-[#adb5bd] mb-[12px]"
                      >
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"></path>
                      </svg>
                    </div>
                    <div className="col-md-10 col-lg-8 pl-0 mb-[11px]">
                      <label className="form-label text-[14px] mb-0 pb-[5px]">
                        borusan-elektronik-fatura.pdf
                      </label>
                      <div className="progress w-full height-[5px]">
                        <div
                          className="progress-bar w-6/12"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="visually-hidden">50%</span>
                        </div>
                      </div>
                      <label className="form-label text-[10px] text-[#495057]">
                        %65
                      </label>
                    </div>
                    <div className="col-md-2 col-lg-1 pl-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-trash text-[23px] mb-[12px]"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
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

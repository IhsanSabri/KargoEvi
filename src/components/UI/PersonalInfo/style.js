import styled from "@emotion/styled";
import { Box, Flex } from "rebass";
import { Collapse } from "antd";

const PersonalInfoContainer = styled(Box)`
  background: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 8px;
  width: 100%;
  font-family: "Manrope";
  font-style: normal;
`;

const ContainerTitle = styled(Box)`
  padding-top: 30px;
  padding-bottom: 20px;
  background: white;
  border-bottom: 0;

  h1 {
    padding: 0.5rem 1rem;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    color: #262b37;
  }
`;

const ContainerInfo = styled(Box)`
  padding: 1rem 1rem;
`;

const PhoneSelect = styled.select`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #262b37;
  background: #ffffff;
  border: 1px solid rgba(38, 43, 55, 0.24);
  border-radius: 4px;
  margin-top: 6px;
  padding: 5px;
`;

const FooterContainer = styled(Flex)`
  .submitAndContinueButton {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    width: 14rem;
    height: 64px;
    font-size: 24px;

    &:hover {
      color: #fff;
      background-color: #bb2d3b;
      border-color: #b02a37;
    }
  }
`;

const InputCheckBox = styled.input`
  color: #373c47;
  float: left;
  margin-left: -1.5em;
  margin-top: 0.25em;
  width: 20px;
  height: 20px;
`;

const CheckBoxLabel = styled.label`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #262b37;
  margin-top: 0.25em;
`;

const CollapseMain = styled(Collapse)`
  background: #f9fbfd;

  .ant-collapse-header {
    display: none !important;
  }
`;

export {
  FooterContainer,
  PersonalInfoContainer,
  ContainerTitle,
  ContainerInfo,
  PhoneSelect,
  InputCheckBox,
  CheckBoxLabel,
  CollapseMain,
};

import styled from "@emotion/styled";
import { Col, Checkbox } from "antd";
import { Flex, Box } from "rebass";

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

const ColumnBox = styled(Col)`
  margin-left: 20px;
  height: 150px;
  background: white;
  border-radius: 4px;
  display: flex;
  padding-bottom: 5px;
  align-items: end;
`;

const ColumnBoxAddres = styled(Col)`
  background: #f9fbfd;
  height: 104px;
  border: 1px dashed #e7e7e7;
  border-radius: 4px;
  width: 100%;
  display: flex;
  color: #225386;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BoxMain = styled(Box)`
  font-family: "Manrope";
  font-style: normal;
  text-align: left;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  padding-left: 25px;
  padding-right: 25px;
`;

const TitleAddress = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: space-between;
`;

const PaymentImage = styled.div`
  height: 32px;
  max-width: 100%;
  text-align: -webkit-center;
  margin-bottom: 2rem;
`;

const AdressSelectionTab = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const UpdateText = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #2f6fb1;
`;

const CheckboxMain = styled(Checkbox)`
  align-items: center;

  .ant-checkbox-inner {
    width: 24px;
    height: 24px;
  }
  .ant-checkbox + span {
    padding-right: 45px;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
  }
  .ant-checkbox-inner:after {
    top: 43%;
    width: 7.714286px;
    height: 14.142857px;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background: #225386;
  }
`;

export {
  FooterContainer,
  ColumnBox,
  BoxMain,
  TitleAddress,
  CheckboxMain,
  ColumnBoxAddres,
  AdressSelectionTab,
  UpdateText,
  PaymentImage,
};

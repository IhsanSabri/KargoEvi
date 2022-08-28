import styled from "@emotion/styled";

import { Col } from "antd";
import { Flex } from "rebass";

const StepsMain = styled(Flex)`
  padding-top: 1rem;

  .selected {
    color: black;
    background: #ced9e5;
    font-weight: 500;
    display: inline-flex;
    padding: 1rem 1.5rem 1rem 1.5rem;
    margin-left: -5px;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    font-size: 0.75em;
  }
`;

const MainCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepBadge = styled.span`
  color: #129068;
  background: #e3eaf1;
  font-weight: 500;
  display: inline-flex;
  padding: 1rem 1.5rem 1rem 1.5rem;
  font-size: 0.75em;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  margin-left: -20px;
`;

const Triangle = styled.div`
  width: 20px;
  height: 20px;
  border-top: 10px solid transparent;
  border-left: 10px solid #ced9e5;
  z-index: 2;
  border-bottom: 10px solid transparent;
`;

export { StepsMain, StepBadge, MainCol, Triangle };

import React from "react";

import { StepsMain, StepBadge, MainCol, Triangle } from "./style";
import { CheckOutlined } from "@ant-design/icons";

const Steps = ({ steps }) => {
  return (
    <StepsMain>
      <MainCol flex={4}>
        <StepBadge className={steps.isActive && "selected"}>
          {steps.isChecked && <CheckOutlined />}
          &nbsp; {steps.text}
        </StepBadge>
        {steps.isActive && <Triangle />}
      </MainCol>
    </StepsMain>
  );
};

export default Steps;

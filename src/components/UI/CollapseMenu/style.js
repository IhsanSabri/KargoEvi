import styled from "@emotion/styled";
import { Flex } from "rebass";

const CollepseContainer = styled(Flex)`
  .ant-collapse {
    background-color: #eff2f5;
    border: none !important;

    .ant-collapse-header {
    background-color: #f6f7f8;
    border: 1px solid lightgray !important;
    border-radius: 10px !important;
  }

  .ant-collapse-item {
    margin-bottom: 20px !important;
    border: none !important;
  }

  .ant-collapse-content {
    border-bottom-left-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
    border-top: none !important;
  }

  .ant-collapse-item-active > .ant-collapse-header {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .ant-collapse > .ant-collapse-item:last-child {
    border-radius: unset !important;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 16px 40px;
  }
  }
`;

const Title = styled.span`
  font-size: 19px;
  font-weight: 400;
`;

export { CollepseContainer, Title };

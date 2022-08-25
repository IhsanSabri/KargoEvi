import styled from "@emotion/styled";

const TransferContainer = styled.div`
  .ant-radio-group-outline {
    width: 100%;
  }

  .ant-collapse-item {
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 10px 0;
    padding: 0 0 15px 0;
  }

  .bank_icon {
    position: relative;
    top: 12px;
  }

  .ant-collapse-header-text {
    position: relative;
    top: 18px;
  }

  .soft_text {
    color: lightgray;
    font-size: 12px;
  }

  .IBAN_Soft {
    font-size: 13px;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 20px 120px 0px !important;
  }
`;

export { TransferContainer };

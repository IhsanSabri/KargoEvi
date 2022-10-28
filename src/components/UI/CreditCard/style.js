import styled from "@emotion/styled";

const CardContainer = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  .rccs {
    width: 100%;
    max-width: 290px;
  }

  .rccs__card {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 12px;
      color: gray;
      text-transform: uppercase;
    }

    input {
      margin: 3px 0 15px;
      height: 50px;
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 10px;
      width: 100%;
    }
  }

  .ant-card {
    width: 100% !important;
    box-shadow: -1px 1px 5px 4px #eeeeee;
    min-width: 175px;
  }

  .ant-radio-group-outline {
    display: flex;
  }

  .ant-tabs-tabpane {
    display: flex;
  }

  .ant-tabs-tab {
    font-size: 19px;
    color: lightgray;
    font-weight: 300;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: black;
  }

  .ant-checkbox {
    position: relative;
    top: 9px;
  }
`;

export { CardContainer };

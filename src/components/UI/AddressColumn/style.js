import styled from "@emotion/styled";
import { Col } from "antd";

const ColumnBox = styled(Col)`
  margin-left: 20px;
  min-height: 150px;
  background: white;
  border-radius: 4px;
`;

const ColumnBoxAddres = styled(Col)`
  display: flex;
  min-height: 104px;
  background: white;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
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
  cursor: pointer;
`;

const UserInfos = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;

  .userInfo {
    align-items: center;
    display: flex;
    padding: 15px;
    font-family: "Manrope";
    font-style: normal;

    .userName {
      display: flex;
      font-size: 15px;
      font-weight: 600;

      span {
        background: white;
        border: 1px solid black;

        span {
          color: black;
          border: unset;
        }
      }

      div {
        padding-left: 5.5px;
      }
    }

    .userPhone {
      padding-left: 2rem;
      display: flex;
      font-size: 15px;
      font-weight: 600;

      div {
        padding-left: 5.5px;
      }

      span {
        font-size: 25px;
        transform: scaleX(-1);
      }
    }
  }

  .userAddress {
    padding-right: 20px;
    padding-left: 15px;
    text-align: left;
    font-weight: 400;
    font-size: 12px;
    min-height: 40px;
}
  }
`;

export {
  ColumnBox,
  ColumnBoxAddres,
  AdressSelectionTab,
  UpdateText,
  UserInfos,
};

import styled from "@emotion/styled";

const CardContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;

    input {
      margin: 10px 0;
      height: 50px;

      &.expire {
      margin-right: 5px;
    }
    }
  }
`;

export { CardContainer };

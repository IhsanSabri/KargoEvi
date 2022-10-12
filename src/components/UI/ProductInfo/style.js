import styled from "@emotion/styled";
import { Button } from "antd";

const Download = styled.a`
  color: #1a926b;
`;

const AddProduct = styled(Button)`
  width: 150px;
  height: 50px;

  &:hover {
    background: #D5353B;
    color: white;
    border-color: white;
  }
`;

export { Download, AddProduct };

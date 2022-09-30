import React from "react";

import { FooterMain, BackButton } from "./style";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Footer = ({ children, ...rest }) => {
  return (
    <FooterMain alignItems="center" justifyContent={"space-evenly"}>
      <BackButton to={rest.prevLink}>
        <ArrowLeftOutlined />
        &nbsp; Geri
      </BackButton>
      {children}
    </FooterMain>
  );
};

export default Footer;

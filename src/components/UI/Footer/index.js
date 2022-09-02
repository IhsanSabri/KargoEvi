import React from "react";
import { Link } from "react-router-dom";

import { FooterMain } from "./style";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Footer = ({ children, ...rest }) => {
  return (
    <FooterMain alignItems="center" justifyContent={"space-evenly"}>
      <Link
        className="text-[#225386] text-[24px] flex no-underline items-center"
        to={rest.prevLink}
      >
        <ArrowLeftOutlined />
        &nbsp; Geri
      </Link>
      {children}
    </FooterMain>
  );
};

export default Footer;

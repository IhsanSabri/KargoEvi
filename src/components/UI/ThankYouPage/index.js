import React from "react";

import { Layout } from "antd";
import { Box } from "rebass";

import { MainTitle } from "./style";

const ThankYou = () => {
  return (
    <>
      <Layout style={{ padding: "50px 50px 0", alignItems: "center" }}>
        <MainTitle><b>Tebrikler!</b> Siparişiniz Oluşturuldu.</MainTitle>
        <Box
          width={2 / 3}
          style={{
            minHeight: "280px",
            padding: "24px",
            background: "#fff",
          }}
        >
          <div className="site-layout-content">Content</div>
        </Box>
      </Layout>
    </>
  );
};

export default ThankYou;

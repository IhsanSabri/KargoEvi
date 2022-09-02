import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "rebass";

import Header from "../Header";

const DefaultLayout = () => {
  return (
    <Box height="100vh" bg="#f0f2f5">
      <Header />
      <Box p={"120px 0 120px"} bg="#f0f2f5">
        <Outlet />
      </Box>
    </Box>
  );
};

export default DefaultLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "rebass";

import Header from "../Header";

const DefaultLayout = () => {
  return (
    <Box height="100vh">
      <Header />
      <Outlet />
    </Box>
  );
};

export default DefaultLayout;

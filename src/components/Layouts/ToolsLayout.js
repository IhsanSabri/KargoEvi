import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "rebass";

import NavBar from "../UI/NavBar";
import Header from "../UI/Header";

const ToolsLayout = () => {
  return (
    <Box height="100vh" bg="#f0f2f5">
      <Header />
      <NavBar />
      <Box p={"50px 70px 120px 0"} bg="#f0f2f5">
        <Outlet />
      </Box>
    </Box>
  );
};

export default ToolsLayout;

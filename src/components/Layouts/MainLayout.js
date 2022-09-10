import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "rebass";

import Header from "../UI/Header";
import NavBar from "../UI/NavBar";

const MainLayout = () => {
  return (
    <Box height="100vh" bg="#f0f2f5">
      <Header />
      <NavBar />
      <Box bg="#f0f2f5">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
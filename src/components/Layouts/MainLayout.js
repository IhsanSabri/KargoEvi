import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "rebass";

const MainLayout = () => {
  return (
    <Box bg="#f0f2f5">
      <Outlet />
    </Box>
  );
};

export default MainLayout;

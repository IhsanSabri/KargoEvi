import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "rebass";

const DefaultLayout = () => {
  return (
    <Box p={"93px 70px 120px 0"} bg="#f0f2f5">
      <Outlet />
    </Box>
  );
};

export default DefaultLayout;

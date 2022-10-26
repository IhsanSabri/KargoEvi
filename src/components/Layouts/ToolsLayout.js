import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "rebass";

const ToolsLayout = () => {
  return (
    <Box p={"50px 70px 120px 0"} bg="#f0f2f5">
      <Outlet />
    </Box>
  );
};

export default ToolsLayout;

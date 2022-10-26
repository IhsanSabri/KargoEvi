import React from "react";

import { Box } from "rebass";

import AppRouter from "./routes/index";

import "./App.css";
import "antd/dist/antd.min.css";

function App() {
  return (
    <Box height="100vh" bg="#f0f2f5">
      <AppRouter />
    </Box>
  );
}

export default App;

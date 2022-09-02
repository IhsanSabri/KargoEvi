import { Spin } from "antd";
import { React, Suspense } from "react";
import { Box, Flex } from "rebass";

const FallbackSpin = () => (
  <Box height="100vh">
    <Flex
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Spin size="large" />
    </Flex>
  </Box>
);

const CustomSuspense = ({ fallback, children }) => {
  return (
    <Suspense fallback={fallback || <FallbackSpin />}>{children}</Suspense>
  );
};

export default CustomSuspense;

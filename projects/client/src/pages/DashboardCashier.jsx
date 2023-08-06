import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import Sidebar from "../components/DashboardCashier/Sidebar";

const DashboardCashier = () => {
  return (
    <Box
    bgImage={
      "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
    bgPosition="center"
    // bgRepeat="no-repeat"
    h="100%"
    overflow="scroll"
    >
    <Flex color="white" flex={"2"} bgColor={"rgba(0,0,0, 0.6)"} w={"full"} h={"full"}>
      <Box m={'3'} overflow="scroll">
        <Sidebar /> {/* Import Siderbar component*/}
      </Box>
    </Flex>
  </Box>
  );
};

export default DashboardCashier;

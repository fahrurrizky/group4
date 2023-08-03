import React, { useState } from "react";
import { Flex, Box, Button, VStack } from "@chakra-ui/react";
import LOGO from "../../assets/MajesticMixer.png";
import { FaSignOutAlt, FaHome, FaCreativeCommonsBy, FaShoppingCart, FaSkullCrossbones } from "react-icons/fa";
import Dashboard from "../../views/Dashboard/Dashboard";
import Profil from "../../views/Dashboard/Profile";
import Tables from "../../views/Dashboard/Tables";
import Calender from "../DashboardAdmin/Calender";
import Navbar from "../DashboardAdmin/Navbar";
import Product from "../Admin/ProductManagement/ProductList";



const Sidebar = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "profile":
        return <Profil />;
      case "product":
        return <Product />;
      case "cashier":
        return <Tables />;
      default:
        return null;
    }
  };

  return (
    <Flex
      borderRadius={"3xl"}
      h="100%"
        // bgImage={"https://images.unsplash.com/photo-1582819509237-d5b75f20ff7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"}
      >
        
      <VStack 
        bgColor={"rgba(0,0,0, 0.5)"}
        borderRadius={"3xl"}
        p={4}
        h="100%"
        w="20%"
        minW={'17%'}
        maxW={'17%'}
        // border={'1px'} borderColor={'white'}
      >

        <Box w="100%" h="100%" justifyContent="center">
        <center><img src={LOGO} alt="Logo" width={'200px'}/></center>
        <Button fontSize={'small'} onClick={() => setActivePage("dashboard")} mt={'10'} justifyContent="left" variant={'outline'} textColor="white" w="100%" _hover={{bgColor:"white", color:"black"}}><FaHome/>&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</Button>
        <Button fontSize={'small'} onClick={() => setActivePage("cashier")} mt={'5'} justifyContent="left" variant={'outline'} textColor="white" w="100%" _hover={{bgColor:"white", color:"black"}}><FaCreativeCommonsBy/>&nbsp;&nbsp;&nbsp;&nbsp;Cashier Management</Button>
        <Button fontSize={'small'} onClick={() => setActivePage("product")} mt={'5'} justifyContent="left" variant={'outline'} textColor="white" w="100%" _hover={{bgColor:"white", color:"black"}}><FaShoppingCart/>&nbsp;&nbsp;&nbsp;&nbsp;Product Management</Button>
        <Button fontSize={'small'} onClick={() => setActivePage("profile")}mt={'5'} justifyContent="left" variant={'outline'} textColor="white" w="100%" _hover={{bgColor:"white", color:"black"}}><FaSkullCrossbones/>&nbsp;&nbsp;&nbsp;&nbsp;Profile</Button>
        <Calender/>
        </Box>
        <Button fontSize={'small'} onClick={() => setActivePage("home")} m={'1'} justifyContent="left" variant={'outline'} textColor="white" w="100%" _hover={{bgColor:"white", color:"black"}}><FaSignOutAlt/>&nbsp;&nbsp;&nbsp;&nbsp;Help & Information</Button>
        <Button fontSize={'small'} onClick={() => setActivePage("home")} m={'1'} justifyContent="left" variant={'outline'} textColor="white" w="100%" _hover={{bgColor:"white", color:"black"}}><FaSignOutAlt/>&nbsp;&nbsp;&nbsp;&nbsp;Sign Out</Button>
      </VStack>
        
      <Box mx={'4'} >
      <Navbar/>
        {renderPage()}
      </Box>
    </Flex>
  );
};

export default Sidebar;



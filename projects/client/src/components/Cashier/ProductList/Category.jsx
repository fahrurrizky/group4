import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Select,
  Box,
  Spacer,
  useDisclosure,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { AiOutlineClear } from "react-icons/ai";

import Cart from "../Transaction/Cart";

const Category = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchCartItems();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/product/categories"
      );
      setCategories(response.data.result);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchCartItems = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found in local storage");
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        "http://localhost:8000/transaction/list",
        config
      );
      setCartItems(response.data.cartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handlePayment = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in local storage");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8000/transaction/make",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCartItems([]);
      fetchCartItems();
      // Show success toast
      toast({
        title: "Payment Successful",
        description: "Thank you for your payment!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      
      // Close the cart menu
      onClose();
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };

  return (
    <Box mb={"10"}>
      <Box
        ml={"5"}
        mb={"3"}
        mt={"5"}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Menu isOpen={isOpen}>
          <Select placeholder="Sort by product" w={"md"}>
            <option value="option1">A-Z</option>
            <option value="option2">Z-A</option>
          </Select>
          <Spacer />
          <Select placeholder="Sort by price" w={"md"}>
            <option value="option1">Ascending</option>
            <option value="option2">Descending</option>
          </Select>
          <MenuButton
            as={Button}
            onClick={onOpen}
            mr={"2"}
            rightIcon={<MdShoppingCartCheckout size={"35"} />}
            variant={"ghost"}
            textColor="white"
            _hover={{ bgColor: "white", color: "black" }}
            // onMouseLeave={onClose}
            // onMouseEnter={onOpen}
          >
            <Flex
              borderRadius="full"
              justify="center"
              align="center"
              bg="rgba(0,0,0, 0.8)"
              style={{
                color: "cyan",
                width: "20px",
                height: "20px",
                position: "absolute",
                top: 0,
                right: 0,
                transform: "translate(15%, 0%)",
              }}
            >
              {cartItems.length}
            </Flex>
          </MenuButton>
          <MenuList
            zIndex={900000}
            width={"400px"}
            bgColor={"rgba(0,0,0, 0.8)"}
            fontFamily={"monospace"}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            maxHeight="600px"
            overflow="scroll"
          >
            <Text fontSize={"20px"} textAlign={"center"}>
              <u>
                Order Cart, <br /> Ready for payment{" "}
              </u>
            </Text>
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
            {/* Import Cart component*/}
            <Flex p={"5"} gap={"3"}>
              <Button
                size={"sm"}
                rightIcon={<AiOutlineClear size={"20"} />}
                variant={"outline"}
                textColor="white"
                w="100%"
                _hover={{ bgColor: "red", color: "white" }}
              >
                Clear Cart
              </Button>
              <Spacer />
              <Button
                onClick={handlePayment}
                size={"sm"}
                rightIcon={<FiDollarSign size={"20"} />}
                variant={"outline"}
                textColor="white"
                w="100%"
                _hover={{ bgColor: "cyan", color: "black" }}
              >
                Payment
              </Button>
            </Flex>
          </MenuList>
        </Menu>
      </Box>

      <Grid
        gap={"5"}
        fontFamily={"monospace"}
        px={"5"}
        pt={"2"}
        templateColumns="repeat(5, 1fr)"
      >
        {categories.map((item) => (
          <Button
            key={item.name}
            variant={"outline"}
            size={"sm"}
            textColor="white"
            w="100%"
            _hover={{ bgColor: "white", color: "black" }}
            textTransform={"uppercase"}
          >
            {item.name}
          </Button>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;

import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const products = [
    {
      id: 1,
      name: "Jack Daniel's",
      image:
        "https://images.unsplash.com/photo-1654929748677-f9d0dd6ff0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      price: 10,
    },
    {
      id: 2,
      name: "Guinness",
      image:
        "https://images.unsplash.com/photo-1654929748677-f9d0dd6ff0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      price: 20,
    },
    {
      id: 3,
      name: "Smirnoff",
      image:
        "https://images.unsplash.com/photo-1654929748677-f9d0dd6ff0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      price: 30,
    },
    {
      id: 4,
      name: "Bacardi",
      image:
        "https://images.unsplash.com/photo-1654929748677-f9d0dd6ff0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      price: 25,
    },
  ];

  const totalCartValue = products.reduce((total, product) => total + product.price, 0);
  const [moneyReceived, setMoneyReceived] = useState(""); // Add state for money received
  const refundAmount = moneyReceived ? parseFloat(moneyReceived) - totalCartValue : 0; // Calculate refund based on input value

  return (
    <Box direction="column" justifyContent="center" mt={"8"}>
      <Box>
        {products.map((product) => (
          <Box key={product.id} mt={"2"}>
            <Flex gap={"5"} mx={"3"}>
              <Box>
                <Image src={product.image} objectFit="contain" width="50px" />
              </Box>
              <Box fontSize={"18px"}>
                <Text>{product.name}</Text>
                <Text>${product.price}</Text>
              </Box>
              <Spacer />
              <Box fontSize={"18px"}>
                <Text>Qty</Text>
                <Text> 5 </Text>
              </Box>
              <Box mt={"3"}>
                <Button _hover={{ bgColor: "red", color: "white" }}>
                  <BsTrash />
                </Button>
              </Box>
            </Flex>
            <Divider mx={"5"} w={"90%"} />
          </Box>
        ))}
      </Box>
      <Flex m={"5"}>
        <Text fontSize={"18px"}>Order Summary:</Text>
        <Spacer />
        <Text fontSize={"18px"}>${totalCartValue}</Text>
      </Flex>
      <Divider mx={"5"} w={"90%"} />
      {/* Value for Money Customer */}
      <Flex m={"5"}>
        <Text fontSize={"18px"}>Money Received:</Text>
        <Spacer />
        <Input textAlign={'right'} type="text" textColor={'cyan'} placeholder="Money" w={'140px'} size={'md'}
        value={moneyReceived} // Bind the value to the state
        onChange={(e) => setMoneyReceived(e.target.value)} // Update the state on input change
        />
      </Flex>
      <Divider mx={"5"} w={"90%"} />
      {/* Refund Money for Customer */}
      <Flex m={"5"}>
        <Text fontSize={"18px"}>Refund for Customer:</Text>
        <Spacer />
        <Text fontSize={"18px"}>${refundAmount.toFixed(2)}</Text> {/* Display refund amount */}
      </Flex>
      <Divider mx={"5"} w={"90%"} />
    </Box>
  );
};

export default Cart;

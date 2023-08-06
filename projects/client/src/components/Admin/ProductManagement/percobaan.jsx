<Box>
      <CategoryList/>
      <Flex w="100%" gap={"9"} wrap={"wrap"} ml={'10'} mb={'10'} >
      {product.map((obj, index) => (
        <Box
          key={index}
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={bgColor}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${obj.image})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              borderRadius={"3xl"}
              height={230}
              width={282}
              objectFit={"contain"}
              src={obj.image}
              alt="#"
            />
          </Box>
          <Stack pt={5} align={"center"}>
            <Text
              color={"black"}
              fontSize={"md"}
              textTransform={"uppercase"}
              fontFamily={"monospace"}
            >
              {obj.categoryName}
            </Text>
            <Heading
              color={"black"}
              fontFamily={"cursive"}
              fontSize={"2xl"}
              fontWeight={500}
              m={"-2"}
            >
              {obj.productName}
            </Heading>
            <Stack color={"black"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
              {obj.price}
              </Text>
              <Text
                fontSize={"xs"}
                fontFamily={"body"}
                color={"black"}
                textAlign={"center"}
              >
                {obj.description}
              </Text>
            </Stack>
          </Stack>
          <Flex>
            <Button variant={"link"}>
              <Switch colorScheme={"facebook"} />
            </Button>
            <Spacer />
            <Button variant={"link"}>
              <MdEditDocument color="black" size={"20"} onClick={onEditProductOpen} />
              <EditProduct isOpen={isEditProductOpen} onClose={onEditProductClose} />
            </Button>
          </Flex>
          {product.length - 1 !== index }
        </Box>
      ))}
      </Flex>
      <Pagination />
      <Link>
        <Button
          position={"fixed"}
          zIndex={60000}
          bottom={5}
          right={5}
          p={6}
          justifyContent={"center"}
          alignItems={"center"}
          rounded={"full"}
          bgColor={"rgba(255,255,255, 0.7)"}
        >
          <BiAddToQueue size={"30px"} onClick={onCreateProductOpen} />
        </Button>
        <CreateProduct isOpen={isCreateProductOpen} onClose={onCreateProductClose} />
      </Link>
    </Box>



import React, { useState } from "react";
import { Box, Button, Divider, Flex, Icon, Image, Spacer, Table, Text } from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";


const Cart = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Jack Daniel's",
      image:"https://images.unsplash.com/photo-1654929748677-f9d0dd6ff0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      price: 10,
    },
    { 
      id: 2, 
      name: "Guinness", 
      image:"https://images.unsplash.com/photo-1654929748677-f9d0dd6ff0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      price: 20 },
    { 
      id: 3, 
      name: "Smirnoff", 
      image:"https://images.unsplash.com/photo-1654929748677-f9d0dd6ff0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      price: 30 },
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  return (
    <Box direction="column" justifyContent="center" mt={'8'}>
      <Box>
        {products.map((product) => (
          <Box key={product.id} mt={'5'}>
            <Flex gap={'5'} m={'5'}>
              <Box>
                <Image src={product.image} objectFit="contain" width="50px" />
              </Box>
              <Box fontSize={'18px'}>
                <Text>{product.name}</Text>
                <Text>${product.price}</Text>
              </Box>
              <Spacer/>
              <Box fontSize={'18px'}>
                <Text>Qty</Text>
                <Text> 5 </Text>
              </Box>
              <Box mt={'3'}>
                <Button _hover={{ bgColor: "red", color: "white" }}>
                  <BsTrash/>
                </Button>
              </Box>
            </Flex>
            <Divider mx={'5'} w={'90%'}/>
            {/* <Button
              width={"20px"}
              size={"sm"}
              onClick={() => addToCart(product)}
              // leftIcon={<Icon as={AddIcon} />}
              variant={"outline"}
              textColor="white"
              w="100%"
              _hover={{ bgColor: "white", color: "black" }}
            ></Button>
            <Button
              size={"sm"}
              onClick={() => removeFromCart(product)}
              // leftIcon={<Icon as={MinusIcon} />}
              variant={"outline"}
              textColor="white"
              w="100%"
              _hover={{ bgColor: "white", color: "black" }}
            ></Button> */}
          </Box>
        ))}
      </Box>
      <Flex m={'5'}>
        <Text fontSize={'18px'}>Order Summary:</Text>
        {/* <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul> */}
          <Spacer/>
        <Text fontSize={'18px'}>Total Cart</Text>
      </Flex>
      <Divider mx={'5'} w={'90%'}/>

    </Box>
  );
};

export default Cart;

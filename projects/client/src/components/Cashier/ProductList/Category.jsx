import React from "react";
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
  Flex,
} from "@chakra-ui/react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { AiOutlineClear } from "react-icons/ai";
import Cart from "../Transaction/Cart";

const category = [
  {
    categoryName: "Whiskey",
  },
  {
    categoryName: "Wine",
  },
  {
    categoryName: "Vodka",
  },
  {
    categoryName: "Rum",
  },
  {
    categoryName: "Beer",
  },
];

const Category = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            mr={'2'}
            rightIcon={<MdShoppingCartCheckout size={"35"} />}
            variant={"ghost"}
            textColor="white"
            _hover={{ bgColor: "white", color: "black" }}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            <Flex
              borderRadius="full"
              justify="center"
              align="center"
              bg="rgba(0,0,0, 0.8)"
              style={{
                color: "white",
                width: "20px",
                height: "20px",
                position: "absolute",
                top: 0,
                right: 0,
                transform: "translate(15%, 0%)",
              }}
            >
              { Cart.length }
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
            <Cart /> {/* Import Cart component*/}
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
        {category.map((item) => (
          <Button
            key={item.categoryName}
            variant={"outline"}
            size={"sm"}
            textColor="white"
            w="100%"
            _hover={{ bgColor: "white", color: "black" }}
            textTransform={"uppercase"}
          >
            {item.categoryName}
          </Button>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;

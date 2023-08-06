"use client";
import { useDisclosure } from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";
import { MdEditDocument } from "react-icons/md";
import {
  Box,
  Link,
  Flex,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Spacer,
  Switch,
} from "@chakra-ui/react";
import CategoryList from "./CategoryList";
import Pagination from "./PaginationProduct";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";

const product = [
  {
    image: "https://images.unsplash.com/photo-1654929748677-f9d0dd6ff0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    categoryName: "Whiskey",
    productName: "Jack Daniel's",
    price: '58',
    description: "Jack Daniel's is made from a unique process of charcoal mellowing, where the whiskey is filtered through charcoal before aging, giving it its characteristic flavor profile"
  },
  {
    image: "https://images.unsplash.com/photo-1671116808598-689abda6369f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    categoryName: "Whiskey",
    productName: "Jack Daniel's",
    price: '58',
    description: "Jack Daniel's is made from a unique process of charcoal mellowing, where the whiskey is filtered through charcoal before aging, giving it its characteristic flavor profile"
  },
  {
    image: "https://images.unsplash.com/photo-1599419685838-28e405ea05b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    categoryName: "Whiskey",
    productName: "Jack Daniel's",
    price: '58',
    description: "Jack Daniel's is made from a unique process of charcoal mellowing, where the whiskey is filtered through charcoal before aging, giving it its characteristic flavor profile"
  },
  {
    image: "https://images.unsplash.com/photo-1621428674699-90ec7bae03c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    categoryName: "Whiskey",
    productName: "Jack Daniel's",
    price: '58',
    description: "Jack Daniel's is made from a unique process of charcoal mellowing, where the whiskey is filtered through charcoal before aging, giving it its characteristic flavor profile"
  },
  {
    image: "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    categoryName: "Whiskey",
    productName: "Jack Daniel's",
    price: '58',
    description: "Jack Daniel's is made from a unique process of charcoal mellowing, where the whiskey is filtered through charcoal before aging, giving it its characteristic flavor profile"
  },
  {
    image: "https://images.unsplash.com/photo-1584526663341-2274881c5d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    categoryName: "Whiskey",
    productName: "Jack Daniel's",
    price: '58',
    description: "Jack Daniel's is made from a unique process of charcoal mellowing, where the whiskey is filtered through charcoal before aging, giving it its characteristic flavor profile"
  },
  {
    image: "https://images.unsplash.com/photo-1614313489567-aec5db706669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    categoryName: "Whiskey",
    productName: "Jack Daniel's",
    price: '58',
    description: "Jack Daniel's is made from a unique process of charcoal mellowing, where the whiskey is filtered through charcoal before aging, giving it its characteristic flavor profile"
  },
  {
    image: "https://images.unsplash.com/photo-1558150052-fddeedcf27d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    categoryName: "Whiskey",
    productName: "Jack Daniel's",
    price: '58',
    description: "Jack Daniel's is made from a unique process of charcoal mellowing, where the whiskey is filtered through charcoal before aging, giving it its characteristic flavor profile"
  },
];
  

export default function Product() {
  const bgColor = useColorModeValue("rgb(255,255,255, 0.9)", "gray.800");
  const { isOpen: isCreateProductOpen, onOpen: onCreateProductOpen, onClose: onCreateProductClose } = useDisclosure();
  const { isOpen: isEditProductOpen, onOpen: onEditProductOpen, onClose: onEditProductClose } = useDisclosure();
  
  return (
    <Box>
      <CategoryList/>
      <Flex w="100%" gap={6} wrap="wrap" ml={4} mb={4}>
        {product.map((obj, index) => (
          <Box
            key={index}
            align={'center'}
            role="group"
            p={4}
            maxW="260px" // Adjusted width
            w="full"
            bg={bgColor}
            boxShadow="md" // Adjusted shadow
            rounded="lg"
            pos="relative"
            zIndex={1}
            mb={'3'}
          >
            <Box
              rounded="lg"
              mt={-8}
              pos="relative"
              height="120px" // Adjusted height
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 2,
                left: 0,
                backgroundImage: `url(${obj.image})`,
                filter: "blur(10px)", // Adjusted blur
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(15px)", // Adjusted hover blur
                },
              }}
            >
              <Image
                borderRadius="xl"
                height={130} // Adjusted height
                width={190} // Adjusted width
                objectFit='contain' // Changed to "cover"
                src={obj.image}
                alt="#"
              />
            </Box>
            <Stack pt={2} align="center">
              <Text
                color="black"
                fontSize="sm" // Adjusted font size
                textTransform="uppercase"
                fontFamily="monospace"
              >
                {obj.categoryName}
              </Text>
              <Heading
                color="black"
                fontFamily="cursive"
                fontSize="lg" // Adjusted font size
                fontWeight={500}
                m={0} // Removed negative margin
              >
                {obj.productName}
              </Heading>
              <Stack color="black" align="center">
                <Text fontWeight={600} fontSize="md"> {/* Adjusted font weight and size */}
                  ${obj.price}
                </Text>
                <Text
                  fontSize="xs"
                  fontFamily="body"
                  color="black"
                  textAlign="center"
                >
                  {obj.description}
                </Text>
              </Stack>
            </Stack>
            <Flex>
              <Button variant="link">
                <Switch colorScheme="facebook" />
              </Button>
              <Spacer />
              <Button variant="link">
                <MdEditDocument color="black" size={20} onClick={onEditProductOpen} /> {/* Adjusted size */}
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

  );
}

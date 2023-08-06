"use client";
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

const IMAGE =
  "https://images.unsplash.com/photo-1654929748677-f9d0dd6ff0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80";

export default function Product() {
  return (
    <Box>
      <CategoryList />
      <Flex py={12} w="100%" gap={"9"} wrap={"wrap"} ml={"10"}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("rgb(255,255,255, 0.9)", "gray.800")}
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
              backgroundImage: `url(${IMAGE})`,
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
              src={IMAGE}
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
              Whiskey
            </Text>
            <Heading
              color={"black"}
              fontFamily={"cursive"}
              fontSize={"2xl"}
              fontWeight={500}
            >
              Jack Daniel's
            </Heading>
            <Stack color={"black"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                $58
              </Text>
              <Text fontSize={"xs"} fontFamily={'body'} color={'black'} textAlign={'center'}>
                Jack Daniel's is made from a unique process of charcoal
                mellowing, where the whiskey is filtered through charcoal before
                aging, giving it its characteristic flavor profile.
              </Text>
            </Stack>
          </Stack>
          {/* <Flex>
          <Button variant={'link'} >
            <Switch colorScheme={'facebook'}/>
          </Button>
         <Spacer/>  
         <Button variant={'link'} >
         <MdEditDocument color="black" size={'20'}/>
          </Button>
        </Flex> */}
        </Box>

        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("rgb(255,255,255, 0.9)", "gray.800")}
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
              backgroundImage: `https://images.unsplash.com/photo-1671116808598-689abda6369f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)`,
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
              src={
                "https://images.unsplash.com/photo-1671116808598-689abda6369f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              }
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
              Whiskey
            </Text>
            <Heading
              color={"black"}
              fontFamily={"cursive"}
              fontSize={"2xl"}
              fontWeight={500}
            >
              Jack Daniel's
            </Heading>
            <Stack color={"black"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                $58
              </Text>
              <Text fontSize={"xs"} fontFamily={'body'} color={'black'} textAlign={'center'}>
                Jack Daniel's is made from a unique process of charcoal
                mellowing, where the whiskey is filtered through charcoal before
                aging, giving it its characteristic flavor profile.
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("rgb(255,255,255, 0.9)", "gray.800")}
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
              backgroundImage: `https://images.unsplash.com/photo-1599419685838-28e405ea05b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80`,
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
              src={
                "https://images.unsplash.com/photo-1599419685838-28e405ea05b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              }
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
              Whiskey
            </Text>
            <Heading
              color={"black"}
              fontFamily={"cursive"}
              fontSize={"2xl"}
              fontWeight={500}
            >
              Jack Daniel's
            </Heading>
            <Stack color={"black"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                $58
              </Text>
              <Text fontSize={"xs"} fontFamily={'body'} color={'black'} textAlign={'center'}>
                Jack Daniel's is made from a unique process of charcoal
                mellowing, where the whiskey is filtered through charcoal before
                aging, giving it its characteristic flavor profile.
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("rgb(255,255,255, 0.9)", "gray.800")}
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
              backgroundImage: `https://images.unsplash.com/photo-1621428674699-90ec7bae03c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80`,
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
              src={
                "https://images.unsplash.com/photo-1621428674699-90ec7bae03c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
              }
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
              Whiskey
            </Text>
            <Heading
              color={"black"}
              fontFamily={"cursive"}
              fontSize={"2xl"}
              fontWeight={500}
            >
              Jack Daniel's
            </Heading>
            <Stack color={"black"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                $58
              </Text>
              <Text fontSize={"xs"} fontFamily={'body'} color={'black'} textAlign={'center'}>
                Jack Daniel's is made from a unique process of charcoal
                mellowing, where the whiskey is filtered through charcoal before
                aging, giving it its characteristic flavor profile.
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("rgb(255,255,255, 0.9)", "gray.800")}
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
              backgroundImage: `https://images.unsplash.com/photo-1613254025943-82399193fbfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80`,
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
              src={
                "https://images.unsplash.com/photo-1613254025943-82399193fbfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80"
              }
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
              Whiskey
            </Text>
            <Heading
              color={"black"}
              fontFamily={"cursive"}
              fontSize={"2xl"}
              fontWeight={500}
            >
              Jack Daniel's
            </Heading>
            <Stack color={"black"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                $58
              </Text>
              <Text fontSize={"xs"} fontFamily={'body'} color={'black'} textAlign={'center'}>
                Jack Daniel's is made from a unique process of charcoal
                mellowing, where the whiskey is filtered through charcoal before
                aging, giving it its characteristic flavor profile.
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("rgb(255,255,255, 0.9)", "gray.800")}
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
              backgroundImage: `https://images.unsplash.com/photo-1584526663341-2274881c5d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80`,
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
              src={
                "https://images.unsplash.com/photo-1584526663341-2274881c5d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
              }
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
              Whiskey
            </Text>
            <Heading
              color={"black"}
              fontFamily={"cursive"}
              fontSize={"2xl"}
              fontWeight={500}
            >
              Jack Daniel's
            </Heading>
            <Stack color={"black"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                $58
              </Text>
              <Text fontSize={"xs"} fontFamily={'body'} color={'black'} textAlign={'center'}>
                Jack Daniel's is made from a unique process of charcoal
                mellowing, where the whiskey is filtered through charcoal before
                aging, giving it its characteristic flavor profile.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Flex>
      <Pagination />
      {/* <Link>
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
          <BiAddToQueue size={"35px"} />
        </Button>
      </Link> */}
    </Box>
  );
}

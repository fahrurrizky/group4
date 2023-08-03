"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import CurrentDate from "../DashboardAdmin/DateClock";

export default function Navbar() {
  return (
    <>
      <Box
        bg={useColorModeValue("rgba(0,0,0, 0.5)")}
        px={4}
        borderRadius={"3xl"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <Text fontSize={"sm"} ml={"3"}>
                <Box fontWeight={"bold"} fontSize={"md"}>
                  Andre Widyatmoko
                </Box>{" "}
                Your Admin
              </Text>
              <MenuList zIndex={900000} bgColor={"rgba(0,0,0, 0.5)"}>
                <MenuItem bgColor={"rgba(0,0,0, 0.5)"}>Link 1</MenuItem>
                <MenuItem bgColor={"rgba(0,0,0, 0.5)"}>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem bgColor={"rgba(0,0,0, 0.5)"}>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <InputGroup borderRadius={"full"} size="sm">
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search2Icon color="gray.600" />}
                />
                <Input
                  type="text"
                  placeholder="Search..."
                  border="1px solid white"
                  rounded={"full"}
                />
                <InputRightAddon p={0} borderRightRadius={"full"}>
                  <Button size="sm" rounded={"full"} variant={"outline"}>
                    Search
                  </Button>
                </InputRightAddon>
              </InputGroup>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <CurrentDate />
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}

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
        w='100%'
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
                    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
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

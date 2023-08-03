import { useState } from "react";
import { ImEnter, ImExit } from "react-icons/im";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  Flex,
  Text,
  ButtonGroup,
  IconButton,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Avatar,
  Button,
  Icon,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

function EditProduct({ isOpen, onClose }) {
    const [value, setValue] = useState("Rasengan ⚡️");

  const handleSave = () => {
    // Put your logic here to save the edited value
    // For this example, we will just set the value directly
    onClose(); // Close the modal after saving
  };

  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  // const iconColor = useColorModeValue("blue.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        size={"4xl"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bgColor={"rgba(0,0,0, 0.8)"} textColor="white">
          <ModalHeader>Edit Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex
              // direction={{ sm: "column", md: "row" }}
              mb="24px"
              maxH="330px"
              justifyContent={{ sm: "center", md: "space-between" }}
              align="center"
              backdropFilter="blur(21px)"
              boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
              border="1.5px solid"
              borderColor={borderProfileColor}
              bg={bgProfile}
              borderRadius="20px"
              mt={"5"}
            >
              <Flex
                align="center"
                mb={{ sm: "10px", md: "0px" }}
                direction={{ sm: "column", md: "row" }}
                w={{ sm: "100%" }}
                textAlign={{ sm: "center", md: "start" }}
              >
                <Image
                  me={{ md: "22px" }}
                  src={"https://images.unsplash.com/photo-1613254025943-82399193fbfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80"}
                  w="80px"
                  h="80px"
                  borderRadius="15px"
                />
                <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
                <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                fontSize="xl"
                minW={'250'}
                size={'sm'}
                mr={'5'}
              />
               <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                fontSize="xl"
                minW={'250'}
                size={'sm'}
                mr={'5'}
              />
               <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                fontSize="xl"
                minW={'250'}
                size={'sm'}
                mr={'5'}
              />
               <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                fontSize="xl"
                minW={'250'}
                size={'sm'}
                mr={'5'}
              />
                <ButtonGroup>
              <IconButton
                icon={<ImEnter />}
                onClick={handleSave}
                variant={"outline"}
                size={"sm"}
                textColor="white"
                w="100%"
                _hover={{ bgColor: "green", color: "white" }}
              />
              <IconButton
                icon={<ImExit />}
                onClick={onClose}
                variant={"outline"}
                size={"sm"}
                textColor="white"
                w="100%"
                _hover={{ bgColor: "blue", color: "white" }}
              />
              <IconButton
                icon={<RiDeleteBin5Fill />}
                onClick={onClose}
                variant={"outline"}
                size={"sm"}
                textColor="white"
                w="100%"
                _hover={{ bgColor: "red", color: "white" }}
              />
              </ButtonGroup>
                </Flex>
              </Flex>
              <Flex
                direction={{ sm: "column", lg: "row" }}
                w={{ sm: "100%", md: "50%", lg: "auto" }}
              >
                {/* <Button p="0px" bg="transparent" variant="no-effects">
                  <Flex
                    align="center"
                    w={{ sm: "100%", lg: "135px" }}
                    bg={colorMode === "dark" ? "navy.900" : "#fff"}
                    borderRadius="8px"
                    justifyContent="center"
                    py="10px"
                    boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.06)"
                    cursor="pointer"
                  >
                    <Icon color={textColor} as={FaCube} me="6px" />
                    <Text fontSize="xs" color={textColor} fontWeight="bold">
                      OVERVIEW
                    </Text>
                  </Flex>
                </Button> */}
                {/* <Button p="0px" bg="transparent" variant="no-effects">
                  <Flex
                    align="center"
                    w={{ lg: "135px" }}
                    borderRadius="15px"
                    justifyContent="center"
                    py="10px"
                    mx={{ lg: "1rem" }}
                    cursor="pointer"
                  >
                    <Icon color={textColor} as={IoDocumentsSharp} me="6px" />
                    <Text fontSize="xs" color={textColor} fontWeight="bold">
                      TEAMS
                    </Text>
                  </Flex>
                </Button>
                <Button p="0px" bg="transparent" variant="no-effects">
                  <Flex
                    align="center"
                    w={{ lg: "135px" }}
                    borderRadius="15px"
                    justifyContent="center"
                    py="10px"
                    cursor="pointer"
                  >
                    <Icon color={textColor} as={FaPenFancy} me="6px" />
                    <Text fontSize="xs" color={textColor} fontWeight="bold">
                      PROJECTS
                    </Text>
                  </Flex>
                </Button> */}
              </Flex>
            </Flex>
          </ModalBody>
          {/* <ModalFooter> */}
          {/* <Text fontSize={'xs'} ml={'5'} mb={'2'}>
                Hover Green Accept Edit <br/>
                Hover Blue Cancel Edit<br/>
                Hover Red Delete Category
            </Text> */}
          {/* </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
export default EditProduct;

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
} from "@chakra-ui/react";

function EditCategory({ isOpen, onClose }) {
  const [value, setValue] = useState("Rasengan ⚡️");

  const handleSave = () => {
    // Put your logic here to save the edited value
    // For this example, we will just set the value directly
    onClose(); // Close the modal after saving
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bgColor={"rgba(0,0,0, 0.8)"} textColor="white">
          <ModalHeader>Edit Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex mb={'5'}>
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
            {/* <Flex>
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
                // onClick={onClose}
                variant={"outline"}
                size={"sm"}
                textColor="white"
                w="100%"
                _hover={{ bgColor: "red", color: "white" }}
              />
              </ButtonGroup>
            </Flex> */}
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
export default EditCategory;

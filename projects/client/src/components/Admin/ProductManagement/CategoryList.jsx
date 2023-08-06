import React from "react";
import {
  Flex,
  Grid,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { MdPlaylistAddCheck } from "react-icons/md";
import { useDisclosure } from "@chakra-ui/react";
import { BiAddToQueue, BiEdit } from "react-icons/bi";
import CreateCategory from "./CreateCategory";
import CreateProduct from "./CreateProduct";
import EditCategory from "./EditCategory";
import EditProduct from "./EditProduct";


const CategoryList = () => {
    const { isOpen: isCreateCategoryOpen, onOpen: onCreateCategoryOpen, onClose: onCreateCategoryClose } = useDisclosure();
    const { isOpen: isCreateProductOpen, onOpen: onCreateProductOpen, onClose: onCreateProductClose } = useDisclosure();
    const { isOpen: isEditCategoryOpen, onOpen: onEditCategoryOpen, onClose: onEditCategoryClose } = useDisclosure();
    const { isOpen: isEditProductOpen, onOpen: onEditProductOpen, onClose: onEditProductClose } = useDisclosure();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Menu>
          <MenuButton
            // mt={"15"}
            as={Button}
            rightIcon={<MdPlaylistAddCheck size={"35"} />}
            variant={"ghost"}
            textColor="white"
            _hover={{ bgColor: "white", color: "black" }}
          ></MenuButton>
          <MenuList zIndex={900000} bgColor={"rgba(0,0,0, 0.5)"}>
            <MenuItem bgColor={"rgba(0,0,0, 0.5)"} onClick={onCreateCategoryOpen}>
              <BiAddToQueue /> &nbsp;Create Category
            </MenuItem>
            <MenuItem bgColor={"rgba(0,0,0, 0.5)"} onClick={onEditCategoryOpen}>
              <BiEdit /> &nbsp;Edit Category
            </MenuItem>
            <MenuItem bgColor={"rgba(0,0,0, 0.5)"} onClick={onCreateProductOpen}>
              <BiAddToQueue /> &nbsp;Create Product
            </MenuItem>
            <MenuItem bgColor={"rgba(0,0,0, 0.5)"} onClick={onEditProductOpen}>
              <BiEdit /> &nbsp;Edit Product
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <CreateCategory isOpen={isCreateCategoryOpen} onClose={onCreateCategoryClose} />
      <CreateProduct isOpen={isCreateProductOpen} onClose={onCreateProductClose} />
      <EditCategory isOpen={isEditCategoryOpen} onClose={onEditCategoryClose} />
      <EditProduct isOpen={isEditProductOpen} onClose={onEditProductClose} />

      <Grid
        gap={"5"}
        fontFamily={"monospace"}
        px={"5"}
        pt={"2"}
        templateColumns="repeat(5, 1fr)"
      >
        <Button
          variant={"outline"}
          size={"sm"}
          textColor="white"
          w="100%"
          _hover={{ bgColor: "white", color: "black" }}
          textTransform={"uppercase"}
        >
          Beer
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          textColor="white"
          w="100%"
          _hover={{ bgColor: "white", color: "black" }}
        >
          Wine
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          textColor="white"
          w="100%"
          _hover={{ bgColor: "white", color: "black" }}
        >
          Vodka
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          textColor="white"
          w="100%"
          _hover={{ bgColor: "white", color: "black" }}
        >
          Whiskey
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          textColor="white"
          w="100%"
          _hover={{ bgColor: "white", color: "black" }}
        >
          Rum
        </Button>
      </Grid>
    </>
  );
};

export default CategoryList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { MdPlaylistAddCheck } from "react-icons/md";
import { useDisclosure } from "@chakra-ui/react";
import { BiAddToQueue, BiEdit } from "react-icons/bi";
import CreateCategory from "./CreateCategory";
import EditCategory from "./EditCategory";


const CategoryList = () => {
  const {
    isOpen: isCreateCategoryOpen,
    onOpen: onCreateCategoryOpen,
    onClose: onCreateCategoryClose,
  } = useDisclosure();
  const {
    isOpen: isEditCategoryOpen,
    onOpen: onEditCategoryOpen,
    onClose: onEditCategoryClose,
  } = useDisclosure();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8000/product/categories");
      setCategories(response.data.result);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCreateCategorySuccess = () => {
    fetchCategories(); // Refresh the category list
    onCreateCategoryClose(); // Close the create category modal
  };
  
  return (
    <Box mb={'10'}>
      <Box ml={'5'} mb={'3'} mt={"5"} style={{ display: "flex", justifyContent: "flex-end" }}>
        <Menu>
          <Select placeholder="Sort by product" w={'md'}>
            <option value="option1">A-Z</option>
            <option value="option2">Z-A</option>
          </Select>
          <Spacer/>
          <Select placeholder="Sort by price" w={'md'}>
            <option value="option1">Ascending</option>
            <option value="option2">Descending</option>
          </Select>
          <MenuButton
            as={Button}
            rightIcon={<MdPlaylistAddCheck size={"35"} />}
            variant={"ghost"}
            textColor="white"
            _hover={{ bgColor: "white", color: "black" }}
          ></MenuButton>
          <MenuList zIndex={900000} bgColor={"rgba(0,0,0, 0.5)"}>
            <MenuItem
              bgColor={"rgba(0,0,0, 0.5)"}
              onClick={onCreateCategoryOpen}
            >
              <BiAddToQueue /> &nbsp;Create Category
            </MenuItem>
            <MenuItem bgColor={"rgba(0,0,0, 0.5)"} onClick={onEditCategoryOpen}>
              <BiEdit /> &nbsp;Edit Category
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <EditCategory isOpen={isEditCategoryOpen} onClose={onEditCategoryClose} />
      <CreateCategory
        isOpen={isCreateCategoryOpen}
        onClose={onCreateCategoryClose}
        onCreateSuccess={handleCreateCategorySuccess}
      />
      {/* <CreateCategory
        isOpen={isCreateCategoryOpen}
        onClose={onCreateCategoryClose}
        onCreateSuccess={handleCreateCategorySuccess}
      /> */}
      <Grid
        gap={"5"}
        fontFamily={"monospace"}
        px={"5"}
        pt={"2"}
        templateColumns="repeat(5, 1fr)"
      >
        {categories.map((item) => (
          <Button
            variant={"outline"}
            size={"sm"}
            textColor="white"
            w="100%"
            _hover={{ bgColor: "white", color: "black" }}
            textTransform={"uppercase"}
            key={item.name} // Add a unique key for each category
          >
            {item.name}
          </Button>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryList;

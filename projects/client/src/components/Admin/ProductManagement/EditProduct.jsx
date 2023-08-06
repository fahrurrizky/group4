import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Image,
} from '@chakra-ui/react';


const IMAGE =
  "https://images.unsplash.com/photo-1621428674699-90ec7bae03c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80";
  

export default function EditProduct({isOpen, onClose}) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        isCentered
      >
        <ModalOverlay 
        // backdropFilter='blur(10px)'
        />
        <ModalContent bgColor={"rgba(0,0,0, 0.8)"} textColor="white">
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel><i>Photo Product</i></FormLabel>
              <Image
              rounded={"xl"}
              boxSize='120px'
              objectFit={'cover'}
              src={IMAGE}
              alt="#"
            />
            <Input my={'2'} color={"rgba(0,0,0,0)"} variant={'unstyled'} size={'xs'} type="file" width={'50%'} />
            </FormControl>
            <FormControl>
              <FormLabel><i>Product Name</i></FormLabel>
              <Input placeholder='Add Product Name' />
            </FormControl>
            <FormControl>
              <FormLabel><i>Product Price</i></FormLabel>
              <Input placeholder='Add Product Price' />
            </FormControl>
            <FormControl>
              <FormLabel><i>Product Category</i></FormLabel>
              <Select>
                <option>Beer</option>
                <option>Wine</option>
                <option>Vodka</option>
                <option>Whiskey</option>
                <option>Rum</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel><i>Description Product</i></FormLabel>
              <Textarea placeholder='Add the descriptions of product'/>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} variant={'outline'} textColor="white" w="100%" _hover={{bgColor:"white", color:"black"}}>
              Save
            </Button>
            <Button onClick={onClose} variant={'outline'} textColor="white" w="100%" _hover={{bgColor:"white", color:"black"}}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
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
} from '@chakra-ui/react';


export default function CreateProduct({isOpen, onClose}) {
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
          <ModalHeader>Create Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
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
              <FormLabel><i>Descriptio Product</i></FormLabel>
              <Textarea/>
            </FormControl>
            <FormControl>
              <FormLabel><i>Photo Product</i></FormLabel>
              <Input type='file' accept="image/*" width={'100%'}  p={'4px 6px'} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} variant={'outline'} textColor="white" w="100%" _hover={{bgColor:"white", color:"black"}}>
              Create
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
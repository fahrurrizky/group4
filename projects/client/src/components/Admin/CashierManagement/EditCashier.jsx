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
} from '@chakra-ui/react';


export default function EditCashier({isOpen, onClose}) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        isCentered
      >
        <ModalOverlay 
        />
        <ModalContent bgColor={"rgba(0,0,0, 0.5)"} textColor="white">
          <ModalHeader>Edit Cashier</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mb={'3'}>
              <FormLabel><i>Current Username</i></FormLabel>
              <Input placeholder='Add current username' />
            </FormControl>
            <FormControl mb={'3'}>
              <FormLabel><i>Current Email</i></FormLabel>
              <Input placeholder='Add current email' />
            </FormControl>
            <FormControl mb={'3'}>
              <FormLabel><i>New Username</i></FormLabel>
              <Input placeholder='Add new username' />
            </FormControl>
            <FormControl>
              <FormLabel><i>New Email</i></FormLabel>
              <Input placeholder='Add new email' />
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
import React, { useState } from 'react';
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
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const CreateCashier = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    // Password validation (at least 6 characters)
    const isPasswordValid = password.length >= 6;

    if (!isEmailValid || !isPasswordValid) {
      alert('Please enter a valid email and password (password should be at least 6 characters)');
      return;
    }

    // Reset the form after submission
    setUsername('');
    setEmail('');
    setPassword('');

    // Close the modal after form submission
    onClose();
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false} isCentered>
        <ModalOverlay />
        <ModalContent bgColor={'rgba(0,0,0, 0.8)'} textColor="white">
          <ModalHeader>Create Cashier</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mb={'3'}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Add username"
              />
            </FormControl>
            <FormControl mb={'3'}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Add email"
              />
            </FormControl>
            <FormControl mb={'3'}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Add password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleTogglePasswordVisibility}>
                    {showPassword ? (
                      <Icon as={HiEyeOff} color="gray.500" />
                    ) : (
                      <Icon as={HiEye} color="gray.500" />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              mr={3}
              variant={'outline'}
              textColor="white"
              w="100%"
              _hover={{ bgColor: 'white', color: 'black' }}
              onClick={handleSubmit}
            >
              Create Cashier
            </Button>
            <Button
              onClick={onClose}
              variant={'outline'}
              textColor="white"
              w="100%"
              _hover={{ bgColor: 'white', color: 'black' }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCashier;
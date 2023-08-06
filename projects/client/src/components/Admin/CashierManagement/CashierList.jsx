import { useDisclosure } from "@chakra-ui/react";
import { Link, Input, Spacer, Flex, Switch, Heading, Text, Stack, Avatar, Divider, Icon, Box, Button } from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { ImQuotesLeft } from 'react-icons/im';
import { BiAddToQueue, BiEdit } from "react-icons/bi";
import CreateCashier from "./CreateCashier";
import EditCashier from "./EditCashier";

const testimonials = [
  {
    username: 'Alletta_',
    email: 'alletta@gamil.com',
    position: 'Cashier',
    company: 'The Majestic Mixer',
    image:
      'https://images.unsplash.com/photo-1453171194557-e6c630bb8af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`
  },
  {
    username: 'Alletta_',
    email: 'alletta@gamil.com',
    position: 'Cashier',
    company: 'The Majestic Mixer',
    image:
      'https://i.pinimg.com/564x/89/d8/fc/89d8fc1478576edaa94d4a9aef3b9865.jpg',
    content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`
  },
  {
    username: 'Jena_Karlis',
    email: 'benparker@gamil.com',
    position: 'Cashier',
    company: 'The Majestic Mixer',
    image:
    'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
    rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.`
  },
  {
    username: 'Alletta_',
    email: 'alletta@gamil.com',
    position: 'Cashier',
    company: 'The Majestic Mixer',
    image:
      'https://i.pinimg.com/564x/74/e0/25/74e0257e1f4a03a92363511624b3c299.jpg',
    content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`
  },
];

const CashierList = () => {
  const { isOpen: isCreateCashierOpen, onOpen: onCreateCashierOpen, onClose: onCreateCashierClose } = useDisclosure();
  const { isOpen: isEditCashierOpen, onOpen: onEditCashierOpen, onClose: onEditCashierClose } = useDisclosure();

  return (
    <Box maxW="10xl" px={{ base: 5, md: 20 }}>
      <Heading fontWeight={'thin'}>
        Cashier list
      </Heading>
      <Divider my={6} />
      {testimonials.map((obj, index) => (
        <Box key={index}>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={10} pt={1} justify="center">
            <Avatar
              size="2xl"
              shadow={'dark-lg'}
              alignSelf={'center'}
              showBorder={true}
              borderColor="white.400"
              name="avatar"
              src={obj.image}
              d={{ base: 'none', sm: 'block' }}
            />
            <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
              <Icon as={ImQuotesLeft} w={8} h={8} color="white" />
              <Text fontSize="md" fontWeight="medium">
                <i>
                {obj.content}
                </i>
              </Text>
              <Stack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={0}>
                <Text fontWeight="bold" fontSize="lg" fontFamily={'cursive'}>
                  {obj.username}
                </Text>
                <Text fontWeight="medium" fontSize="sm">
                  {obj.email}
                </Text>
                <Text fontWeight="medium" fontSize="sm" color="white">
                 <i>
                 {obj.position}, {obj.company}
                </i> 
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Flex mt={'2'}> 
          <Spacer />
            <Input color={"rgba(0,0,0,0)"} variant={'unstyled'} size={'xs'} type="file" width={'9%'} />
            <Button colorScheme="white" size="xs" variant={'outline'}>
            <i>Change Avatar</i>
            </Button>
          <Switch colorScheme={"facebook"} ml={'2'} alignSelf={'center'}/>
          <Button variant={'link'}>
          <BiEdit color='white' size={'23'} onClick={onEditCashierOpen}/>
          <EditCashier isOpen={isEditCashierOpen} onClose={onEditCashierClose} />
          </Button>
          </Flex>
          {testimonials.length - 1 !== index && <Divider my={5} />}
        </Box>
      ))}
      <Link>
        <Button
          position={"fixed"}
          zIndex={1}
          bottom={5}
          right={5}
          p={6}
          justifyContent={"center"}
          alignItems={"center"}
          rounded={"full"}
          bgColor={"rgba(255,255,255, 0.7)"}
        >
          <BiAddToQueue size={"30px"} onClick={onCreateCashierOpen} />
        </Button>
        <CreateCashier isOpen={isCreateCashierOpen} onClose={onCreateCashierClose} />
      </Link>
    </Box>
  );
};

export default CashierList;



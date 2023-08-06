import { Fragment } from 'react';
import { Container, Text, Stack, Avatar, Icon, Image, Box, Input, Button, Flex } from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { ImQuotesLeft } from 'react-icons/im';
import MyBranch from "../../DashboardAdmin/MyBranch"


interface TestimonialAttributes {
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: TestimonialAttributes[] = [
  {
    name: 'Andre Widyatmoko',
    position: 'Admin',
    company: 'The Majestic Mixer',
    image:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    content:
      "Learn from a glass of liquor, the sweet and bitter are still enjoyed!. Likewise with life, bright or even gloomy, keep living it. Alcohol is perhaps man's worst enemy. But the Bible says, love your enemies. so do not let the brain sober"
  }
];

const Profile = () => {
  return (
    <Box >
    <Container maxW="5xl" p={{ base: 5, md: 8 }}>
      {testimonials.map((obj, index) => (
        <Fragment key={index}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            bgGradient="linear(to-br, rgba(66, 225, 78, 0.9), rgba(0, 0, 255, 0.5))"
            spacing={{ base: 0, sm: 10 }}
            p={{ base: 4, sm: 10 }}
            rounded="lg"
            justify="center"
          >
            <Box width="30rem" pos="relative" d={{ base: 'none', sm: 'block' }}>
              <Image
                size="2xl"
                pos="absolute"
                rounded="lg"
                src={obj.image}
                top="-3.8rem"
                boxShadow="lg"
              />
            </Box>

            <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
              <Icon as={ImQuotesLeft} w={10} h={10} color="white" />
              <Text fontSize="md" fontWeight="medium">
                {obj.content}
              </Text>
              <Stack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={0}>
                <Avatar
                  size="xl"
                  showBorder={true}
                  borderColor="green.400"
                  name="avatar"
                  src={obj.image}
                  d={{ base: 'block', sm: 'none' }}
                />
                <Text fontWeight="bold" fontSize="lg">
                  {obj.name}
                </Text>
                <Text fontWeight="medium" fontSize="sm" color="white">
                  <i>
                  {obj.position}, {obj.company}
                  </i>
                </Text>
                <Flex>
                <Input color={"rgba(0,0,0,0)"} variant={'unstyled'} size={'xs'} type="file" width={'25%'} />
                <Button colorScheme="white" size="xs" variant={'outline'}>
                <i>Change Avatar</i>
                </Button>
                </Flex>
              </Stack>
            </Stack>
          </Stack>
        </Fragment>
      ))}
    </Container>
    <MyBranch/>
    </Box>
  );
};

export default Profile;
import { Fragment } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider,
  Box,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MotionBox } from "./motion";
import { BsFillBriefcaseFill } from "react-icons/bs";
import Header from "./header";
const TURQUOISE = "#06b6d4";

const contactOptions = [
  {
    label: 'Address',
    value: 'Street No 1, Railway Road, Sahiwal, PK',
    icon: GoLocation
  },
  {
    label: 'PHONE NUMBER',
    value: '+92 304 7204200',
    icon: BsPhone
  },
  {
    label: 'EMAIL',
    value: 'hi@nomanmujahid.com',
    icon: HiOutlineMail
  }
];

const Contact = () => {
  return (
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
      <Stack spacing={10}>
        <Flex align="center" justifyContent="center" direction="column">
          <MotionBox>
              <VStack>
                <Header mt={0} mb={1}>
                  Get In Touch
                </Header>
                <Text
                  fontSize={"xl"}
                  color={useColorModeValue("gray.500", "gray.200")}
                  maxW="lg"
                  textAlign="center"
                >
                Ready to elevate your project with a fusion of expertise and innovation! 🚀🔧
                </Text>
              </VStack>
                {/* <Stack pl={3}>
                    <Box as={BsFillBriefcaseFill} size="25px" />
                </Stack> */}
            </MotionBox>
        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          {contactOptions.map((option, index) => (
            <Fragment key={index}>
              <Stack
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
                px={3}
              >
                <Icon as={option.icon} w={10} h={10} color="#53c8c4" />
                <Text fontSize="lg" fontWeight="semibold">
                  {option.label}
                </Text>
                <Text fontSize="md" textAlign="center">
                  {option.value}
                </Text>
              </Stack>
              {contactOptions.length - 1 !== index && (
                <Flex d={{ base: 'none', md: 'flex' }}>
                  <Divider orientation="vertical" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Stack>
        <VStack
          as="form"
          spacing={8}
          w="100%"
          bg={useColorModeValue('white', 'gray.700')}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%">
            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Noman Mujahid" rounded="md" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="hi@nomanmujahid.com" rounded="md" />
              </FormControl>
            </Stack>
            <FormControl id="subject">
              <FormLabel>Subject</FormLabel>
              <Input type="text" placeholder="Are you available for freelance work?" rounded="md" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea size="lg" placeholder="Enter your message" rounded="md" />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
             bg="#53c8c4"
              color="white"
              _hover={{
                  bg: '#C6F6D5',
              }}
              rounded="full"
                w={{ base: '100%', md: 'max-content' }}
                          
            >
              Send Message
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Contact;
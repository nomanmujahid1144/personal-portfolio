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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import PhoneInput from 'react-phone-number-input';
import { useAlert } from "react-alert";
import 'react-phone-number-input/style.css';
import Header from "./header";
import { sendContactUsMessage } from "../redux/Actions/UserActions"
import InputField from '../components/fields/InputField';
import TextField from '../components/fields/TextField';
import {SlickSliderContact} from '../components/slider/SlickSlider';

const TURQUOISE = "#06b6d4";

const contactOptions = [
  {
    label: 'Address',
    value: 'Sahiwal, Punjab, PK',
    icon: GoLocation,
    wantToLink: false
  },
  {
    label: 'PHONE NUMBER',
    value: '+92 304 7204200',
    icon: BsPhone,
    wantToLink: true,
  },
  {
    label: 'EMAIL',
    value: 'hi@nomanmujahid.com',
    icon: HiOutlineMail,
    wantToLink: true
  }
];

const Contact: React.FC = () => {


  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();
  const alert = useAlert();

  const [credentials, setcredentials] = useState({
      fullName: "",
      companyName: "",
      subject: "",
      email: "",
      message: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Noman Here')
      const { fullName, subject, companyName, email,  message } = credentials;
      setcredentials({
        fullName: '',
        companyName: '',
        subject: '',
              email: '',
              message: "",
      })
      setValue('');
      dispatch(sendContactUsMessage(fullName, companyName , subject, value, email, message, alert));
  };


  const onChange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };


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
        <SlickSliderContact>
          {/* <Stack
            spacing={{ base: 6, md: 0 }}
            direction={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
          > */}
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
                  {option.wantToLink ? (<>
                    {option.label === 'PHONE NUMBER' ? 
                      <Text fontSize="md" textAlign="center">
                        <a href={`tel:${option.value}`} target="_blank" rel="noopener noreferrer">
                          {option.value}
                        </a>
                      </Text>
                      : <>
                        {option.label === 'EMAIL' ?  
                          <Text fontSize="md" textAlign="center">
                            <a href={`mailto:${option.value}`} target="_blank" rel="noopener noreferrer">
                              {option.value}
                            </a>
                          </Text>
                          
                        : null}
                      </>}
                    </>)
                    : <>
                      <Text fontSize="md" textAlign="center">
                        {option.value}
                      </Text>
                    </>}
                </Stack>
                {contactOptions.length - 1 !== index && (
                  <Flex d={{ base: 'none', md: 'flex' }}>
                    <Divider orientation="vertical" />
                  </Flex>
                )}
              </Fragment>
            ))}
          {/* </Stack> */}
        </SlickSliderContact>
        <FormControl onSubmit={handleSubmit}>
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
                    <InputField
                      label="Name"
                      type="text"
                      extras="w-100"
                      required={true}
                      id="fullName"
                      placeholder="Noman Mujahid"
                      value={credentials?.fullName}
                      onChange={onChange}
                    />
                    <InputField
                      label="Email"
                      type="email"
                      required={true}
                      id="email"
                      placeholder="hi@nomanmujahid.com"
                      value={credentials?.email}
                      onChange={onChange}
                    />
                </Stack> 
                <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
                    <InputField
                      label="Company Name"
                      type="text"
                      required={true}
                      id="companyName"
                      placeholder="eg: Busnet Limited"
                      value={credentials?.companyName}
                      onChange={onChange}
                  />
                    <Box w="100%">
                      <FormLabel>Phone Number</FormLabel>
                      <PhoneInput
                        isValidPhoneNumber={true}
                        limitMaxLength={true}
                        className="form-control border border-gray-300 text-sm chakra-input form-control border-gray-200 dark:!border-white/10 dark:text-white css-1b73kmm"
                        international
                        initialValueFormat="international"
                        countryCallingCodeEditable={false} 
                        defaultCountry="PK"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                        displayInitialValueAsLocalNumber
                      />  
                    </Box>
                </Stack> 
                <InputField
                  label="Subject"
                  type="text"
                  required={true}
                  id="subject"
                  placeholder="Are you available for freelance work?"
                  value={credentials?.subject}
                  onChange={onChange}
                />
                <TextField
                  label="Message*"
                  type="text"
                  required={true}
                  id="message"
                  placeholder="Enter your message"
                  value={credentials?.message}
                  onChange={onChange}
                />
              </VStack>
              <VStack w="100%">
                <Button
                  bg="#53c8c4"
                  type='submit'
                  color="white"
                  _hover={{
                      // bg: '#C6F6D5',
                      cursor:"pointer"
                  }}
                  rounded="full"
                  w={{ base: '100%', md: 'max-content' }}
                                
                >
                  Send Message
                </Button>
              </VStack>
          </VStack>
        </FormControl>
      </Stack>
    </Container>
  );
};

export default Contact;
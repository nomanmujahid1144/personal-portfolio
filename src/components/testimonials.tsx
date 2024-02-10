import React from 'react';
import { Container,  VStack,    Flex, Box, Avatar, HStack, Text, Icon } from '@chakra-ui/react';
import { ImQuotesRight } from 'react-icons/im';
import {SlickSlider} from './slider/SlickSlider'; // Assuming this is where your SlickSlider component is imported from
// Here we have used react-icons package for the icon
import { FaQuoteRight } from 'react-icons/fa';
// Assuming the structure of your testimonials array
interface TestimonialAttributes  {
  content: string;
  image: string;
  username: string;
  position: string;
  company: string;
}

  
const testimonials: TestimonialAttributes[] = [
    {
    username: 'Patelkishen97',
    position: 'From',
    company: 'Australia',
    image:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
    content: `Great seller. Very patient and very skilled. He always listens to feedback and acts accordingly. I would highly recommend him!`
    },
    {
    username: 'Ajay Prajapati',
    position: 'From',
    company: 'United Arab Emirates',
    image:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
    content: `It is a distinct pleasure for me to recommend Noman Mujahid to any and all interested parties. He has been professional, comprehensive, and competent throughout the process of our working together. With his help, We were able to increase the functionality of our website dramatically. Our website is much easier to use, has tons of more features than before and is incredibly easy to maintain. Thanks, Noman!`
    },
    {
    username: 'Mr Shafeeq',
    position: 'From',
    company: 'Pakistan',
    image:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
    content: `Noman is a great guy. Very friendly and responsive. He did superb and top-notch job. I highly recommend him!`
    },
    {
    username: 'Ridether',
    position: 'From',
    company: 'United States',
    image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    content: `Very talented web designer. Is very understanding and an excellent communicator.`
    },
    {
    username: 'hanna705',
    position: 'From',
    company: 'United Kingdom',
    image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    content: `Very easy to work with, delivery was on time and very well done`
    },
    {
    username: 'Syed Asif Sultan',
    position: 'From',
    company: 'India',
    image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    content: `Noman was my first hire on Upwork. I was skeptical in the beginning but he took care of the entire process flawlessly. Will definitely work with him in future.`
    },
    {
    username: 'Mr. Stepehen',
    position: 'From',
    company: 'Nigeria',
    image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    content: `Patiently worked with me with all the requirements until we have the end product. We'll do more projects in the future for sure.`
    },
];


// Function to generate a random background color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Function to get initials from username
const getInitials = (username) => {
  const words = username.split(' ');
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  } else if (words.length >= 2) {
    return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
  }
  return '';
};


const Testimonials = () => {
    return (
        <SlickSlider>
          {testimonials.map((testimonial, index) => (
            <Flex key={index} px='4' mt='5' direction="column" >
              <Box
                p={5}
                bg='white'
                my='3'
                color="gray.500"
                borderTopLeftRadius="lg"
                borderTopRightRadius="lg"
                height={200}
                overflow="hidden"
              >
                <Text overflow="hidden" textOverflow="ellipsis">
                  {testimonial.content}
                </Text>
              </Box>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                p={5}
                bg='#53c8c4'
                borderBottomLeftRadius="lg"
                borderBottomRightRadius="lg"
              >
                <HStack spacing={4}>
                  <Box
                    borderRadius="full"
                    width="40px"
                    height="40px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg={getRandomColor()}
                    color="white"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    {getInitials(testimonial.username)}
                  </Box>
                  <Flex direction="column">
                    <Text fontWeight="bold" fontSize="lg">
                      {testimonial.username}
                    </Text>
                    <Text fontSize="md" color="gray.500">
                      {testimonial.position} <strong>{testimonial.company}</strong>
                    </Text>
                  </Flex>
                </HStack>
                <Icon as={ImQuotesRight} w={8} h={8} />
              </Flex>
            </Flex>
          ))}
        </SlickSlider>
    );
  };
  
export default Testimonials;


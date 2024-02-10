import * as React from "react";
import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import placeholder from "assets/images/placeholder.png";
import { FaGraduationCap } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BsFillBriefcaseFill } from "react-icons/bs";
import {
  PageSlideFade,
  StaggerChildren,
  CardTransition
} from "./page-transitions";
import { MotionBox } from "./motion";
import { companies, institutes } from "data/data";
import Header from "./header";
import { SlickSlider } from './slider/SlickSlider';
import Testimonial  from './testimonials';

interface CardProps {
  title: string;
  role: string;
  skills: string[];
  period: string;
  logo: string;
  colorMode: string;
  alt: string;
}

const TURQUOISE = "#06b6d4";

const Card = (props: CardProps) => {
  const { title, role, compnayLocation , isLocation,  skills, period, logo, colorMode, alt } = props;
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: "lg" }}
        bg={useColorModeValue("white", "gray.800")}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Image
              rounded="lg"
              w={16}
              h={16}
              objectFit="cover"
              fallbackSrc={placeholder}
              src={logo}
              alt={alt}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {title}
              </Heading>
              <Heading
                align="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {role}
              </Heading>
              {isLocation ? 
                <Stack isInline>
                  <Box as={GoLocation} size="15px" ></Box>
                  <Heading
                    align="left"
                    fontSize="sm"
                    color={`mode.${colorMode}.career.subtext`}
                  >
                    {compnayLocation}
                  </Heading>
                </Stack>
              : null}
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems="center"
                display={["flex flex-wrap"]}
                gap={3}
              >
                {skills.map(skill => (
                  <Tag size="sm" padding="0 3px" key={skill}>
                    {skill}
                  </Tag>
                ))}
              </Stack>
            </Stack>
          </Flex>
          <Stack display={["none", "none", "flex", "flex"]}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={1}
          mt={3}
          isInline
          alignItems="center"
          display={["flex", "flex", "none", "none"]}
        >
          {skills.map(skill => (
            <Tag size="sm" padding="0 3px" key={skill}>
              {skill}
            </Tag>
          ))}
        </Stack>
      </Box>
    </CardTransition>
  );
};

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <PageSlideFade>
      <StaggerChildren>
        <MotionBox>
            <VStack>
              <Header mt={0} mb={1}>
                Testimonials
              </Header>
              <Text
                fontSize={"xl"}
                color={useColorModeValue("gray.500", "gray.200")}
                maxW="lg"
                textAlign="center"
            >
              Elevate your project with expertise and innovation! 🚀🔧 Explore what our clients have to say.
            </Text>
            </VStack>
          </MotionBox>
        <Testimonial />
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default About;

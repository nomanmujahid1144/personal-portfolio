import * as React from "react";
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUsers,
  FiBarChart2
} from "react-icons/fi";
import { VStack, Heading, Box, Link, LinkProps } from "@chakra-ui/react";
import { TimelineItem } from "./Timeline";
import { PageSlideFade } from "./page-transitions";
import { Link as NavLink } from "react-router-dom";
import Header from "./header";

interface ExternalLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link href={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link as={NavLink} to={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};
const Achievements = () => {
  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FiUsers}>On Route to leaning Back-end❤️</TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published my first post on this website{" "}
              <InternalLink color={"blue.200"} url="/blog" text={"Blog"} />
            </TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to{" "}
              <InternalLink
                color={"blue.200"}
                url="/open-source"
                text={"9 open-source repositories"}
              />
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
            Built my portfolio website with{" "}
              <ExternalLink
                color={"blue.200"}
                url=""
                text={"React, Chakra-UI and Framer-motion,"}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
            Rebuilt my skill v3.0 {" "}
              <ExternalLink
                color={"blue.200"}
                url=""
                text={"Ract.js, Chakra-UI"}
                target="_blank"
              />

            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiEdit2}>Start Work with CMS{" "}
            <ExternalLink
                color={"blue.200"}
                url=""
                text={"WordPress & Shopify"}
                target="_blank"
              />
              </TimelineItem>
            <TimelineItem icon={FiPackage}>
            Complete my first project{" "}
              <ExternalLink
                color={"blue.200"}
                url=""
                text={"Cellular Planet. Canada"}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
            Upgrade my Skill v2.0 {" "}
              <ExternalLink
                color={"blue.200"}
                url=""
                text={"JavaScript,Bootstrap"}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
            Start Learning Web Development{" "}
              <ExternalLink
                color={"blue.200"}
                url=""
                text={"HTML,CSS"}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  );
};

export default Achievements;

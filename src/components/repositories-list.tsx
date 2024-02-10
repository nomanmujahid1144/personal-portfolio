import * as React from "react";
import {
  VStack,
  Text,
  useColorModeValue,
  HStack,
  IconButton,
  Tooltip
} from "@chakra-ui/react";
import { PageSlideFade } from "./page-transitions";
import Header from "./header";
import { RiSignalTowerLine, RiWifiOffLine } from "react-icons/ri";
import OfflineData from "./offline-data";
import LiveData from "./live-data";
import useSound from "use-sound";
import lightswitch from "assets/audios/lightswitch.mp3";

const TURQUOISE = "#06b6d4";

const iconProps = {
  variant: "ghost",
  size: "md",
  isRound: true
};

const RepositoriesList = () => {
  const [activeTab, setActiveTab] = React.useState("live");

  const [play] = useSound(lightswitch, {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300]
    }
  });

  const handleClick = (type) => {
    activeTab === "live" ? play({ id: "on" }) : play({ id: "off" });
    setActiveTab(type)
  }

  return (
    <PageSlideFade>
      <VStack align="start" spacing={3}>
        <HStack justifyContent={"space-between"} width={"100%"}>
          <Header underlineColor={TURQUOISE} mt={0} mb={0}>
            Open Source
          </Header>
          <HStack>
          <Tooltip hasArrow label="Live github repos" placement="top">
            <IconButton
              aria-label={"live"}
              size="md"
              colorScheme={"linkedin"}
              icon={<RiSignalTowerLine />}
              isActive={activeTab === "live"}
              onClick={() => handleClick('live')}
              {...iconProps}
            />
            </Tooltip>
          <Tooltip hasArrow label="Local github repos" placement="top">
            <IconButton
              aria-label={"live"}
              size="md"
              colorScheme={"linkedin"}
              icon={<RiWifiOffLine />}
              isActive={activeTab === "offline"}
              onClick={() => handleClick('offline')}
              {...iconProps}
            />
            </Tooltip>
          </HStack>
        </HStack>
        <Text
          color={useColorModeValue("gray.500", "gray.200")}
          textAlign="left"
        >
          This page showcases my collection of open-source repositories published on GitHub. Here, you'll find a compilation of projects I've made freely accessible to the community. Feel free to explore and contribute to these exciting ventures! 🌐🔧
        </Text>
      </VStack>
      {activeTab === "live" ? <LiveData /> : <OfflineData />}
    </PageSlideFade>
  );
};

export default RepositoriesList;

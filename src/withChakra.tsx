// "use client";

// import { useEffect } from "react";
import * as React from "react";

import {
  ChakraProvider,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import type { StoryContext } from "@storybook/react";
// import { getThemes } from "./utils";

const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");

  return (
    <Flex justify="flex-end" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        // marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  );
};

const withChakra = (StoryFn: any, context: StoryContext) => {
  // const { themes: themesObj } = context.globals;
  // const { method } = getThemes(themesObj);

  // return method === "ChakraUI" ? (
  //   <ChakraProvider>
  //     {/* <div id="story-wrapper" style={{ minHeight: "100vh" }}> */}
  //     {/* <ColorModeToggleBar /> */}
  //     <StoryFn />
  //     {/* </div> */}
  //   </ChakraProvider>
  // ) : undefined;

  return (
    <div>
      {/* <ColorModeToggleBar /> */}
      <StoryFn />
    </div>
  );
};

export default withChakra;

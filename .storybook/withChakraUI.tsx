"use client";

import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react";

const withChakra = (StoryFn: React.FC) => {
  return (
    <ChakraProvider>
      <StoryFn />
    </ChakraProvider>
  );
};

export default withChakra;

import * as React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import type { ButtonProps } from "@chakra-ui/react";

export interface ChakraUIButtonProps extends ButtonProps {
  label?: string;
}

const ChakraUIButton = ({ label }: ChakraUIButtonProps) => {
  // const bg = useColorModeValue("teal.200", "teal.600");
  // const color = useColorModeValue("gray.800", "white");
  return (
    <Button colorScheme='blue'>
      {label}
    </Button>
  );
};

ChakraUIButton.defaultProps = {
  label: "BUTTON",
};

export default ChakraUIButton;

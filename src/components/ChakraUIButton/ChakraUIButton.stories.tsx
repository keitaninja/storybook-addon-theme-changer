import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ChakraUIButton from "./ChakraUIButton";
import type { ChakraUIButtonProps } from "./ChakraUIButton";

export default {
  title: "Button/ChakraUI",
  component: ChakraUIButton,
  tags: ['autodocs'],
  decorators: [],
  argTypes: {},
} as Meta;

const Template: StoryFn<ChakraUIButtonProps> = (args) => <ChakraUIButton {...args} />;

export const Default = Template.bind({});

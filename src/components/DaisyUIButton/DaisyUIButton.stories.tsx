import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import DaisyUIButton from "./DaisyUIButton";
import type { DaisyUIButtonProps } from "./DaisyUIButton";

export default {
  title: "Button/DaisyUI",
  component: DaisyUIButton,
  tags: ['autodocs'],
  decorators: [],
  argTypes: {},
} as Meta;

const Template: StoryFn<DaisyUIButtonProps> = (args) => <DaisyUIButton {...args} />;

export const Default = Template.bind({});

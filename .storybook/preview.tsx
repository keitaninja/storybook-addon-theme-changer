import type { Preview } from "@storybook/react";

import withChakraUI from "./withChakraUI";

// tailwind
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globals: {
    themes: {
      // method: "data-theme", // "data-theme" or "ChakraUI" (default: "data-theme")
      method: "data-theme", // "data-theme" or "ChakraUI" (default: "data-theme")
      themes: [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
      ],
    },
  },
  // globalTypes: {
  //   theme: { type: "string" }, // required
  // },
  decorators: [withChakraUI],
};

export default preview;

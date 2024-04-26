import { useEffect, useGlobals } from "@storybook/preview-api";
import { getThemes, setColorMode } from "./utils";

import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from "@storybook/types";

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>,
) => {
  const { themes: themesObj } = context.globals;
  const { themes, method } = getThemes(themesObj);
  const [{ theme }, updateGlobals] = useGlobals();
  const isInDocs = context.viewMode === "docs";
  const chakraClassNames = {
    light: "chakra-ui-light",
    dark: "chakra-ui-dark",
  };

  // disable addon on doc
  if (!isInDocs) {
    // if method is "data-theme"
    if (method === "data-theme") {
      // only the first render
      useEffect(() => {
        const savedTheme = window.localStorage.getItem("data-theme");
        if (savedTheme) {
          // this function triggers useEffect hook to update data-theme attribute
          // and save it to local storage
          updateGlobals({ theme: savedTheme });
        } else {
          // handle data-theme === undefined case
          // default set it to the first theme
          if (themes && themes.length > 0) {
            updateGlobals({ theme: themes[0] });
          }
        }
      }, []);

      // whenever theme changes
      useEffect(() => {
        if (theme) {
          document.documentElement.setAttribute("data-theme", theme);
          window.localStorage.setItem("data-theme", theme);

          // DEBUG: debug purpose message
          console.log("theme changed to: ", theme);
        }
      }, [theme]);
    } else if (method === "ChakraUI") {
      // TODO: implement this
      // only the first render
      useEffect(() => {
        // set color mode from local storage
        setColorMode();
      }, []);

      // whenever theme changes
      useEffect(() => {
        if (theme) {
          // document.documentElement.setAttribute("data-theme", theme);
          // document.documentElement.style.setProperty("color-scheme", theme);

          document.documentElement.dataset.theme = theme;
          document.documentElement.style.colorScheme = theme;
          document.body.classList // .getElementsByClassName("sb-main-padded sb-show-main")[0]
            .add(theme === "light" ? chakraClassNames.light : chakraClassNames.dark);
          document.body.classList // .getElementsByClassName("sb-main-padded sb-show-main")[0]
            .remove(theme === "light" ? chakraClassNames.dark : chakraClassNames.light);
          localStorage.setItem("chakra-ui-color-mode", theme);

          // DEBUG: debug purpose message
          console.log("theme changed to: ", theme);
        }
      }, [theme]);
    }
  }

  return StoryFn();
};

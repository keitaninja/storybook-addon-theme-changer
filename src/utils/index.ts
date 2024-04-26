export const getThemes = (
  themesObj: { themes?: Array<string>; method?: string } | Array<string>,
) => {
  // default values
  let defaultThemes: string[] = ["light", "dark"];
  let defaultMethod: "data-theme" = "data-theme";
  let themes: string[] | undefined = undefined;
  let method: "data-theme" | "ChakraUI" | undefined = undefined;

  // backward compatibility
  // handle themes is an array case
  if (Array.isArray(themesObj) && themesObj.length > 0) {
    themes = themesObj;
    // old behavior
    method = "data-theme";
    // expected case
    // handle themes is an object case
  } else if (typeof themesObj === "object") {
    // handle themes
    if ("themes" in themesObj) {
      if (Array.isArray(themesObj.themes) && themesObj.themes.length > 0) {
        themes = themesObj.themes;
      }
      // else {
      //   themes = undefined;
      // }
    }

    // handle method
    if ("method" in themesObj) {
      // case insensitive comparison
      if (themesObj.method.toUpperCase() === "data-theme".toUpperCase()) {
        method = "data-theme";
      // case insensitive comparison
      } else if (themesObj.method.toUpperCase() === "ChakraUI".toUpperCase()) {
        method = "ChakraUI";
        // ChakraUI accpets only "light" and "dark" themes
        themes = defaultThemes;
      } else {
        // use "data-theme" method if not specified
        method = defaultMethod;
      }
    } else {
      method = defaultMethod;
    }
  }

  // otherwise undefined
  else {
    themes = undefined;
    method = undefined;
  }

  return { themes, method };
};

export const setColorMode = () => {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const systemPreference = mql.matches ? "dark" : "light";

  let persistedPreference;
  let colorMode;
  let initialValue = "light";

  try {
    persistedPreference = localStorage.getItem("chakra-ui-color-mode");
  } catch (error) {
    console.log(
      "Chakra UI: localStorage is not available. Color mode persistence might not work as expected",
    );
  }

  if (typeof persistedPreference === "string") {
    colorMode = persistedPreference;
  } else {
    colorMode = initialValue === "system" ? systemPreference : initialValue;
  }

  if (colorMode) {
    document.documentElement.style.setProperty(
      "--chakra-ui-color-mode",
      colorMode,
    );
  }
};

/* eslint-env browser */
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals = (StoryFn: any, context: any) => {
  const [{ theme }, updateGlobals] = useGlobals();

  // only the first render
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("data-theme");
    if (savedTheme) {
      // this function triggers useEffect hook to update data-theme attribute and save it to local storage
      updateGlobals({ theme: savedTheme });
    } else {
      // handle data-theme === undefined case
      // default set it to light
      document.documentElement.setAttribute("data-theme", "light");
      window.localStorage.setItem("data-theme", "light");
    }
  }, []);

  // whenever theme changes
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      window.localStorage.setItem("data-theme", theme);
    }
  }, [theme]);

  return StoryFn();
};

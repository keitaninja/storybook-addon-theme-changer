import React, { useMemo } from "react";
import { useGlobals } from "@storybook/api";
import {
  IconButton,
  Icons,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";

import { TOOL_ID } from "./constants";

const generateLinks = (themes: string[], updateGlobals: any) => {
  if (themes) {
    return themes.map((ele, index) => {
      return {
        id: index.toString(),
        title: ele,
        onClick: () => updateGlobals({ theme: ele }),
      };
    });
  } else return null;
};

export const Tool = () => {
  const [{ themes }, updateGlobals] = useGlobals();

  return (
    <IconButton key={TOOL_ID} title="change theme">
      {themes ? (
        <WithTooltip
          key={TOOL_ID}
          placement="top"
          trigger="click"
          tooltip={
            <TooltipLinkList links={generateLinks(themes, updateGlobals)} />
          }
        >
          THEME
        </WithTooltip>
      ) : (
        <span>THEME NOT FOUND</span>
      )}
    </IconButton>
  );
};

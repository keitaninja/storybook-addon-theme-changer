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
      <WithTooltip
        key={TOOL_ID}
        placement="top"
        trigger="click"
        tooltip={
          <TooltipLinkList
            links={useMemo(
              () => generateLinks(themes, updateGlobals),
              [themes]
            )}
          />
        }
      >
        <>
          <span>THEME</span>
        </>
      </WithTooltip>
    </IconButton>
  );
};

import * as React from "react";
import { memo } from "react";
import { useGlobals } from "@storybook/manager-api";
import {
  IconButton,
  WithTooltip,
  TooltipLinkList,
  TooltipMessage,
} from "@storybook/components";
import { ControlsIcon } from "@storybook/icons";

import { TOOL_ID } from "@/constants";
import { getThemes } from "@/utils";

interface GenerateLinkProps {
  themes: string[];
  updateGlobals: any;
}

const generateLinks = ({ themes, updateGlobals }: GenerateLinkProps) => {
  if (themes) {
    return themes.map((ele, index) => {
      // return <div id={index.toString()}>{ele.toString()}</div>;
      return {
        id: index.toString(),
        title: ele.toString(),
        onClick: () => updateGlobals({ theme: ele }),
      };
    });
  }
};

export const Tool = memo(function MyAddonSelector() {
  const [{ themes: themesObj }, updateGlobals] = useGlobals();
  const { themes } = getThemes(themesObj);

  return (
    <WithTooltip
      key={TOOL_ID}
      placement="top"
      trigger="click"
      tooltip={
        themes ? (
          <TooltipLinkList links={generateLinks({ themes, updateGlobals })} />
        ) : (
          <TooltipMessage
            title="Error: Global(themes) not found"
            desc="Please refer the doc and set themes following the instructions."
          />
        )
      }
    >
      <IconButton key={TOOL_ID} title="Select theme">
        <ControlsIcon />
      </IconButton>
    </WithTooltip>
  );
});

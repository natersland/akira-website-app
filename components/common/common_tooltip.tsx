import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  tooltipTrigger: React.ReactNode;
  tooltipContent: string;
};

export function CommonTooltip(props: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{props.tooltipTrigger}</TooltipTrigger>
        <TooltipContent>
          <p>{props.tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default CommonTooltip;

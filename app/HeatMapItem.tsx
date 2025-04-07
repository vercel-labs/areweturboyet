"use client";

import React, { useEffect } from "react";
import { twJoin } from "tailwind-merge";
import { useTooltip } from "./TooltipContext";

function HeatMapItem({ tooltipContent, href, isPassing }) {
  const { onMouseOver, onMouseOut } = useTooltip();
  const handleMouseOver = (event) => {
    onMouseOver(event, tooltipContent, isPassing ? "passing" : "failing");
  };

  return (
    <a
      className={twJoin(
        "border border-background hover:border-primary text-transparent " +
          "cursor-default float-left text-[0px] h-[10px] overflow-hidden " +
          "relative text-center w-[10px]",
        isPassing ? "bg-blue-500" : "bg-red-500",
      )}
      href={href}
      onMouseOver={handleMouseOver}
      onMouseOut={onMouseOut}
    />
  );
}

export default React.memo(HeatMapItem);

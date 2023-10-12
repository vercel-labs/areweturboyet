"use client";

import React from "react";
import { useTooltip } from "./TooltipContext";

function getTooltipContent(data) {
  let fileparts = data.file.split("/");
  let filename = fileparts.pop();
  let filepath = fileparts.join("/").replace(/\/__tests__/, "");
  let testname = data.test.slice(2);
  return `${filename}\n→ ${filepath}\n\nit("${testname}")`;
}

function HeatMapItem({ file, test, status }) {
  const { onMouseOver, onMouseOut } = useTooltip();
  const handleMouseOver = (event) => {
    onMouseOver(event, getTooltipContent({ file, test }), status);
  };

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`Test ${status}`}
      href={`https://github.com/vercel/next.js/blob/canary/${file}`}
      onMouseOver={handleMouseOver}
      onMouseOut={onMouseOut}
    >
      {status}: {test}
    </a>
  );
}

export default React.memo(HeatMapItem);

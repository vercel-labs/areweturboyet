"use client";

import React from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";

const tooltipIcons = {
  passing: "\u2705",
  failingInDev: "\uD83D\uDEA7",
  failing: "\u274C",
};

const tooltipStatus = {
  passing: "passing",
  failingInDev: "passing, except dev-only behavior",
  failing: "failing",
};

function Tooltip(props) {
  let contentStyle = {
    right: props.flip ? -15 : "auto",
    left: props.flip ? "auto" : -15,
  };

  var statusRow = null;
  if (props.status) {
    let icon = tooltipIcons[props.status];
    let text = tooltipStatus[props.status];
    statusRow = (
      <div className="TooltipStatus">
        <i>{icon}</i>
        {text}
      </div>
    );
  }

  return (
    <div className="Tooltip" style={{ left: props.left, top: props.top }}>
      <div className="TooltipContent" style={contentStyle}>
        {props.content}
        {statusRow}
      </div>
    </div>
  );
}

const TooltipContext = React.createContext(null);

export function TooltipProvider(props) {
  const [data, setData] = useState(null);

  const onMouseOver = useCallback((event, content, status) => {
    let rect = event.target.getBoundingClientRect();
    let left = Math.round(rect.left + rect.width / 2 + window.scrollX);
    let top = Math.round(rect.top + window.scrollY);
    let flip = event.clientX > document.documentElement.clientWidth / 2;
    setData({ left, top, content, status, flip });
  }, []);

  const onMouseOut = useCallback(() => {
    setData(null);
  }, []);

  const value = useMemo(
    () => ({ onMouseOver, onMouseOut }),
    [onMouseOver, onMouseOut]
  );

  return (
    <TooltipContext.Provider value={value}>
      {props.children}
      <Tooltip {...data} />
    </TooltipContext.Provider>
  );
}

export function useTooltip() {
  const callbacks = React.useContext(TooltipContext);
  return callbacks;
}

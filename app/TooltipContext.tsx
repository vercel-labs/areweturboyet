"use client";

import React, {
  Context,
  CSSProperties,
  MouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type TooltipStatus = "passing" | "failingInDev" | "failing";

interface TooltipProps {
  flip?: boolean;
  status?: TooltipStatus;
  left?: number | string;
  top?: number | string;
  content?: ReactNode;
}

const tooltipIcons: Record<TooltipStatus, string> = {
  passing: "\u2705",
  failingInDev: "\uD83D\uDEA7",
  failing: "\u274C",
};

const tooltipStatus: Record<TooltipStatus, string> = {
  passing: "passing",
  failingInDev: "passing, except dev-only behavior",
  failing: "failing",
};

const Tooltip: React.FC<TooltipProps> = (props) => {
  let contentStyle: CSSProperties = {
    right: props.flip ? -15 : "auto",
    left: props.flip ? "auto" : -15,
  };

  let statusRow: ReactNode = null;
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
};

interface TooltipContextValue {
  onMouseOver: (
    event: MouseEvent,
    content: ReactNode,
    status: TooltipStatus,
  ) => void;
  onMouseOut: () => void;
}

const TooltipContext: Context<TooltipContextValue | null> =
  React.createContext(null);

interface TooltipProviderProps {
  children: ReactNode;
}

export const TooltipProvider: React.FC<TooltipProviderProps> = (props) => {
  const [data, setData] = useState<TooltipProps | null>(null);

  const onMouseOver = useCallback(
    (event: MouseEvent, content: ReactNode, status: TooltipStatus) => {
      // @ts-ignore
      let rect = event.target.getBoundingClientRect();
      let left = Math.round(rect.left + rect.width / 2 + window.scrollX);
      let top = Math.round(rect.top + window.scrollY);
      let flip = event.clientX > document.documentElement.clientWidth / 2;
      setData({ left, top, content, status, flip });
    },
    [],
  );

  const onMouseOut = useCallback(() => {
    setData(null);
  }, []);

  const value = useMemo(
    () => ({ onMouseOver, onMouseOut }),
    [onMouseOver, onMouseOut],
  );

  return (
    <TooltipContext.Provider value={value}>
      {props.children}
      {data && <Tooltip {...data} />}
    </TooltipContext.Provider>
  );
};

export function useTooltip(): TooltipContextValue | null {
  const callbacks = useContext(TooltipContext);
  return callbacks;
}

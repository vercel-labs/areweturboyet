'use client';

import React from 'react';
import { useTooltip } from './TooltipContext';



function HeatMapItem({ tooltipContent, file, isPassing }) {
  const { onMouseOver, onMouseOut } = useTooltip();
  const handleMouseOver = (event) => {
    onMouseOver(event, tooltipContent, isPassing ? 'passing' : 'failing');
  };

  const className =
    isPassing ? 'p' : undefined;

  return (
    <a
      className={className}
      href={`https://github.com/vercel/next.js/blob/canary/${file}`}
      onMouseOver={handleMouseOver}
      onMouseOut={onMouseOut}
    />
  );
}

export default React.memo(HeatMapItem);

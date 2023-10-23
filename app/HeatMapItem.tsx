'use client';

import React, { useState, useEffect } from 'react';
import { useTooltip } from './TooltipContext';

function getTooltipContent(data) {
  let fileparts = data.file.split('/');
  let filename = fileparts.pop();
  let filepath = fileparts.join('/').replace(/\/__tests__/, '');
  let testname = data.test.slice(2);
  return `${filename}\n→ ${filepath}\n\nit("${testname}")`;
}

function HeatMapItem({ file, test, status }) {
  const { onMouseOver, onMouseOut } = useTooltip();
  const handleMouseOver = (event) => {
    onMouseOver(event, getTooltipContent({ file, test }), status);
  };

  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  const className =
    status === 'passing' ? 'p' : status === 'failingInDev' ? 'f' : undefined;

  // Sending this data down the wire as HTML is expensive, so let's only send
  // it once (via the page props) and rely on the fact that the more idiomatic
  // js will swap this out for anchor links once the page has loaded.
  if (!show)
    return (
      <a
        className={className}
        onClick={() => {
          window.location.href = `https://github.com/vercel/next.js/blob/canary/${file}`;
        }}
      />
    );

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      href={`https://github.com/vercel/next.js/blob/canary/${file}`}
      onMouseOver={handleMouseOver}
      onMouseOut={onMouseOut}
    >
      {status}: {test}
    </a>
  );
}

export default React.memo(HeatMapItem);

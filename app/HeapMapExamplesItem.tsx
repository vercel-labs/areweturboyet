'use client';

import React, { useState, useEffect } from 'react';
import { useTooltip } from './TooltipContext';

function getTooltipContent({ exampleName, isPassing }) {
    return `${exampleName}: ${isPassing}`;
}

function HeatMapExamplesItem({ exampleName, isPassing }) {
    const { onMouseOver, onMouseOut } = useTooltip();
    const handleMouseOver = (event) => {
        onMouseOver(event, getTooltipContent({ exampleName, isPassing }), isPassing ? 'passing' : 'failing');
    };

    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, []);

    const className =
        isPassing ? 'p' : undefined;

    // Sending this data down the wire as HTML is expensive, so let's only send
    // it once (via the page props) and rely on the fact that the more idiomatic
    // js will swap this out for anchor links once the page has loaded.
    if (!show)
        return (
            <a
                className={className}
                onClick={() => {
                    window.location.href = `https://github.com/vercel/next.js/blob/canary/examples/${exampleName}`;
                }}
            />
        );

    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            href={`https://github.com/vercel/next.js/blob/canary/examples/${exampleName}`}
            onMouseOver={handleMouseOver}
            onMouseOut={onMouseOut}
        >
            {isPassing}: {exampleName}
        </a>
    );
}

export default React.memo(HeatMapExamplesItem);

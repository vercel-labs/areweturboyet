import { Suspense } from 'react';
import ProgressBar from './ProgressBar';
import IsItReady from './IsItReady';
import GraphData from './GraphData';
import HeatMap from './HeatMap';
import { TooltipProvider } from './TooltipContext';

export default function Homepage() {
  return (
    <TooltipProvider>
      <Suspense fallback={null}>
        <ProgressBar />
      </Suspense>
      <Suspense fallback={null}>
        <IsItReady />
      </Suspense>
      <Suspense fallback={null}>
        <GraphData />
      </Suspense>
      <Suspense fallback={null}>
        <HeatMap />
      </Suspense>
    </TooltipProvider>
  );
}

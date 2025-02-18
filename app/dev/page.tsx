import { Suspense } from "react";
import IsItReadyDevelopment from "../IsItReadyDevelopment";
import GraphDataDevelopment from "../GraphDataDevelopment";
import HeatMapDevelopment from "../HeatMapDevelopment";
import { TooltipProvider } from "../TooltipContext";
import Footer from "../Footer";
import ProgressBarDevelopment from "../ProgressBarDevelopment";
import { HeapMapExamples } from "app/HeatMapExamples";

export default function DevelopmentPage() {
  return (
    <TooltipProvider>
      {/* Development */}
      <Suspense fallback={null}>
        <ProgressBarDevelopment />
      </Suspense>
      <div className="mx-4">
        <Suspense fallback={null}>
          <IsItReadyDevelopment />
        </Suspense>
        <Suspense fallback={null}>
          <GraphDataDevelopment />
        </Suspense>
        <h2 className="text-4xl my-2">Tests</h2>
        <Suspense fallback={null}>
          <HeatMapDevelopment />
        </Suspense>

        <h2 className="text-4xl my-2">Examples</h2>
        <Suspense fallback={null}>
          <HeapMapExamples />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </TooltipProvider>
  );
}

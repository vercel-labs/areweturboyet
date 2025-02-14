import { Suspense } from "react";
import { TooltipProvider } from "../TooltipContext";
import Footer from "../Footer";
import GraphDataProduction from "../GraphDataProduction";
import HeatMapProduction from "../HeatMapProduction";
import ProgressBarProduction from "../ProgressBarProduction";
import IsItReadyProduction from "../IsitReadyProduction";

export default function BuildPage() {
  return (
    <TooltipProvider>
      {/* Production */}
      <Suspense fallback={null}>
        <ProgressBarProduction />
      </Suspense>
      <div className="mx-4">
        <Suspense fallback={null}>
          <IsItReadyProduction />
        </Suspense>
        <Suspense fallback={null}>
          <GraphDataProduction />
        </Suspense>
        <h2 className="text-4xl my-2">Tests</h2>
        <Suspense fallback={null}>
          <HeatMapProduction />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </TooltipProvider>
  );
}

import { Suspense } from 'react';
import IsItReadyDevelopment from '../IsItReadyDevelopment';
import GraphDataDevelopment from '../GraphDataDevelopment';
import HeatMapDevelopment from '../HeatMapDevelopment';
import { TooltipProvider } from '../TooltipContext';
import Footer from '../Footer';
import ProgressBarDevelopment from '../ProgressBarDevelopment';

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
                <Suspense fallback={null}>
                    <HeatMapDevelopment />
                </Suspense>
            </div>

            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </TooltipProvider>
    );
}

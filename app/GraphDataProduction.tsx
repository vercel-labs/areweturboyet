import Graph from './Graph';
import { getDevelopmentTestRuns, getProductionTestRuns } from './data';

export default async function GraphDataProduction() {
    const { graphData } = await getDevelopmentTestRuns();
    if (graphData.length === 0) {
        return null
    }

    return <Graph graphData={graphData} />;
}

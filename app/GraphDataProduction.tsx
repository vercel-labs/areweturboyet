import { getProductionTestRuns } from "./data";
import Graph from "./Graph";

export default async function GraphDataProduction() {
  const { graphData } = await getProductionTestRuns();
  if (graphData.length === 0) {
    return null;
  }

  return <Graph graphData={graphData} />;
}

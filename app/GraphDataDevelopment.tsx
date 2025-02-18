import Graph from "./Graph";
import { getDevelopmentTestRuns } from "./data";

export default async function GraphDataDevelopment() {
  const { graphData } = await getDevelopmentTestRuns();

  return <Graph graphData={graphData} />;
}

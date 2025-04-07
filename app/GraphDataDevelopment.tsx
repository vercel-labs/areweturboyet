import { getDevelopmentTestRuns } from "./data";
import Graph from "./Graph";

export default async function GraphDataDevelopment() {
  const { graphData } = await getDevelopmentTestRuns();

  return <Graph graphData={graphData} />;
}

import Graph from './Graph';
import { getTestRuns } from './data';

export default async function GraphData() {
  const { graphData } = await getTestRuns();

  return <Graph graphData={graphData} />;
}

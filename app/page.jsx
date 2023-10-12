import ProgressBar from "../components/ProgressBar";
import IsItReady from "../components/IsItReady";
import Graph from "../components/Graph";
import HeatMap from "../components/HeatMap";
import { TooltipProvider } from "../components/TooltipContext";
import { kv } from "@vercel/kv";

function processGraphData(rawGraphData) {
  let toInt = (str) => parseInt(str, 10);
  return rawGraphData.map((string, index) => {
    let [gitHash, dateStr, progress] = string.split(/[\t]/);
    let dateParts = dateStr.split(/[ :-]/).map(toInt);
    let [year, month, day, hours, minutes, seconds] = dateParts;
    let date = new Date(year, month - 1, day, hours, minutes, seconds);
    let timestamp = date.getTime();
    let [passing, total] = progress.split(/\//).map(toInt);
    let percent = parseFloat(((passing / total) * 100).toFixed(1), 10);
    return {
      index,
      gitHash,
      date,
      dateStr,
      timestamp,
      total,
      passing,
      percent,
      x: date,
      y: percent,
    };
  });
}

export default async function Home() {
  const [graphData, failing, passing] = await Promise.all([
    kv.lrange("test-runs", 0, -1).then(processGraphData),
    kv.get("failing-tests"),
    kv.get("passing-tests"),
  ]);
  const testData = { passing, failingInDev: "", failing };
  const mostRecent = graphData[graphData.length - 1];

  return (
    <TooltipProvider>
      <ProgressBar data={mostRecent} />
      <IsItReady data={mostRecent} testData={testData} />
      <Graph graphData={graphData} />
      <HeatMap testData={testData} />
    </TooltipProvider>
  );
}

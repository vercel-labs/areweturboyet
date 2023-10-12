import App from '../components/App'
import {kv} from "@vercel/kv"

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
    return {index, gitHash, date, dateStr, timestamp, total, passing, percent, x: date, y: percent};
  });
}

export default async function Home() {
  let [
    graphData,
    failing,
    passing,
  ] = await Promise.all([
    kv.lrange("test-runs", 0, -1).then(processGraphData),
    kv.get("failing-tests"),
    kv.get("passing-tests"),
  ])
  let testData = {passing, failingInDev: "", failing};

  return (
    <App
        testData={testData}
        graphData={graphData}
        mostRecent={graphData[graphData.length - 1]}
      />
  )
}

import App from '../components/App'
import rawGraphData from '../data/fiber-tests.js';
import passing from '../data/tests-passing.js';
import failingInDev from '../data/tests-passing-except-dev.js';
import failing from '../data/tests-failing.js';

function processGraphData(rawGraphData) {
  let toInt = (str) => parseInt(str, 10);
  return rawGraphData.trim().split('\n').map((string, index) => {
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

export default function Home() {
  let testData = {passing, failingInDev, failing};
  let graphData = processGraphData(rawGraphData);

  return (
    <App
        testData={testData}
        graphData={graphData}
        mostRecent={graphData[graphData.length - 1]}
      />
  )
}

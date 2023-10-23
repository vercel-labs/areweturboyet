import 'server-only';
import { cache } from 'react';
import { kv } from '@vercel/kv';

function processGraphData(rawGraphData) {
  let toInt = (str) => parseInt(str, 10);
  return rawGraphData.map((string, index) => {
    let [gitHash, dateStr, progress] = string.split(/[\t]/);
    let dateParts = dateStr.split(/[ :-]/).map(toInt);
    let [year, month, day, hours, minutes, seconds] = dateParts;
    let date = new Date(year, month - 1, day, hours, minutes, seconds);
    let timestamp = date.getTime();
    let [passing, total] = progress.split(/\//).map(toInt);
    let percent = parseFloat(((passing / total) * 100).toFixed(1));

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

export const getTestResults = cache(async () => {
  const [failing, passing] = await Promise.all([
    kv.get('failing-tests'),
    kv.get('passing-tests'),
  ]);

  return { passing, failing };
});

export const getTestRuns = cache(async () => {
  const [graphData] = await Promise.all([
    kv.lrange('test-runs', 0, -1).then(processGraphData),
  ]);

  const mostRecent = graphData[graphData.length - 1];
  return { graphData, mostRecent };
});

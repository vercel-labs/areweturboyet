import 'server-only';
import { unstable_cache } from 'next/cache';
import { kv } from '@vercel/kv';

function processGraphData(rawGraphData) {
  let toInt = (str) => parseInt(str, 10);
  return rawGraphData.map((string, index) => {
    let [gitHash, dateStr, progress] = string.split(/[\t]/);
    let date = new Date(dateStr);
    let timestamp = date.getTime();
    let [passing, total] = progress.split(/\//).map(toInt);
    let percent = parseFloat(((passing / total) * 100).toFixed(1));

    return {
      index,
      gitHash,
      date,
      timestamp,
      total,
      passing,
      percent,
      x: date,
      y: percent,
    };
  });
}

export const getTestResults = unstable_cache(
  async () => {
    const [failing, passing] = await Promise.all([
      kv.get('failing-tests'),
      kv.get('passing-tests'),
    ]);

    return { passing, failing };
  },
  ['test-results-new'],
  {
    revalidate: 600,
  }
);

export const getTestRuns = unstable_cache(
  async () => {
    const [graphData] = await Promise.all([
      kv.lrange('test-runs', 0, -1).then(processGraphData),
    ]);

    const mostRecent = graphData[graphData.length - 1];
    return { graphData, mostRecent };
  },
  ['test-runs-new'],
  {
    revalidate: 600,
  }
);

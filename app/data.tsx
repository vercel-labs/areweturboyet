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

export const getDevelopmentTestResults = unstable_cache(
  async () => {
    const [failing, passing] = await Promise.all([
      kv.get('failing-tests'),
      kv.get('passing-tests'),
    ]);

    if (failing === null && passing === null) {
      return null
    }

    return { passing, failing };
  },
  ['test-results-new'],
  {
    revalidate: 600,
  }
);

export const getProductionTestResults = unstable_cache(
  async () => {
    const [failing, passing] = await Promise.all([
      kv.get('failing-tests-production'),
      kv.get('passing-tests-production'),
    ]);

    if (failing === null && passing === null) {
      return null
    }

    return { passing, failing };
  },
  ['test-results-new-production'],
  {
    revalidate: 600,
  }
);

export const getExamplesResults = unstable_cache(
  async () => {
    const data: { [exampleName: string]: /* isPassing */ boolean } = await kv.get('examples-data')
    return data
  },
  ['examples-results'],
  {
    revalidate: 600,
  }
);


export const getDevelopmentTestRuns = unstable_cache(
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

export const getProductionTestRuns = unstable_cache(
  async () => {
    const [graphData] = await Promise.all([
      kv.lrange('test-runs-production', 0, -1).then(processGraphData),
    ]);

    const mostRecent = graphData[graphData.length - 1];
    return { graphData, mostRecent };
  },
  ['test-runs-new-production'],
  {
    revalidate: 600,
  }
);

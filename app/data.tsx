import "server-only";
import { kv } from "@vercel/kv";
import { revalidateTag, unstable_cache } from "next/cache";
import { Bundler, getBundler } from "./bundler";

const kvPrefix = getBundler() === Bundler.Rspack ? "rspack-" : "";
const bundlerTag = getBundler() === Bundler.Rspack ? "rspack" : "turbopack";

export function revalidateAll() {
  revalidateTag(bundlerTag, "max");
}

function processGraphData(rawGraphData: string[]) {
  return rawGraphData
    .map((string) => {
      const [gitHash, dateStr, progress] = string.split(/[\t]/);
      // convert to a unix epoch timestamp
      const date = Date.parse(dateStr);
      const [passing, total] = progress.split(/\//).map(parseFloat);
      const percent = parseFloat(((passing / total) * 100).toFixed(1));

      return {
        gitHash: gitHash.slice(0, 7),
        date,
        total,
        passing,
        percent,
      };
    })
    .filter(({ date, percent }) => Number.isFinite(date) && percent > 0);
}

export const getDevelopmentTestResults = unstable_cache(
  async () => {
    const [failing, passing] = await Promise.all([
      kv.get(`${kvPrefix}failing-tests`),
      kv.get(`${kvPrefix}passing-tests`),
    ]);

    if (failing === null && passing === null) {
      return null;
    }

    return { passing, failing };
  },
  [kvPrefix, "test-results-new"],
  {
    tags: [bundlerTag],
    revalidate: 600,
  },
);

export const getProductionTestResults = unstable_cache(
  async () => {
    const [failing, passing] = await Promise.all([
      kv.get(`${kvPrefix}failing-tests-production`),
      kv.get(`${kvPrefix}passing-tests-production`),
    ]);

    if (failing === null && passing === null) {
      return null;
    }

    return { passing, failing };
  },
  [kvPrefix, "test-results-new-production"],
  {
    tags: [bundlerTag],
    revalidate: 600,
  },
);

export const getExamplesResults = unstable_cache(
  async () => {
    const data: { [exampleName: string]: /* isPassing */ boolean } =
      await kv.get(`${kvPrefix}examples-data`);
    return data;
  },
  [kvPrefix, "examples-results"],
  {
    tags: [bundlerTag],
    revalidate: 600,
  },
);

export const getDevelopmentTestRuns = unstable_cache(
  async () => {
    const [graphData] = await Promise.all([
      kv.lrange(`${kvPrefix}test-runs`, 0, -1).then(processGraphData),
    ]);

    const mostRecent = graphData[graphData.length - 1];
    return { graphData, mostRecent };
  },
  [kvPrefix, "test-runs-new"],
  {
    tags: [bundlerTag],
    revalidate: 600,
  },
);

export const getProductionTestRuns = unstable_cache(
  async () => {
    const [graphData] = await Promise.all([
      kv
        .lrange(`${kvPrefix}test-runs-production`, 0, -1)
        .then(processGraphData),
    ]);

    const mostRecent = graphData[graphData.length - 1];
    return { graphData, mostRecent };
  },
  [kvPrefix, "test-runs-new-production"],
  {
    tags: [bundlerTag],
    revalidate: 600,
  },
);

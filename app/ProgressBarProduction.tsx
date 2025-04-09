import { getBundler } from "./bundler";
import { getProductionTestRuns } from "./data";
import { ProgressBar } from "./ProgressBar";

export default async function ProgressBarProduction() {
  const { mostRecent } = await getProductionTestRuns();

  if (!mostRecent) {
    return null;
  }

  return (
    <ProgressBar bundler={getBundler()} mostRecent={mostRecent} dev={false} />
  );
}

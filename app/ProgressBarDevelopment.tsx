import { getBundler } from "./bundler";
import { getDevelopmentTestRuns } from "./data";
import { ProgressBar } from "./ProgressBar";

export default async function ProgressBarDevelopment() {
  const { mostRecent } = await getDevelopmentTestRuns();

  if (!mostRecent) {
    return null;
  }

  return (
    <ProgressBar bundler={getBundler()} mostRecent={mostRecent} dev={true} />
  );
}

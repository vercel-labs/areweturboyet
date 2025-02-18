import { ProgressBar } from "./ProgressBar";
import { getProductionTestRuns } from "./data";

export default async function ProgressBarProduction() {
  const { mostRecent } = await getProductionTestRuns();

  if (!mostRecent) {
    return null;
  }

  return <ProgressBar mostRecent={mostRecent} dev={false} />;
}

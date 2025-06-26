import { Bundler, getBundler } from "./bundler";
import { getProductionTestRuns } from "./data";
import IsItReady from "./IsItReady";

export default async function IsItReadyProduction() {
  const { mostRecent } = await getProductionTestRuns();

  if (!mostRecent) {
    return null;
  }

  return (
    <IsItReady
      title="Production"
      description="build tests"
      percent={mostRecent.percent}
      decision={getBundler() === Bundler.Turbopack ? "yes" : "no"}
    />
  );
}

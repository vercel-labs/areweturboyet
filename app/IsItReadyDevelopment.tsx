import { Bundler, getBundler } from "./bundler";
import { getDevelopmentTestRuns } from "./data";
import IsItReady from "./IsItReady";

export default async function IsItReadyDevelopment() {
  const { mostRecent } = await getDevelopmentTestRuns();

  if (!mostRecent) {
    return null;
  }

  return (
    <IsItReady
      title="Development"
      description="dev tests"
      percent={mostRecent.percent}
      decision={getBundler() === Bundler.Turbopack ? "yes" : "no"}
    />
  );
}

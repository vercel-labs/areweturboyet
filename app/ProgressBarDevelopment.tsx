import { getDevelopmentTestRuns } from "./data";
import { ProgressBar } from "./ProgressBar";

export default async function ProgressBarDevelopment() {
  const { mostRecent } = await getDevelopmentTestRuns();

  return (
    <>
      <ProgressBar mostRecent={mostRecent} dev={true} />
    </>
  );
}

"use server";

import { ProgressBar } from "./ProgressBar";
import { getDevelopmentTestRuns } from "./data";

export default async function ProgressBarDevelopment() {
  const { mostRecent } = await getDevelopmentTestRuns();

  return (
    <>
      <ProgressBar mostRecent={mostRecent} dev={true} />
    </>
  );
}

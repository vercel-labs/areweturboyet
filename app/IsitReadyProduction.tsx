"use server";

import { getProductionTestRuns } from "./data";

export default async function IsItReadyProduction() {
  const { mostRecent } = await getProductionTestRuns();

  if (!mostRecent) {
    return null;
  }

  let decision = mostRecent.percent === 100;
  let passing =
    mostRecent.percent === 100 ? "All" : mostRecent.percent.toFixed(1) + "% of";

  return decision ? (
    <section className="IsItReady">
      <h1 className="text-4xl my-6 lg:text-6xl">
        Production: YES<i aria-hidden>{"\ud83c\udf89"}</i>
      </h1>
    </section>
  ) : (
    <section className="IsItReady">
      <h1 className="text-4xl my-6 lg:text-6xl IsItReadyNoText">
        Production: NO
      </h1>
      <p className="IsItReadyDetails">
        {passing} next build tests are passing though
        <i aria-hidden>{"\u2705"}</i>
      </p>
    </section>
  );
}

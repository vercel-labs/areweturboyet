"use server";

import { HeapMap } from "./HeatMap";
import { getProductionTestResults } from "./data";

export default async function HeatMapProduction() {
  const data = await getProductionTestResults();

  if (!data) {
    return null;
  }

  return (
    <section className="HeatMap">
      <HeapMap testResults={data} />
    </section>
  );
}

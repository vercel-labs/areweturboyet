import { getProductionTestResults } from "./data";
import { HeapMap } from "./HeatMap";

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

import { getExamplesResults } from "./data";
import HeatMapItem from "./HeatMapItem";

export async function HeapMapExamples() {
  const examplesResult = await getExamplesResults();

  if (!examplesResult.length) {
    return null;
  }

  let items = [];
  for (const exampleName in examplesResult) {
    const isPassing = examplesResult[exampleName];
    items.push(
      <HeatMapItem
        key={exampleName}
        tooltipContent={exampleName}
        href={`https://github.com/vercel/next.js/blob/canary/examples/${exampleName}`}
        isPassing={isPassing}
      />,
    );
  }

  return (
    <>
      <h2 className="text-4xl my-2">Examples</h2>
      <section className="HeatMap">{items}</section>
    </>
  );
}

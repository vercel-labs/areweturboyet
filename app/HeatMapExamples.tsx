import { getExamplesResults } from "./data";
import HeatMapItem from "./HeatMapItem";

export async function HeapMapExamples() {
  const examplesResult = await getExamplesResults();
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

  return <section className="HeatMap">{items}</section>;
}

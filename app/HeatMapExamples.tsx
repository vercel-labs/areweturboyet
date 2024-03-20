import HeatMapExamplesItem from './HeapMapExamplesItem';
import { getExamplesResults } from './data';

export async function HeapMapExamples() {
    const examplesResult = await getExamplesResults();
    let items = [];
    for (const exampleName in examplesResult) {
        const isPassing = examplesResult[exampleName];
        items.push(<HeatMapExamplesItem key={exampleName} exampleName={exampleName} isPassing={isPassing} />);
    }

    return <section className="HeatMap">{items}</section>;
}
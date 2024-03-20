import { HeapMap } from './HeatMap';
import { getDevelopmentTestResults } from './data';

export default async function HeatMapDevelopment() {
  const data = await getDevelopmentTestResults();

  if (!data) {
    return null
  }

  return <section className="HeatMap"><HeapMap testResults={data} /></section>;
}

import { getTestResults } from './data';
import HeatMapItem from './HeatMapItem';

export default async function HeatMap() {
  const data = await getTestResults();

  let index = 0;
  let testData = {};

  Object.keys(data).forEach((status) => {
    data[status].split('\n\n').forEach((testGroup) => {
      let lines = testGroup.replace(/\n$/, '').split('\n');
      let file = lines[0];
      let tests = lines.slice(1);
      if (!testData[file]) {
        testData[file] = {};
      }
      testData[file][status] = tests.map((test) => {
        return (
          <HeatMapItem key={index++} file={file} test={test} status={status} />
        );
      });
    });
  });

  let items = [];
  Object.keys(testData).forEach((file) => {
    let testList = testData[file];
    items = items.concat(
      Object.keys(testList).map((status) => {
        return testList[status];
      })
    );
  });

  return <div className="HeatMap">{items}</div>;
}

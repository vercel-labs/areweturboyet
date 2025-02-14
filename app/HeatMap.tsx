import HeatMapItem from "./HeatMapItem";

function getTooltipContent(data) {
  let testname = data.test.slice(2);
  return `it("${testname}")`;
}

export function HeapMap({ testResults }) {
  let index = 0;
  let testData = {};

  Object.keys(testResults).forEach((status) => {
    const value = testResults[status];
    if (!value) return;
    value.split("\n\n").forEach((testGroup) => {
      let lines = testGroup.replace(/\n$/, "").split("\n");
      let file = lines[0];
      let tests = lines.slice(1);
      if (!testData[file]) {
        testData[file] = {};
      }
      testData[file][status] = tests.map((test) => {
        const tooltipContent = getTooltipContent({ file, test });
        return (
          <HeatMapItem
            key={index++}
            tooltipContent={tooltipContent}
            href={`https://github.com/vercel/next.js/blob/canary/${file}`}
            isPassing={status === "passing"}
          />
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
      }),
    );
  });

  return <>{items}</>;
}


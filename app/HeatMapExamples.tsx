import HeatMapItem from './HeatMapItem';

export function HeapMapExamples({ testResults }) {
    let i = 0;
    let testData = {};

    for (const status in testResults) {
        const value = testResults[status];
        if (!value) continue;
        value.split('\n\n').forEach((testGroup) => {
            let lines = testGroup.replace(/\n$/, '').split('\n');
            let file = lines[0];
            let tests = lines.slice(1);
            if (!testData[file]) {
                testData[file] = {};
            }
            testData[file][status] = tests.map((test) => {
                return (
                    <HeatMapItem key={i++} file={file} test={test} status={status} />
                );
            });
        });
    }

    let items = [];
    for (const file in testData) {
        let testList = testData[file];
        for (const status in testList) {
            items = items.concat(testList[status]);
        }
    }

    return <>{items}</>;
}
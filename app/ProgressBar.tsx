import { getTestRuns } from './data';

export default async function ProgressBar() {
  const { mostRecent } = await getTestRuns();

  return (
    <div className="ProgressBar">
      <div
        className="ProgressBarFill"
        style={{ width: mostRecent.percent + '%' }}
      >
        {`${mostRecent.passing} of ${mostRecent.total} development integration / end-to-end tests passing`}
      </div>
    </div>
  );
}

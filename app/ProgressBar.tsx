import { getTestRuns } from './data';

export default async function ProgressBar() {
  const { mostRecent } = await getTestRuns();

  return (
    <section className="ProgressBar">
      <div
        className="ProgressBarFill"
        style={{ width: mostRecent.percent + '%' }}
      >
        {`${mostRecent.passing} of ${mostRecent.total} next dev tests passing (${mostRecent.total - mostRecent.passing} left for 100%)`}
      </div>
    </section>
  );
}

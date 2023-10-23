import { getTestRuns } from './data';

export default async function IsItReady() {
  const { mostRecent } = await getTestRuns();

  let decision = mostRecent.percent === 100;
  let passing =
    mostRecent.percent === 100 ? 'All' : mostRecent.percent + '% of';

  let releaseLink = (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://turbo.build/pack"
    >
      Try the Beta!
    </a>
  );

  return decision ? (
    <div className="IsItReady">
      <h1 className="IsItReadyText">
        Yes<i>{'\ud83c\udf89'}</i>
      </h1>
      <p className="IsItReadyYes">{releaseLink}</p>
    </div>
  ) : (
    <div className="IsItReady">
      <h1 className="IsItReadyText">No</h1>
      <p className="IsItReadyDetails">
        {passing} tests are passing though
        <i>{'\u2705'}</i>
      </p>
    </div>
  );
}

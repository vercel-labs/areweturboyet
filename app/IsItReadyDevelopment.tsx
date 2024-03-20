import { getDevelopmentTestRuns } from './data';

export default async function IsItReadyDevelopment() {
  const { mostRecent } = await getDevelopmentTestRuns();

  let decision = mostRecent.percent === 100;
  let passing =
    mostRecent.percent === 100 ? 'All' : mostRecent.percent + '% of';


  return decision ? (
    <section className="IsItReady">
      <h1 className="IsItReadyText">
        Development: YES<i aria-hidden>{'\ud83c\udf89'}</i>
      </h1>
    </section>
  ) : (
    <section className="IsItReady">
      <h1 className="IsItReadyText">Development: NO</h1>
      <p className="IsItReadyDetails">
        {passing} next dev tests are passing though
        <i aria-hidden>{'\u2705'}</i>
      </p>
    </section>
  );
}

import { getDevelopmentTestRuns, getProductionTestRuns } from './data';

export default async function IsItReadyExamples() {
    const { mostRecent } = await getDevelopmentTestRuns();

    if (!mostRecent) {
        return null
    }

    let decision = mostRecent.percent === 100;
    let passing =
        mostRecent.percent === 100 ? 'All' : mostRecent.percent + '% of';


    return decision ? (
        <section className="IsItReady">
            <h1 className="IsItReadyText">
                Examples: YES<i aria-hidden>{'\ud83c\udf89'}</i>
            </h1>
        </section>
    ) : (
        <section className="IsItReady">
            <h1 className="IsItReadyText">Examples: NO</h1>
            <p className="IsItReadyDetails">
                {passing} of examples are passing though
                <i aria-hidden>{'\u2705'}</i>
            </p>
        </section>
    );
}

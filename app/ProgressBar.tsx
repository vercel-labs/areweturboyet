export function ProgressBar({ mostRecent, dev }) {
    return (
        <section className="ProgressBar">
            <div
                className="ProgressBarFill"
                style={{ width: mostRecent.percent + '%' }}
            >
                {`${mostRecent.passing} of ${mostRecent.total} ${dev ? `next dev` : 'next build'} tests passing (${mostRecent.total - mostRecent.passing} left for 100%)`}
            </div>
        </section>
    );
}

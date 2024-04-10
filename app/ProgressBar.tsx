import Switcher from "./Switcher";


export function ProgressBar({ mostRecent, dev }) {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
            <section className="">
                <div
                    className="text-lg font-semibold"
                >
                    {`${mostRecent.passing} of ${mostRecent.total} ${dev ? `next dev` : 'next build'} tests passing (${mostRecent.total - mostRecent.passing} left for 100%)`}
                </div>
            </section>
            <Switcher />
        </div>
    );
}

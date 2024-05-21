import Switcher from "./Switcher";

export function ProgressBar({ mostRecent, dev }) {
  const testsLeft = mostRecent.total - mostRecent.passing;
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      <section className="">
        <div className="text-lg font-semibold">
          <span className="block sm:inline-block">
            {mostRecent.passing} of {mostRecent.total}{" "}
            {dev ? `next dev` : "next build"} tests passing&nbsp;
          </span>
          <span className="block sm:inline-block">
            ({testsLeft > 0 ? <>{testsLeft} left for 100%</> : "100%"})
          </span>
        </div>
      </section>
      <Switcher />
    </div>
  );
}

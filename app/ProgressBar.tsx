"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/ui/dark-mode-toggle";
import IconRspack from "@/public/icons/rspack.png";
import IconTurbopackDark from "@/public/icons/turbopack-dark-background.png";
import IconTurbopackLight from "@/public/icons/turbopack-light-background.png";
import { Bundler } from "./bundler";
import Switcher from "./Switcher";

export function ProgressBar({ bundler, mostRecent, dev }) {
  const testsLeft = mostRecent.total - mostRecent.passing;
  const theme = useTheme();
  const iconSrc =
    bundler === Bundler.Rspack
      ? IconRspack
      : theme.theme === "dark"
        ? IconTurbopackDark
        : IconTurbopackLight;
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-secondary border-b">
      <section className="text-lg">
        <span className="block sm:inline-block">
          <Image
            alt="Bundler logo"
            className="inline-block mr-4"
            src={iconSrc}
            width={24}
            height={24}
          />
          <span className="font-semibold">
            {mostRecent.passing} of {mostRecent.total}{" "}
            {dev ? `next dev` : "next build"} tests passing&nbsp;
          </span>
        </span>
        <span className="block sm:inline-block">
          ({testsLeft > 0 ? <>{testsLeft} left for 100%</> : "100%"})
        </span>
      </section>
      <div className="flex gap-x-4">
        <Switcher />
        <ModeToggle />
      </div>
    </div>
  );
}

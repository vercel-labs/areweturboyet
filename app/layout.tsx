import "./globals.css";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "@/components/theme-provider";
import IconRspack from "@/public/icons/rspack.png";
import IconTurbopackDark from "@/public/icons/turbopack-dark-background.png";
import IconTurbopackLight from "@/public/icons/turbopack-light-background.png";
import { Bundler, getBundler } from "./bundler";

const geist = localFont({
  src: [
    {
      path: "./Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Geist-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata =
  getBundler() === Bundler.Turbopack
    ? {
        title: "Are We Turbo Yet?",
        description:
          "Progress towards 100% of tests passing for Turbopack in Next.js",
        // N.B. media queries on icons works with Chrome, but not with Safari or
        // Firefox. Just put the light scheme last, so it falls back to that.
        icons: [
          {
            media: "(prefers-color-scheme: dark)",
            url: IconTurbopackDark.src,
            type: "image/png",
          },
          {
            media: "(prefers-color-scheme: light)",
            url: IconTurbopackLight.src,
            type: "image/png",
          },
        ],
      }
    : {
        title: "Are We Rspack Yet?",
        description:
          "Progress towards 100% of tests passing for Rspack in Next.js",
        icons: [
          {
            url: IconRspack.src,
            type: "image/png",
          },
        ],
      };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(geist.className, "bg-background text-foreground")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main id="root">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

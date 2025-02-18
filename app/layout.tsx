import "./globals.css";
import clsx from "clsx";
import localFont from "next/font/local";

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

export const metadata = {
  title: "Are We Turbo Yet?",
  description:
    "Progress towards 100% of tests passing for Turbopack in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(geist.className, "bg-background text-foreground")}>
        <main id="root">{children}</main>
      </body>
    </html>
  );
}

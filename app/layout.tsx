import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

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

import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
// import DarkVeil from "@/components/ui/animated/dark-veil";

const font = Figtree({
  weight: ["300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InsightAI",
  description: "Generate viral clips from podcasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        {/* <div className="w-full h-screen fixed -z-10">
          <DarkVeil />
        </div> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

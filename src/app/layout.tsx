import type { Metadata } from "next";
import "./globals.css";
import db from "../lib/supabase/db";
import { ThemeProvider } from "../lib/providers/next-theme-provider";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import AppStateProvider from "../lib/providers/state-provider";
import { Toaster } from "../components/ui/toaster";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planner",
  description: "A planner where you can store ideas, routine and lot more.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/p.svg",
        href: "/icons/p.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/p-dark.svg",
        href: "/icons/p-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge('bg-background', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <AppStateProvider>
                {children}
                <Toaster />
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

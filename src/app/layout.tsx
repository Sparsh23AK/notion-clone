import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import db from "../lib/supabase/db";
import { ThemeProvider } from "../lib/providers/next-theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planner",
  description: "A planner where you can store ideas, routine and lot more.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/p.svg",
        href: "/p.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/p-dark.svg",
        href: "/p-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(db);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {" "}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

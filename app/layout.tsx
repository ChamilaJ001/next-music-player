import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { playlists } from "@/data/playlists";
import { Menu } from "@/components/menu";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Musix",
  description: "Generated by create next app",
  icons: {
    icon: "/img/logo-2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              baseTheme: dark,
            }}
          >
            <Menu />
            <div className="border-t">
              <div className="bg-background">
                <div className="grid grid-cols-5 lg:grid-cols-6 gap-1">
                  <Sidebar playlists={playlists} className="hidden lg:block" />
                  <div className="col-span-5">{children}</div>
                </div>
              </div>
            </div>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

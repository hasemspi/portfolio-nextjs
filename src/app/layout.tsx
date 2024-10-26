import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderNav from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";



// Define local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the document
export const metadata: Metadata = {
  title: "protfilo personal",
  description: "Generated by create next app",
};


const AppThemeProvider = dynamic(() => import("./themeswitch/theme"), {
  ssr: true,
});
// Define the RootLayout component
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const theme = (await cookies()).get("__theme__")?.value || "system";

  return (
    <html
    className={theme}
    style={theme !== "system" ? { colorScheme: theme } : {}}
      lang="en"
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <AppThemeProvider attribute="class" defaultTheme={theme} enableSystem>
          <HeaderNav />
          {children}
          <Footer />
        </AppThemeProvider>
      </body>
    </html>
  );
}

import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Samir Pandey Portfolio",
  description: "My developer portfolio",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <div className="max-w-7xl mx-auto">{children}</div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

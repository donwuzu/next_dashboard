import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Next Dashboard App",
  description: "This is a dashboard.",
  keywords: "next.js, react, awesome app",
  
};

export default function RootLayout({
  children,
}: {
      children: React.ReactNode;
    })
{

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

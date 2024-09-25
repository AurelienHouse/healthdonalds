import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/footer";

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

export const metadata: Metadata = {
  title: "HealthDonalds",
  description: "Eat healthy, stay healthy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "antialiased",
          geistSans.variable,
          geistMono.variable,
          "h-full"
        )}
      >
        <Toaster />
        <div className="min-h-full flex flex-col border-x max-w-md mx-auto">
          <Header />
          <main className="flex-1 px-4 py-2">{children}</main>  
          <Footer />
        </div>
      </body>
    </html>
  );
}

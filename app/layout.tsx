import { AdminActions } from "@/components/features/admin/admin-actions";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Veggie House Mobile",
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
        <AdminActions />
        <div className="m-auto flex h-screen max-w-md flex-col border-x">
          <Header />
          <main className="max-h-[calc(100%_-_100px)] flex-1 p-4">
            {children}
          </main>{" "}
          <Footer />
        </div>
      </body>
    </html>
  );
}

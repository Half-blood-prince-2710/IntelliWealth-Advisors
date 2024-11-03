import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import {
  ClerkProvider,
  
} from '@clerk/nextjs'
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";


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
  title: "IntelliWealth Advisors",
  description: "Emphasizes intelligence in wealth management, highlighting the use of AI for informed decisions.",
};

// Description: Emphasizes intelligence in wealth management, highlighting the use of AI for informed decisions.

// Tagline: "Where Intelligence Meets Wealth."


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
          
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
          <div className="w-full h-screen flex flex-col overflow-hidden">
            <Toaster />
           <HydrationOverlay>{children}</HydrationOverlay>  
          </div>
        
      </body>
    </html>
        </ClerkProvider>
  );
}

import type { Metadata } from "next";

import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import Footer from "@/components/footer";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Catche",
    description: "Fast, Secure, and Anonymous File Sharing",
    openGraph: {
        title: "Catche",
        description: "Fast, Secure, and Anonymous File Sharing",
        url: "https://catche.vercel.app/",
        images: [
            {
                url: "https://i.postimg.cc/sXmVjyBP/664-2x-shots-so.png",
                width: 1200,
                height: 630,
                alt: "Screenshot"
            }
        ],
        siteName: "Catche"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "mx-auto md:max-w-6xl antialiased p-4 selection:bg-primary/50 selection:text-primary",
                    inter.className
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Footer />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}

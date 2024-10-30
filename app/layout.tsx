import type { Metadata } from "next";

import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
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
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}

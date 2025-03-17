import type { Metadata, Viewport } from "next";
import {
    Button,
    FieldGroup,
    Input,
    Kbd,
    LinkButton,
    SearchField,
    SearchFieldClearButton,
    Tag,
} from "@ui-kit.ai/components";
import packageJson from "@ui-kit.ai/components/package.json";
import { Search, Github, Sun, Component } from "lucide-react";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
    preload: true,
    subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
    title: "ui-kit.ai",
    description: "A component library for the AI age.",
    icons: [
        {
            rel: "icon",
            type: "image/x-icon",
            url: "/favicon-light.ico",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            type: "image/x-icon",
            url: "/favicon-dark.ico",
            media: "(prefers-color-scheme: dark)",
        },
    ],
};

export const viewport: Viewport = {
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
    width: "device-width",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} antialiased bg-muted-50
                            bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]`}
            >
                <nav className="bg-muted-50">
                    <div className="max-w-6xl flex items-center justify-between px-4 py-1 mx-auto">
                        <div className="flex gap-4 items-center">
                            <span className="font-semibold flex items-center gap-1">
                                <Component className="size-4" />
                                ui-kit.ai
                            </span>
                            <Tag className="h-5 text-xs px-1.5">
                                v{packageJson.version}
                            </Tag>
                        </div>
                        <div className="flex items-center justify-between gap-1 ">
                            <SearchField className="max-w-64">
                                <FieldGroup>
                                    <Input
                                        icon={<Search />}
                                        isBorderless
                                        placeholder="Search..."
                                    />
                                    <SearchFieldClearButton />
                                    <Kbd className="mr-2">/</Kbd>
                                </FieldGroup>
                            </SearchField>
                            <LinkButton isIcon variant="tertiary">
                                <Github />
                            </LinkButton>
                            <Button isIcon variant="tertiary">
                                <Sun />
                            </Button>
                        </div>
                    </div>
                </nav>
                <main className="max-w-6xl py-12 px-4 mx-auto">{children}</main>
            </body>
        </html>
    );
}

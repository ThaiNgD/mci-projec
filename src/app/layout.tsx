/* eslint-disable @typescript-eslint/no-explicit-any */
import TanStackProvider from "@/provider/TanStackProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content AI",
  description: "Tạo ra bởi Phần mềm Marketing",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  // Providing all messages to the client
  // side is the easiest way to get started
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body
        className={`font-googleSans antialiased`}
        suppressHydrationWarning={true}
      >
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}

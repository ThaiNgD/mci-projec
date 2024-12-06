/* eslint-disable @typescript-eslint/no-explicit-any */
import TanStackProvider from "@/provider/TanStackProvider";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";
import type { Metadata } from "next";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "Content AI",
  description: "Tạo ra bởi Phần mềm Marketing",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Ensure that the incoming `locale` is valid
  // Providing all messages to the client
  // side is the easiest way to get started
  return (
    <html suppressHydrationWarning={true}>
      <body
        className={`font-googleSans antialiased`}
        suppressHydrationWarning={true}
      >
        <MantineProvider withCssVariables>
          <TanStackProvider>{children}</TanStackProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

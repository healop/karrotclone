import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "./config/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Karrot Clone",
  authors: [{ name: "Nuri Kim" }],
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}

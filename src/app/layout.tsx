'use client';
import "./globals.css";
import Navbar from "mywebsite/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
    <main>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </main>
    </>
  );
}

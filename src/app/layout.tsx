'use client';
import "./globals.css";
import ButtonRedirect from "mywebsite/components/ButtonRedirect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <ButtonRedirect link={'https://github.com/MaciejPiekarczyk'} text={'Go to GitHub'} />
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

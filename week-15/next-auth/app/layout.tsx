import type { ReactNode } from 'react';
import "./globals.css";
import { Providers } from './providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

// app/layout.tsx
import React from 'react';
import './globals.css'; // Import your global styles here
import { Inter } from 'next/font/google'; // Example of using Google Fonts

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='text-center bg-gray-100 p-4 font-bold'>
            Medium Blogging App
        </div>
        {children}
      </body>
    </html>
  );
};

export default Layout;
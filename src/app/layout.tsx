import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'next-test-task-app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} flex h-screen overflow-hidden antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

import './globals.css';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const roobert = localFont({
  src: './fonts/Roobert-Medium.woff2',
  variable: '--font-roobert',
  weight: '100 900',
});

export const zentry = localFont({
  src: './fonts/ZENTRY-Regular.woff2',
  variable: '--font-zentry',
  weight: '100 900',
});

export const manuka = localFont({
  src: './fonts/manuka-bold-webfont.woff2',
  variable: '--font-manuka',
  weight: '100 900',
});

export const metadata = {
  title: 'Arcane Homepage',
  description: 'Arcane season 2',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${zentry.variable} ${roobert.variable} ${manuka.variable} ${inter.className} antialiased bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from "next/script"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Bio Links App",
  description: "Bio Links app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16965660139" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16965660139');
          `}
        </Script>
      <meta name="google-site-verification" content="ZHjwAqUy9CxIJO1Girknaq6wzeYyBKnDstOi9NLrF0s" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

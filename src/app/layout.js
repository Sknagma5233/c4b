import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// app/layout.tsx or pages/_app.tsx for older Next.js versions
import './globals.css';
import { Poppins, Montserrat, Rubik_Doodle_Shadow } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const rubikDoodle = Rubik_Doodle_Shadow({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-doodle',
});

export const metadata = {
  title: 'My App',
  description: 'Example App',
};



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} ${rubikDoodle.variable} antialiased`}
      >
      {children}
      </body>
    </html>
  );
}

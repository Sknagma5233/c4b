import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Code4Bharat - Cutting-Edge IT Solutions",
  description:
    "Unlock your full potential with our tailored technology services. From innovative software development to robust cybersecurity, we empower your business to thrive in the digital age.",
  keywords: "web development, mobile apps, IT solutions, software development, digital transformation, Code4Bharat",
  authors: [{ name: "Code4Bharat Team" }],
  creator: "Code4Bharat",
  publisher: "Code4Bharat",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://code4bharat.com",
    title: "Code4Bharat - Cutting-Edge IT Solutions",
    description:
      "Unlock your full potential with our tailored technology services. From innovative software development to robust cybersecurity, we empower your business to thrive in the digital age.",
    siteName: "Code4Bharat",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

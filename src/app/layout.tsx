import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./globals.css"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: `Hi, I'm ${process.env.NEXT_PUBLIC_SERVER_NAME}`,
  description: "I'm a server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

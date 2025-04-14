import type { Metadata } from "next"
import { Almendra } from "next/font/google"
import "./globals.css"

const almendra = Almendra({
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${almendra.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

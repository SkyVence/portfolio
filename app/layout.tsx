import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Antoine Mathie | Portfolio",
  description: "Portfolio de Antoine Mathie, étudiant en informatique",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
      import { Analytics } from "@vercel/analytics/react"{children}</body>
    </html>
  )
}


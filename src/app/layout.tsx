import type React from "react"
import { Inter } from "next/font/google"
import "./global.css"
import { RouteProvider } from "@/components/context/route-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Global Borders Travel",
  description: "Your passport to extraordinary destinations worldwide",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RouteProvider>{children}</RouteProvider>
      </body>
    </html>
  )
}


import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { NavigationMenu } from "@/components/navigation-menu"
import React from 'react'; // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio BTS SIO - David MVOULA",
  description: "Portfolio personnel BTS SIO",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NavigationMenu />
        {children}
        <footer className="border-t bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 text-center text-slate-600">
            © {new Date().getFullYear()} David MVOULA. Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  )
}


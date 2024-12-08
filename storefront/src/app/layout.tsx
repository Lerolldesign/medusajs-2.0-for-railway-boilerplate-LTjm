import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const lune = localFont({
  src: "../fonts/charlotte.ttf",
  display: "swap",
  variable: "--font-lune",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${lune.variable} bg-creamy noise h-auto`}
      data-mode="light"
    >
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}

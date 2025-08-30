import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Hanad Muqaddar – Lead AI Engineer",
  description: "Portfolio of Hanad Muqaddar (Lead AI Engineer): RAG, Computer Vision, Agents, and end-to-end AI systems.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Hanad Muqaddar – Lead AI Engineer", description: "AI, RAG, CV, Agents.", url: "https://example.com", siteName: "Hanad Portfolio", images: [{ url: "/og.png", width: 1200, height: 630 }], locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: "Hanad Muqaddar – Lead AI Engineer", description: "AI portfolio.", images: ["/og.png"] },
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import "@/styles/theme.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PrismOne — Machine-Native Semantic Re-ranking Studio",
  description: "Sub-100ms TypeSafe Jev System One re-ranking and classifier",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-[#fafafc]">
      <body className="ambient-pink-shader min-h-full flex flex-col antialiased selection:bg-pink-100 selection:text-pink-700">
        {children}
      </body>
    </html>
  )
}

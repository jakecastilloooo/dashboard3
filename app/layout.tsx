import "@/styles/globals.css"
import { Layout } from "@/components/layout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}


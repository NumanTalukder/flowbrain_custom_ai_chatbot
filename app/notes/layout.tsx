import type { Metadata } from "next"
import Navbar from "./Navbar"

export const metadata: Metadata = {
  title: "Flow Brain",
  description: "The Ultimate AI Powered Note-Taking App",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <main className="p-4 max-w-7xl m-auto">{children}</main>
    </>
  )
}

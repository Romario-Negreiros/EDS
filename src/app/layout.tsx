import AppBar from "@/components/AppBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <AppBar />
      <body>{children}</body>
    </html>
  )
}

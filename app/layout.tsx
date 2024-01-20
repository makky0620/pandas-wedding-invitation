import './globals.css'

export const metadata = {
  title: 'Wedding Invitation',
  description: 'Takashi & Eriko Wedding Invitation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

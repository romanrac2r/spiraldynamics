export const metadata = {
  title: 'Forbes Growclub Assessment',
  description: 'Assessment na hodnotové rámce',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

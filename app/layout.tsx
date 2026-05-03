import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Competitor Launch Radar — Get alerts when competitors launch new features',
  description: 'Monitor competitor websites, changelogs, and Product Hunt for feature launches. Get automated competitive analysis reports delivered to your inbox.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a1520080-64d3-40db-b8c6-269cb71e0bd0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

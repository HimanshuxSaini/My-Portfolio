import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
})

export const metadata: Metadata = {
  title: 'Himanshu — Full-Stack Web Developer',
  description:
    'Himanshu is a dedicated and passionate Web Developer with strong problem-solving skills, building responsive, user-friendly, and modern web applications (MERN Stack & Next.js).',
  keywords: [
    'Web Developer',
    'Full-Stack',
    'MERN Stack',
    'React.js',
    'Next.js',
    'Node.js',
    'Himanshu',
  ],
  authors: [{ name: 'Himanshu' }],
  creator: 'Himanshu',
  openGraph: {
    title: 'Himanshu — Full-Stack Web Developer',
    description:
      'Dedicated and passionate Web Developer building responsive, user-friendly, and modern web applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himanshu — Full-Stack Web Developer',
    description: 'Building responsive, user-friendly, and modern web applications.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${kanit.variable} bg-[#0C0C0C]`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#0C0C0C]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

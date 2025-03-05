import type { Metadata } from 'next'
import './globals.css'
import { getTimeLeft } from './utils'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: getTimeLeft().days + ' dias para talent land',
        description: 'Cuanto Falta para Talent Land?',
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}

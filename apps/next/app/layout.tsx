'use client'
import { TamaguiProvider } from './TamaguiProvider'
import { LandingLayout } from '@my/ui'
import Head from 'next/head'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <body style={{ backgroundColor: 'rgba(5,5,5)', minHeight: '100vh', minWidth: '100vw' }}>
        <TamaguiProvider>
          <LandingLayout>{children}</LandingLayout>
        </TamaguiProvider>
      </body>
    </html>
  )
}

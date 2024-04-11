import React from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../styles/globals.css'
import CustomHead from '@/components/head/CustomHead'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="pt-br">
      <CustomHead title="Bem vindo!" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

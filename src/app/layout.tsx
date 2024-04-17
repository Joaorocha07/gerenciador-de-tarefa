import React from 'react'

import { Inter } from 'next/font/google'

import '../styles/globals.css'
import Provider from './Provider'
import CustomHead from '@/components/head/CustomHead'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="pt-br">
      <CustomHead title="Bem vindo!" />
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}

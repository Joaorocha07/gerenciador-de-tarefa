'use client'
import React from 'react'

import { type IChildrenProp } from '@/types/global'
import { AppThemeProvider } from '@/contexts/Theme/ThemeContext'

export default function Provider ({
  children
}: IChildrenProp): JSX.Element {
  return (
    <AppThemeProvider>
      { children }
    </AppThemeProvider>
  )
}

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

import { DarkTheme, LightTheme } from '@/themes'
import { Box, ThemeProvider } from '@mui/material'
import { type IChildrenProp } from '@/types/global'

interface IThemeContextData {
  themeName?: 'light' | 'dark'
  toggleTheme?: () => void
}

const ThemeContext = createContext<IThemeContextData>({})

export const useAppThemeContext = (): any => {
  return useContext(ThemeContext)
}

export const AppThemeProvider = ({ children }: IChildrenProp): JSX.Element => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeNmae => oldThemeNmae === 'light' ? 'dark' : 'light')
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme

    return DarkTheme
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

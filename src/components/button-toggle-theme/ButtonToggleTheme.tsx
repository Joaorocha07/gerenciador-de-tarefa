import React, { useState } from 'react'

import { IconButton, Tooltip } from '@mui/material'
import { useAppThemeContext } from '@/contexts/Theme/ThemeContext'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export default function ButtonToggleTheme (): JSX.Element {
  const { toggleTheme } = useAppThemeContext()
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleThemeMode = (): void => {
    toggleTheme()
    setIsDarkMode(prevMode => !prevMode)
  }
  return (
    <Tooltip title={isDarkMode ? 'Modo escuro' : 'Modo claro'}>
      <IconButton
        onClick={toggleThemeMode}
        sx={{
          border: '2px solid #66b2ff',
          borderRadius: '25%',
          p: '4px'
        }}>
        {isDarkMode ? <Brightness7Icon sx={{ color: '#ffffff' }} /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  )
}

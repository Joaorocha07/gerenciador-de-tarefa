'use client'
import React from 'react'

import { Box, useTheme } from '@mui/material'
import ButtonToggleTheme from '@/components/button-toggle-theme/ButtonToggleTheme'

export default function Dashboard (): JSX.Element {
  const theme = useTheme()

  return (
    <Box>
      <h1 style={{ color: theme.palette.primary.contrastText }} >Tela de Dashboard</h1>
      <ButtonToggleTheme />
    </Box>
  )
}

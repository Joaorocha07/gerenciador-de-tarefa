'use client'
import React from 'react'

import { Box, Button, useTheme } from '@mui/material'
import ButtonToggleTheme from '@/components/button-toggle-theme/ButtonToggleTheme'
import { useDrawerContext } from '@/contexts/Drawer/DrawerContext'

export default function Dashboard (): JSX.Element {
  const theme = useTheme()
  const { toggleDrawerOpen } = useDrawerContext()
  return (
    <Box>
      <h1 style={{ color: theme.palette.primary.contrastText }} >Tela de Dashboard</h1>
      <ButtonToggleTheme />
      <Button onClick={toggleDrawerOpen}>Clique aqui</Button>
    </Box>
  )
}

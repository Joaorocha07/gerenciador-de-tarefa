'use client'
import React from 'react'

import { Box } from '@mui/material'

import ButtonToggleTheme from '@/components/button-toggle-theme/ButtonToggleTheme'

export default function Login (): JSX.Element {
  return (
    <>
      <Box>
        <ButtonToggleTheme />
      </Box>
    </>
  )
}

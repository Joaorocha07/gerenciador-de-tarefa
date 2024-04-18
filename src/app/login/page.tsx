'use client'
import React from 'react'

import { Box } from '@mui/material'

import CustomTypography from '@/components/text/CustomTypography'
import ButtonToggleTheme from '@/components/button-toggle-theme/ButtonToggleTheme'

export default function Login (): JSX.Element {
  return (
    <>
      <Box>
        <ButtonToggleTheme />
        <CustomTypography text='Texto' variant='h1' />
      </Box>
    </>
  )
}

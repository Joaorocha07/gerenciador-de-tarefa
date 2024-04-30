'use client'
import React from 'react'

import { Box, useTheme } from '@mui/material'
import { type IChildrenProp } from '@/types/global'

import CustomTypography from '@/components/text/CustomTypography'
import ButtonToggleTheme from '@/components/button/button-toggle-theme'

export default function LoginAndCadastro ({ children }: IChildrenProp): JSX.Element {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Box display="flex" alignItems="center" gap={theme.spacing(2)} mb={theme.spacing(5)}>
        <CustomTypography text='minha logo' variant='h4' />
        <ButtonToggleTheme />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(3),
          border: `0.5px solid ${theme.palette.primary.dark}`,
          borderRadius: '12px',
          padding: '1.3rem',
          width: '100%',
          maxWidth: '400px'
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

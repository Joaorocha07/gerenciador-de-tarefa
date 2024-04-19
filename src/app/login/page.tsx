'use client'
import React, { useState } from 'react'

import { Box, Button, styled, useTheme } from '@mui/material'

import CustomTypography from '@/components/text/CustomTypography'
import ButtonToggleTheme from '@/components/button-toggle-theme'
import CustomTextField from '@/components/custom-text-field'

interface SwitchButtonProps {
  selected: boolean
}

const SwitchButton = styled(Button)<SwitchButtonProps>(({ theme, selected }) => ({
  backgroundColor: selected ? theme.palette.secondary.main : theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  width: '50%',
  borderRadius: '6px',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: selected ? theme.palette.secondary.main : theme.palette.primary.light
  },
  fontWeight: 'bold'
}))

export default function Login (): JSX.Element {
  const theme = useTheme()
  const [selectedButton, setSelectedButton] = useState<'login' | 'novaConta'>('login')

  const handleButtonClick = (buttonName: 'login' | 'novaConta'): void => {
    setSelectedButton(buttonName)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '72vh'
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
            maxWidth: '360px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              backgroundColor: theme.palette.primary.light,
              borderRadius: '6px',
              overflow: 'hidden',
              p: '0.3rem'
            }}
          >
            <SwitchButton variant='text' onClick={() => { handleButtonClick('login') }} selected={selectedButton === 'login'}>
                Login
            </SwitchButton>
            <SwitchButton variant='text' onClick={() => { handleButtonClick('novaConta') }} selected={selectedButton === 'novaConta'}>
                Nova conta
            </SwitchButton>
          </Box>
          <Box textAlign="center">
            <CustomTypography text="Acesse sua conta" variant="body1" />
          </Box>
          <Box>
            <CustomTextField fullWidth label='Seu e-mail' variant='outlined' />
          </Box>
          <Button fullWidth sx={{
            backgroundColor: theme.palette.button.background,
            textTransform: 'capitalize',
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: theme.palette.button.hoverBackground
            },
            height: '50px'
          }}>
            Próximo
          </Button>
        </Box>
      </Box>
    </>
  )
}

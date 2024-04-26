'use client'
import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import { Box, useTheme } from '@mui/material'

import SwitchButton from '@/components/button/switchButton'
import CustonButton from '@/components/button/custom-button'
import CustomTextField from '@/components/textfield/custom-text-field'
import ButtonToggleTheme from '@/components/button/button-toggle-theme'
import CustomTypography from '@/components/text/CustomTypography'

export default function Login (): JSX.Element {
  const theme = useTheme()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [selectedButton, setSelectedButton] = useState<'login' | 'novaConta'>('login')

  const handleButtonClick = (buttonName: 'login' | 'novaConta'): void => {
    router.push('/cadastro')
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
            <CustomTextField
              fullWidth
              label="Seu e-mail"
              variant="outlined"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
              name="email"
            />
          </Box>
          <CustonButton fullWidth onClick={() => {}}>Próximo</CustonButton>
        </Box>
      </Box>
    </>
  )
}

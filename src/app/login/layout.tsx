'use client'
import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import { Box, useTheme } from '@mui/material'
import { type IChildrenProp } from '@/types/global'

import CustomHead from '@/components/custom-head'
import LoginAndCadastro from '@/layout/login-and-cadastro'
import SwitchButton from '@/components/button/switchButton'

export default function LoginLayout ({ children }: IChildrenProp): JSX.Element {
  const theme = useTheme()
  const router = useRouter()

  const [selectedButton, setSelectedButton] = useState<'login' | 'novaConta'>('login')

  const handleButtonClick = (buttonName: 'login' | 'novaConta'): void => {
    router.push('/cadastro')
    setSelectedButton(buttonName)
  }
  return (
    <>
      <CustomHead title="Login" />
      <LoginAndCadastro>
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
        {children}
      </LoginAndCadastro>
    </>
  )
}

'use client'
import React, { useState } from 'react'

import { Box } from '@mui/material'

import CustonButton from '@/components/button/custom-button'
import CustomTypography from '@/components/text/CustomTypography'

import CustomTextField
  from '@/components/textfield/custom-text-field'

export default function Login (): JSX.Element {
  const [email, setEmail] = useState('')

  return (
    <>
      <Box textAlign="center">
        <CustomTypography
          text="Acesse sua conta"
          variant="body1"
        />
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
      <CustonButton
        fullWidth
        onClick={() => {}}
      >
          Próximo
      </CustonButton>
    </>
  )
}

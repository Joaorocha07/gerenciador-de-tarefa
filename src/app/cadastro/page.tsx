'use client'
import React from 'react'

import { Box } from '@mui/material'

import FormRegister from './components/FormRegister'
import CustomTypography from '@/components/text/CustomTypography'

export default function Cadastro (): JSX.Element {
  return (
    <>
      <Box textAlign="center">
        <CustomTypography text="Nova conta" variant="body1" />
      </Box>
      <FormRegister />
    </>
  )
}

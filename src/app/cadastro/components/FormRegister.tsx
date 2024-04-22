import React from 'react'

import { Box, useTheme } from '@mui/material'

import CustomTextField from '@/components/textfield/custom-text-field'
import CustomTextFieldPhone from '@/components/textfield/custom-text-field-phone'
import CustomTextFieldPassword from '@/components/textfield/custom-text-field-password'

export default function FormRegister (): JSX.Element {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2)
      }}
    >
      <CustomTextField fullWidth label='Nome e sobrenome' variant='outlined' />
      <CustomTextField fullWidth label='E-mail' variant='outlined' />
      <CustomTextFieldPhone fullWidth label='Telefone' variant='outlined' />
      <CustomTextFieldPassword fullWidth label='Senha' variant='outlined' />
      <CustomTextFieldPassword fullWidth label='Confirme sua senha' variant='outlined' />
    </Box>
  )
}

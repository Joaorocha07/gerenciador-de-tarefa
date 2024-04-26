import React from 'react'

import { Box, useTheme } from '@mui/material'

import IconTextPassword from './IconTextPassword'
import CustomTypography from '@/components/text/CustomTypography'

interface CriterionPasswordProps {
  senha: string
}

export default function CriterionPassword ({ senha }: CriterionPasswordProps): JSX.Element {
  const theme = useTheme()

  const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(senha)
  const hasLowercase = /[a-z]+/.test(senha)
  const hasUppercase = /[A-Z]+/.test(senha)
  const hasMinLength = senha.length >= 8
  const hasNumber = /[0-9]+/.test(senha)

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
        borderRadius: theme.spacing(1),
        border: `0.5px solid ${theme.palette.primary.dark}`
      }}
      p={theme.spacing(2)}
    >
      <Box mb={theme.spacing(0.5)}>
        <CustomTypography text="Sua senha deve conter:" variant="body2" />
      </Box>
      <Box ml={theme.spacing(0.5)}>
        <IconTextPassword text='Pelo menos 8 caracteres' validations={hasMinLength} />
        <IconTextPassword text='Pelo menos 1 caractere especial' validations={hasSpecialChar} />
        <IconTextPassword text='Pelo menos 1 número' validations={hasNumber} />
        <IconTextPassword text='Pelo menos 1 letra minúscula' validations={hasLowercase} />
        <IconTextPassword text='Pelo menos 1 letra maiúscula' validations={hasUppercase} />
      </Box>
    </Box>
  )
}

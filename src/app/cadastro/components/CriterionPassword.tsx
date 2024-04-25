/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

import { Box, useTheme } from '@mui/material'

import CustomTypography from '@/components/text/CustomTypography'
import IconTextPassword from './IconTextPassword'

export default function CriterionPassword (): JSX.Element {
  const theme = useTheme()

  const [validPassword, setValidPassword] = useState(true)

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
        <IconTextPassword text='Pelo menos 8 caracteres' validPassword={validPassword} />
        <IconTextPassword text='Pelo menos 1 caractere especial' validPassword={validPassword} />
        <IconTextPassword text='Pelo menos 1 número' validPassword={validPassword} />
        <IconTextPassword text='Pelo menos 1 letra minúscula' validPassword={validPassword} />
        <IconTextPassword text='Pelo menos 1 letra maiúscula' validPassword={validPassword} />
      </Box>
    </Box>
  )
}

'use client'
import React, { useState } from 'react'

import { Box } from '@mui/material'

import FormRegister from './components/FormRegister'
import ValidarEmail from './components/validar-email'
import CustomTypography from '@/components/text/CustomTypography'

export default function Cadastro (): JSX.Element {
  const [activeStep, setActiveStep] = useState(0)

  const handleAdvanceStep = (): void => {
    setActiveStep(prevState => prevState + 1)
  }

  const handleBackStep = (): void => {
    setActiveStep(prevState => prevState - 1)
  }

  return (
    <>
      <Box textAlign="center">
        <CustomTypography text="Nova conta" variant="body1" />
      </Box>
      {activeStep === 0 && (
        <FormRegister
          handleAdvanceStep={handleAdvanceStep}
          handleBackStep={handleBackStep}
        />
      )}
      {activeStep === 1 && (
        <ValidarEmail
          handleAdvanceStep={handleAdvanceStep}
          handleBackStep={handleBackStep}
        />
      )}
    </>
  )
}

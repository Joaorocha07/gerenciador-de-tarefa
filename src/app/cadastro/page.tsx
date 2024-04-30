'use client'
import React, { useState } from 'react'

import FormRegister from './components/FormRegister'
import ValidarEmail from './components/validar-email'

export default function Cadastro (): JSX.Element {
  const [activeStep, setActiveStep] = useState(1)

  const handleAdvanceStep = (): void => {
    setActiveStep(prevState => prevState + 1)
  }

  const handleBackStep = (): void => {
    setActiveStep(prevState => prevState - 1)
  }

  return (
    <>
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

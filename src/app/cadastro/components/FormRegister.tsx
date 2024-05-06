import React from 'react'

import { Form, Formik } from 'formik'
import { useSwitch } from '@/hook/useSwitch'
import { Box, useTheme } from '@mui/material'
import { useFormRegister } from '@/hook/cadastro/useFormRegistet'

import FormPrincipal from './FormPrincipal'
import SwitchButton from '@/components/button/switchButton'
import CustonButton from '@/components/button/custom-button'
import CustomTypography from '@/components/text/CustomTypography'

interface IFormRegisterProps {
  handleAdvanceStep: () => void
  handleBackStep: () => void
}

export default function FormRegister ({
  handleAdvanceStep,
  handleBackStep
}: IFormRegisterProps): JSX.Element {
  const theme = useTheme()

  const { selectedButton, handleButtonClick } = useSwitch()

  const {
    initialValues,
    validationSchema,
    handleSubmit
  } = useFormRegister({ handleAdvanceStep })

  return (
    <>
      <Box textAlign="center">
        <CustomTypography text="Nova conta" variant="body1" />
      </Box>
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
        <SwitchButton
          variant='text'
          onClick={() => { handleButtonClick('login') }}
          selected={selectedButton === 'login'}
        >
                  Login
        </SwitchButton>
        <SwitchButton
          variant='text'
          onClick={() => { handleButtonClick('novaConta') }}
          selected={selectedButton === 'novaConta'}
        >
                  Nova conta
        </SwitchButton>
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          touched
        }) => (
          <Form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing(2)
              }}
            >
              <FormPrincipal
                values={values}
                errors={errors}
                handleChange={handleChange}
                touched={touched}
              />
              <CustonButton
                type="submit"
                fullWidth
                onClick={() => {}}
              >
              Criar conta
              </CustonButton>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  )
}

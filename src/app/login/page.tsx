'use client'
import React from 'react'

import { Form, Formik } from 'formik'
import { Box, useTheme } from '@mui/material'
import { useFormLogin } from '@/hook/login/useFormLogin'

import FormLogin from './components/FormLogin'
import CustonButton from '@/components/button/custom-button'
import CustomTypography from '@/components/text/CustomTypography'

export default function LoginPage (): JSX.Element {
  const theme = useTheme()

  const {
    initialValues,
    validationSchema,
    handleSubmit,
    errorMessage,
    error
  } = useFormLogin()

  return (
    <>
      <Box textAlign="center">
        <CustomTypography
          text="Acesse sua conta"
          variant="body1"
        />
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
              <FormLogin
                error={error}
                errorMessage={errorMessage}
                errors={errors}
                handleChange={handleChange}
                touched={touched}
                values={values}
              />
              <CustonButton
                fullWidth
                type='submit'
              >
                Logar
              </CustonButton>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  )
}

import React, { useRef } from 'react'

import { Form, Formik } from 'formik'
import { Box, Button, Link, useTheme } from '@mui/material'

import {
  useValidationEmail
} from '@/hook/cadastro/useValidationEmail'

import FormEmail from './FormEmail'
import CustonButton from '@/components/button/custom-button'
import CustomTypography from '@/components/text/CustomTypography'

interface IValidarEmailProps {
  handleAdvanceStep: () => void
  handleBackStep: () => void
}

export default function ValidarEmail ({
  handleAdvanceStep,
  handleBackStep
}: IValidarEmailProps): JSX.Element {
  const theme = useTheme()

  const tokenOneRef = useRef(null)
  const tokenTwoRef = useRef(null)
  const tokenThreeRef = useRef(null)
  const tokenFourRef = useRef(null)
  const tokenFiveRef = useRef(null)
  const tokenSixRef = useRef(null)

  const {
    handleKeyDown,
    initialValues,
    validationSchema,
    handleSubmit
  } = useValidationEmail()

  return (
    <>
      <Button onClick={handleBackStep}
        style={{
          border: 'none',
          background: 'none',
          color: theme.palette.button.background,
          padding: 0,
          font: 'inherit',
          cursor: 'pointer',
          textDecoration: 'none'
        }}>
        <Link>Voltar</Link>
      </Button>
      <CustomTypography
        text='Enviamos um codigo para o seu e-mail, valide-o!'
        variant='body1'
      />
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
                flexDirection: 'row',
                gap: theme.spacing(1),
                mb: theme.spacing(1)
              }}
            >
              <FormEmail
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
                handleKeyDown={handleKeyDown}
                tokenOneRef={tokenOneRef}
                tokenTwoRef={tokenTwoRef}
                tokenThreeRef={tokenThreeRef}
                tokenFourRef={tokenFourRef}
                tokenFiveRef={tokenFiveRef}
                tokenSixRef={tokenSixRef}
              />
            </Box>
            <CustonButton
              type="submit"
              fullWidth
              onClick={() => {}}
            >
              Validar token
            </CustonButton>
          </Form>
        )}
      </Formik>
    </>
  )
}

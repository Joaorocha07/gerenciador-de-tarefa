import React, { type ChangeEvent } from 'react'

import { Alert } from '@mui/material'
import { type FormikTouched, type FormikErrors } from 'formik'

import CustomTextField
  from '@/components/textfield/custom-text-field'
import CustomTextFieldPassword
  from '@/components/textfield/custom-text-field-password'

interface IFormLoginProps {
  error: boolean
  errorMessage: string
  errors: FormikErrors<{ email: string, senha: string }>
  values: {
    email: string
    senha: string
  }
  touched: FormikTouched<{ email: string, senha: string }>
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function FormLogin ({
  error,
  errorMessage,
  errors,
  values,
  touched,
  handleChange
}: IFormLoginProps): JSX.Element {
  return (
    <>
      {error && (
        <Alert
          sx={{
            alignSelf: 'flex-start',
            width: '100%',
            fontSize: {
              xl: '16px',
              md: '10px',
              xs: '14px'
            },
            p: {
              xl: '8px 16px',
              md: '0 16px'
            }
          }}
          severity="error"
        >
          {errorMessage}
        </Alert>
      )}
      <CustomTextField
        fullWidth
        name="email"
        type="email"
        label="Seu e-mail"
        variant="outlined"
        value={values.email}
        onChange={handleChange}
        helperText={
          touched.email !== undefined
            ? errors.email
            : ''
        }
        error={
          Boolean(touched.email !== undefined
            ? errors.email
            : ''
          )
        }
      />
      <CustomTextFieldPassword
        fullWidth
        name="senha"
        label="Senha"
        variant="outlined"
        value={values.senha}
        onChange={handleChange}
        helperText={
          touched.senha !== undefined
            ? errors.senha
            : ''
        }
        error={
          Boolean(touched.senha !== undefined
            ? errors.senha
            : ''
          )
        }
      />
    </>
  )
}

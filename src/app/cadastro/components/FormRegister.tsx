import React from 'react'

import { Form, Formik } from 'formik'
import { Box, useTheme } from '@mui/material'

import * as Yup from 'yup'
import CriterionPassword from './CriterionPassword'
import CustonButton from '@/components/button/custom-button'
import CustomTextField from '@/components/textfield/custom-text-field'
import CustomTextFieldPassword from '@/components/textfield/custom-text-field-password'

export default function FormRegister (): JSX.Element {
  const theme = useTheme()

  const validationSchema = Yup.object().shape({
    nomeCompleto: Yup.string().required('Campo obrigatório'),
    email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
    telefone: Yup.string().required('Campo obrigatório'),
    senha: Yup.string().required('Campo obrigatório'),
    confirmeSenha: Yup.string().required('Campo obrigatório')
  })

  const initialValues = {
    nomeCompleto: '',
    email: '',
    telefone: '',
    senha: '',
    confirmeSenha: ''
  }

  const handleSubmit = async ({
    nomeCompleto,
    email,
    telefone,
    senha,
    confirmeSenha
  }:
    typeof initialValues): Promise<void> => {
    const formData = {
      nomeCompleto,
      email,
      telefone,
      senha,
      confirmeSenha
    }

    console.log(formData)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
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
            <CustomTextField
              fullWidth
              name='nomeCompleto'
              type="text"
              label='Nome e sobrenome'
              variant='outlined'
              value={values.nomeCompleto}
              onChange={handleChange}
              helperText={errors.nomeCompleto}
              error={Boolean(errors.nomeCompleto)}
            />
            <CustomTextField
              fullWidth
              name='email'
              type="email"
              label='E-mail'
              variant='outlined'
              value={values.email}
              onChange={handleChange}
              helperText={errors.email}
              error={Boolean(errors.email)}
            />
            <CustomTextField
              fullWidth
              name='telefone'
              type="tel"
              label='Telefone'
              variant='outlined'
              value={values.telefone}
              onChange={handleChange}
              helperText={errors.telefone}
              error={Boolean(errors.telefone)}
            />
            <CustomTextFieldPassword
              fullWidth
              name="senha"
              label='Senha'
              variant='outlined'
              value={values.senha}
              onChange={handleChange}
              helperText={errors.senha}
              error={Boolean(errors.senha)}
            />
            <CustomTextFieldPassword
              fullWidth
              name="confirmeSenha"
              label='Confirme sua senha'
              variant='outlined'
              value={values.confirmeSenha}
              onChange={handleChange}
              helperText={errors.confirmeSenha}
              error={Boolean(errors.confirmeSenha)}
            />
            <CriterionPassword />
            {JSON.stringify(errors, null, 2)}
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
  )
}

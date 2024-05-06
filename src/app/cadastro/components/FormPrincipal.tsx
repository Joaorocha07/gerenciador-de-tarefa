import React from 'react'

import CriterionPassword from './CriterionPassword'

import CustomTextField
  from '@/components/textfield/custom-text-field'
import CustomTextFieldPhone
  from '@/components/textfield/custom-text-field-phone'
import CustomTextFieldPassword
  from '@/components/textfield/custom-text-field-password'

interface IFormProps {
  values: {
    nomeCompleto: string
    email: string
    telefone: string
    senha: string
    confirmeSenha: string
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  touched: any
  errors: any
}

export default function FormPrincipal ({
  values,
  handleChange,
  touched,
  errors
}: IFormProps): JSX.Element {
  return (
    <>
      <CustomTextField
        fullWidth
        name='nomeCompleto'
        type="text"
        label='Nome e sobrenome'
        variant='outlined'
        value={values.nomeCompleto}
        onChange={handleChange}
        helperText={
          touched.nomeCompleto !== undefined
            ? errors.nomeCompleto
            : ''
        }
        error={
          Boolean(touched.nomeCompleto !== undefined
            ? errors.nomeCompleto
            : ''
          )
        }
      />
      <CustomTextField
        fullWidth
        name='email'
        type="email"
        label='E-mail'
        variant='outlined'
        value={values.email}
        onChange={handleChange}
        helperText={
          touched.email !== undefined ? errors.email : ''
        }
        error={
          Boolean(touched.email !== undefined
            ? errors.email
            : '')
        }
      />
      <CustomTextFieldPhone
        fullWidth
        name='telefone'
        label='Telefone'
        variant='outlined'
        value={values.telefone}
        onChange={handleChange}
        helperText={
          touched.telefone !== undefined
            ? errors.telefone
            : ''
        }
        error={
          Boolean(touched.telefone !== undefined
            ? errors.telefone
            : ''
          )}
      />
      <CustomTextFieldPassword
        fullWidth
        name="senha"
        label='Senha'
        variant='outlined'
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

          )}
      />
      <CustomTextFieldPassword
        fullWidth
        name="confirmeSenha"
        label='Confirme sua senha'
        variant='outlined'
        value={values.confirmeSenha}
        onChange={handleChange}
        helperText={
          touched.confirmeSenha !== undefined
            ? errors.confirmeSenha
            : ''
        }
        error={
          Boolean(touched.confirmeSenha !== undefined
            ? errors.confirmeSenha
            : ''

          )}
      />
      <CriterionPassword senha={values.senha}/>
    </>
  )
}

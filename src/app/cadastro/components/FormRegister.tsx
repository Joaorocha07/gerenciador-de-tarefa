import React, { useContext } from 'react'

import { Form, Formik } from 'formik'
import { useSwitch } from '@/hook/useSwitch'
import { Box, useTheme } from '@mui/material'
import { showError } from '@/components/msgAlert/show-error'
import { CadastroContext } from '@/contexts/Cadastro/CadastroContext'

import * as Yup from 'yup'
import CriterionPassword from './CriterionPassword'
import EnviarToken from '@/services/cadastro/EnviarToken'
import SwitchButton from '@/components/button/switchButton'
import CustonButton from '@/components/button/custom-button'
import CustomTypography from '@/components/text/CustomTypography'
import CustomTextField from '@/components/textfield/custom-text-field'
import CustomTextFieldPhone from '@/components/textfield/custom-text-field-phone'
import CustomTextFieldPassword from '@/components/textfield/custom-text-field-password'
import Swal from 'sweetalert2'

interface IFormRegisterProps {
  handleAdvanceStep: () => void
  handleBackStep: () => void
}

export default function FormRegister ({ handleAdvanceStep, handleBackStep }: IFormRegisterProps): JSX.Element {
  const theme = useTheme()
  const context = useContext(CadastroContext)

  const { selectedButton, handleButtonClick } = useSwitch()

  const validationSchema = Yup.object().shape({
    nomeCompleto: Yup.string()
      .required('Campo obrigatório')
      .min(6, 'Nome invalido!')
      .matches(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Nome completo deve conter apenas letras!'),
    email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
    telefone: Yup.string()
      .required('Campo obrigatório')
      .test('phone-length', 'Telefone deve ter 11 dígitos', val => (val.length > 0) && val.replace(/\D/g, '').length === 11),
    senha: Yup.string()
      .required('Campo obrigatório')
      .min(8, 'Pelo menos 8 caracteres')
      .matches(/[a-z]/, 'Pelo menos 1 letra minúscula')
      .matches(/[A-Z]/, 'Pelo menos 1 letra maiúscula')
      .matches(/[0-9]/, 'Pelo menos 1 número')
      .matches(/[@$!%*?&-]/, 'Pelo menos 1 caractere especial'),
    confirmeSenha: Yup.string()
      .required('Campo obrigatório')
      .oneOf([Yup.ref('senha')], 'As senhas precisam ser iguais')
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

    const response = await EnviarToken({
      nome: formData.nomeCompleto ?? '',
      email: formData.email ?? ''
    })

    console.log(response)

    if (response.error === false) {
      void Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: response.msgUser
      }).then((result) => {
        if (result.isConfirmed) {
          handleAdvanceStep()
          context?.saveCadastro(formData)
        }
      })
    } else if (response.error === true) {
      showError('Houve um erro ao finalizar seu cadastro, tente novamente mais tarde!')
    }
  }

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
        <SwitchButton variant='text' onClick={() => { handleButtonClick('login') }} selected={selectedButton === 'login'}>
                  Login
        </SwitchButton>
        <SwitchButton variant='text' onClick={() => { handleButtonClick('novaConta') }} selected={selectedButton === 'novaConta'}>
                  Nova conta
        </SwitchButton>
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleChange, handleSubmit, touched }) => (
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
                helperText={touched.nomeCompleto !== undefined ? errors.nomeCompleto : ''}
                error={Boolean(touched.nomeCompleto !== undefined ? errors.nomeCompleto : '')}
              />
              <CustomTextField
                fullWidth
                name='email'
                type="email"
                label='E-mail'
                variant='outlined'
                value={values.email}
                onChange={handleChange}
                helperText={touched.email !== undefined ? errors.email : ''}
                error={Boolean(touched.email !== undefined ? errors.email : '')}
              />
              <CustomTextFieldPhone
                fullWidth
                name='telefone'
                label='Telefone'
                variant='outlined'
                value={values.telefone}
                onChange={handleChange}
                helperText={touched.telefone !== undefined ? errors.telefone : ''}
                error={Boolean(touched.telefone !== undefined ? errors.telefone : '')}
              />
              <CustomTextFieldPassword
                fullWidth
                name="senha"
                label='Senha'
                variant='outlined'
                value={values.senha}
                onChange={handleChange}
                helperText={touched.senha !== undefined ? errors.senha : ''}
                error={Boolean(touched.senha !== undefined ? errors.senha : '')}
              />
              <CustomTextFieldPassword
                fullWidth
                name="confirmeSenha"
                label='Confirme sua senha'
                variant='outlined'
                value={values.confirmeSenha}
                onChange={handleChange}
                helperText={touched.confirmeSenha !== undefined ? errors.confirmeSenha : ''}
                error={Boolean(touched.confirmeSenha !== undefined ? errors.confirmeSenha : '')}
              />
              <CriterionPassword senha={values.senha}/>
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

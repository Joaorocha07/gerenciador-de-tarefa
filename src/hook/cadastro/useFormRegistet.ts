/* eslint-disable max-len */
import { useContext } from 'react'
import { showError } from '@/components/msgAlert/show-error'

import * as Yup from 'yup'
import Swal from 'sweetalert2'
import EnviarToken from '@/services/cadastro/EnviarToken'

import { CadastroContext }
  from '@/contexts/Cadastro/CadastroContext'

interface IUseFormRegister {
  validationSchema: any
  initialValues: {
    nomeCompleto: string
    email: string
    telefone: string
    senha: string
    confirmeSenha: string
  }
  handleSubmit: (values: {
    nomeCompleto: string
    email: string
    telefone: string
    senha: string
    confirmeSenha: string
  }) => Promise<void>
}

export const useFormRegister = ({
  handleAdvanceStep
}: any): IUseFormRegister => {
  const context = useContext(CadastroContext)

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

    if (response == null) {
      showError(
        'Houve um erro ao finalizar seu cadastro, tente novamente mais tarde!'
      )
      return
    }

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
      void Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: response.msgUser
      }).then((result) => {
        if (result.isConfirmed) { /* empty */ }
      })
    }
  }

  return {
    validationSchema,
    initialValues,
    handleSubmit
  }
}

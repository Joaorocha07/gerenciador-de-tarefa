import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { CadastroContext }
  from '@/contexts/Cadastro/CadastroContext'

import * as Yup from 'yup'
import Swal from 'sweetalert2'
import ValidarToken from '@/services/cadastro/ValidarToken'

import CadastrarUsuario
  from '@/services/cadastro/CadastrarUsuario'

interface IUseValidationEmail {
  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.MutableRefObject<HTMLInputElement | null>
  ) => void
  initialValues: {
    tokenOne: string
    tokenTwo: string
    tokenThree: string
    tokenFour: string
    tokenFive: string
    tokenSix: string
  }
  validationSchema: any
  handleSubmit: (values: {
    tokenOne: string
    tokenTwo: string
    tokenThree: string
    tokenFour: string
    tokenFive: string
    tokenSix: string
  }) => Promise<void>
}

export const useValidationEmail = (): IUseValidationEmail => {
  const router = useRouter()
  const context = useContext(CadastroContext)

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.MutableRefObject<HTMLInputElement | null>
  ): void => {
    const isValidCharacter = /[a-zA-Z0-9]/.test(e.key)

    if (isValidCharacter && (nextRef.current != null)) {
      setTimeout(() => {
        nextRef.current?.focus()
      }, 0)
    }
  }

  const initialValues = {
    tokenOne: '',
    tokenTwo: '',
    tokenThree: '',
    tokenFour: '',
    tokenFive: '',
    tokenSix: ''
  }

  const validationSchema = Yup.object().shape({
    tokenOne: Yup.string().required('Obrigatorio'),
    tokenTwo: Yup.string().required('Obrigatorio!'),
    tokenThree: Yup.string().required('Obrigatorio!'),
    tokenFour: Yup.string().required('Obrigatorio!'),
    tokenFive: Yup.string().required('Obrigatorio!'),
    tokenSix: Yup.string().required('Obrigatorio!')
  })

  const handleSubmit = async ({
    tokenOne,
    tokenTwo,
    tokenThree,
    tokenFour,
    tokenFive,
    tokenSix
  }:
    typeof initialValues): Promise<void> => {
    const combinedTokens = `
      ${tokenOne}
      ${tokenTwo}
      ${tokenThree}
      ${tokenFour}
      ${tokenFive}
      ${tokenSix}
    `
    const token = combinedTokens.toUpperCase()

    const response = await ValidarToken({
      codigo: token ?? '',
      email: context?.state.formcadastro.email ?? ''
    })

    if (response.error === false) {
      void Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: response.msgUser
      }).then(async (result) => {
        if (result.isConfirmed) {
          const reponseCadastro = await CadastrarUsuario({
            nome: context?.state.formcadastro.nomeCompleto ?? '',
            email: context?.state.formcadastro.email ?? '',
            telefone: context?.state.formcadastro.telefone ?? '',
            password: context?.state.formcadastro.senha ?? ''
          })

          if (reponseCadastro.error === false) {
            void Swal.fire({
              icon: 'success',
              title: 'Sucesso!',
              text: reponseCadastro.msgUser
            }).then((result) => {
              if (result.isConfirmed) {
                router.push('/login')
              }
            })
          } else if (reponseCadastro.error === true) {
            void Swal.fire({
              icon: 'error',
              title: 'Erro!',
              text: reponseCadastro.msgUser
            }).then((result) => {
              if (result.isConfirmed) { /* empty */ }
            })
          }
        }
      })
    } else if (response.error === true) {
      void Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: response.msgUser
      }).then((result) => {
        if (result.isConfirmed) {
          return null
        }
      })
    }
  }

  return {
    handleKeyDown,
    initialValues,
    validationSchema,
    handleSubmit
  }
}

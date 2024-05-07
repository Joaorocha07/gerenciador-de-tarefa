import { useRouter } from 'next/navigation'
import { showError } from '@/components/msgAlert/show-error'

import * as Yup from 'yup'
import Swal from 'sweetalert2'
import Login from '@/services/login/Login'
import { useState } from 'react'

interface IUseFormLogin {
  initialValues: {
    email: string
    senha: string
  }
  validationSchema: any
  handleSubmit: (values: {
    email: string
    senha: string
  }) => Promise<void>
  errorMessage: any
  error: boolean
}

export const useFormLogin = (): IUseFormLogin => {
  const router = useRouter()
  const [error, setError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] =
    useState<any | undefined>('')

  const initialValues = {
    email: '',
    senha: ''
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Campo obrigatório').email('E-mail inválido'),
    senha: Yup.string().required('Campo obrigatório')
  })

  const handleSubmit = async ({
    email,
    senha
  }:
    typeof initialValues): Promise<void> => {
    const trimmedEmail = email.trim()
    const trimmedSenha = senha.trim()

    const response = await Login({
      email: trimmedEmail,
      password: trimmedSenha
    })

    if (response == null) {
      showError(
        `Houve um erro ao finalizar seu login, 
        tente novamente mais tarde!`
      )
      return
    }

    if (response.error === false) {
      router.push('/dashboard')
    } else if (response.error === true) {
      setError(true)
      setErrorMessage(response.msgUser)
      console.log(error)
      void Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: response.msgUser
      }).then((result) => {
        if (result.isConfirmed) { /* empty */ }
      })
    }

    console.log(response)
    console.log(error)
  }

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    errorMessage,
    error
  }
}

import React, { useContext, useRef } from 'react'

import { Form, Formik } from 'formik'
import { Box, useTheme } from '@mui/material'
import { CadastroContext } from '@/contexts/Cadastro/CadastroContext'

import * as Yup from 'yup'
import ValidarToken from '@/services/cadastro/ValidarToken'
import CustonButton from '@/components/button/custom-button'
import CustomTypography from '@/components/text/CustomTypography'
import CustomTextFieldToken from '@/components/textfield/custom-text-field-token'
import Swal from 'sweetalert2'

interface IValidarEmailProps {
  handleAdvanceStep: () => void
  handleBackStep: () => void
}

export default function ValidarEmail ({
  handleAdvanceStep,
  handleBackStep
}: IValidarEmailProps): JSX.Element {
  const theme = useTheme()
  const context = useContext(CadastroContext)

  const tokenOneRef = useRef(null)
  const tokenTwoRef = useRef(null)
  const tokenThreeRef = useRef(null)
  const tokenFourRef = useRef(null)
  const tokenFiveRef = useRef(null)
  const tokenSixRef = useRef(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, nextRef: React.MutableRefObject<HTMLInputElement | null>): void => {
    const isValidCharacter = /[a-zA-Z0-9]/.test(e.key)
    console.log(e.key)
    if (e.key === 'Backspace') {
      console.log(e)
    }

    if (isValidCharacter && (nextRef.current != null)) {
      setTimeout(() => {
        nextRef.current?.focus()
      }, 0)
    }
  }

  const validationSchema = Yup.object().shape({
    tokenOne: Yup.string().required('Campo obrigatório')
  })

  const initialValues = {
    tokenOne: '',
    tokenTwo: '',
    tokenThree: '',
    tokenFour: '',
    tokenFive: '',
    tokenSix: ''
  }

  const handleSubmit = async ({
    tokenOne,
    tokenTwo,
    tokenThree,
    tokenFour,
    tokenFive,
    tokenSix
  }:
    typeof initialValues): Promise<void> => {
    const combinedTokens = `${tokenOne}${tokenTwo}${tokenThree}${tokenFour}${tokenFive}${tokenSix}`
    const token = combinedTokens.toUpperCase()

    console.log(token)

    const response = await ValidarToken({
      codigo: token ?? '',
      email: context?.state.formcadastro.email ?? ''
    })

    console.log(response)

    if (response.error === false) {
      void Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: response.msgUser
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('fazer alguma coisa aqui')
        }
      })
    } else if (response.error === true) {
      void Swal.fire({
        icon: 'error',
        title: 'Sucesso!',
        text: response.msgUser
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('fazer alguma coisa aqui')
        }
      })
    }

    console.log(context?.state.formcadastro)
  }

  return (
    <>
      <CustomTypography text='Enviamos um codigo para o seu e-mail, valide-o!' variant='body1' />
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
                flexDirection: 'row',
                gap: theme.spacing(1),
                mb: theme.spacing(1)
              }}
            >
              <CustomTextFieldToken
                fullWidth
                name='tokenOne'
                label=''
                variant='outlined'
                value={values.tokenOne}
                onChange={handleChange}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { handleKeyDown(e, tokenTwoRef) }}
                inputRef={tokenOneRef}
                helperText={touched.tokenOne !== undefined ? errors.tokenOne : ''}
                error={Boolean(touched.tokenOne !== undefined ? errors.tokenOne : '')}
              />
              <CustomTextFieldToken
                fullWidth
                name='tokenTwo'
                label=''
                variant='outlined'
                value={values.tokenTwo}
                onChange={handleChange}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { handleKeyDown(e, tokenThreeRef) }}
                inputRef={tokenTwoRef}
                helperText={touched.tokenTwo !== undefined ? errors.tokenTwo : ''}
                error={Boolean(touched.tokenTwo !== undefined ? errors.tokenTwo : '')}
              />
              <CustomTextFieldToken
                fullWidth
                name='tokenThree'
                label=''
                variant='outlined'
                value={values.tokenThree}
                onChange={handleChange}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { handleKeyDown(e, tokenFourRef) }}
                inputRef={tokenThreeRef}
                helperText={touched.tokenThree !== undefined ? errors.tokenThree : ''}
                error={Boolean(touched.tokenThree !== undefined ? errors.tokenThree : '')}
              />
              <CustomTextFieldToken
                fullWidth
                name='tokenFour'
                label=''
                variant='outlined'
                value={values.tokenFour}
                onChange={handleChange}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { handleKeyDown(e, tokenFiveRef) }}
                inputRef={tokenFourRef}
                helperText={touched.tokenFour !== undefined ? errors.tokenFour : ''}
                error={Boolean(touched.tokenFour !== undefined ? errors.tokenFour : '')}
              />
              <CustomTextFieldToken
                fullWidth
                name='tokenFive'
                label=''
                variant='outlined'
                value={values.tokenFive}
                onChange={handleChange}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { handleKeyDown(e, tokenSixRef) }}
                inputRef={tokenFiveRef}
                helperText={touched.tokenFive !== undefined ? errors.tokenFive : ''}
                error={Boolean(touched.tokenFive !== undefined ? errors.tokenFive : '')}
              />
              <CustomTextFieldToken
                fullWidth
                name='tokenSix'
                label=''
                variant='outlined'
                value={values.tokenSix}
                onChange={handleChange}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { handleKeyDown(e, tokenSixRef) }}
                inputRef={tokenSixRef}
                helperText={touched.tokenSix !== undefined ? errors.tokenSix : ''}
                error={Boolean(touched.tokenSix !== undefined ? errors.tokenSix : '')}
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

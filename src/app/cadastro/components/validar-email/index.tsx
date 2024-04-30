import React, { useRef } from 'react'

import { Form, Formik } from 'formik'
import { Box, useTheme } from '@mui/material'

import * as Yup from 'yup'
import CustonButton from '@/components/button/custom-button'
import CustomTypography from '@/components/text/CustomTypography'
import CustomTextFieldToken from '@/components/textfield/custom-text-field-token'

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, nextRef: React.MutableRefObject<HTMLInputElement | null>): void => {
    const isValidCharacter = /[a-zA-Z0-9]/.test(e.key)
    const isBackspaceOrDelete = e.key === 'Backspace' || e.key === 'Delete'

    console.log(e.key)

    console.log(isBackspaceOrDelete)

    if (e.key === 'Backspace') {
      e.preventDefault()
      console.log('aqui')
      return
    }

    if (isValidCharacter && (nextRef.current != null)) {
      setTimeout(() => {
        nextRef.current?.focus()
      }, 0)
    } else if (!isBackspaceOrDelete || e.currentTarget.value === '') {
      console.log('aqui')
      e.preventDefault()
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
    const formData = {
      tokenOne,
      tokenTwo,
      tokenThree,
      tokenFour,
      tokenFive,
      tokenSix
    }

    console.log(formData)

    // handleAdvanceStep()
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
                gap: theme.spacing(1)
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
            {JSON.stringify(values, null, 2)}
            <CustonButton
              type="submit"
              fullWidth
              onClick={() => {}}
            >
              Criar conta
            </CustonButton>
          </Form>
        )}
      </Formik>
    </>
  )
}
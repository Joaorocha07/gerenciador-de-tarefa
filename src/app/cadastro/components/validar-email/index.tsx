import React from 'react'

import { Form, Formik } from 'formik'

import * as Yup from 'yup'
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
  const validationSchema = Yup.object().shape({
    tokenEmail: Yup.string().required('Campo obrigatório').email('E-mail inválido')
  })

  const initialValues = {
    tokenEmail: ''
  }

  const handleSubmit = async ({
    tokenEmail
  }:
    typeof initialValues): Promise<void> => {
    const formData = {
      tokenEmail
    }

    console.log(formData)

    handleAdvanceStep()
  }

  return (
    <>
      <CustomTypography text='Enviamos um codigo para o seu e-mail, valide-o!' variant='h6' />
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
            <CustomTextFieldToken
              fullWidth
              name='tokenEmail'
              label='Codigo de verificação'
              variant='outlined'
              value={values.tokenEmail}
              onChange={handleChange}
              helperText={touched.tokenEmail !== undefined ? errors.tokenEmail : ''}
              error={Boolean(touched.tokenEmail !== undefined ? errors.tokenEmail : '')}
            />
          </Form>
        )}
      </Formik>
    </>
  )
}

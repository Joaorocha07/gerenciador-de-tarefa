import React from 'react'

import { type IFormProps } from '@/types/cadastro'

import CustomTextFieldToken
  from '@/components/textfield/custom-text-field-token'

export default function FormEmail ({
  values,
  handleChange,
  errors,
  handleKeyDown,
  touched,
  tokenOneRef,
  tokenTwoRef,
  tokenThreeRef,
  tokenFourRef,
  tokenFiveRef,
  tokenSixRef
}: IFormProps): JSX.Element {
  return (
    <>
      <CustomTextFieldToken
        fullWidth
        name='tokenOne'
        label=''
        variant='outlined'
        value={values.tokenOne}
        onChange={handleChange}
        onKeyDown={
          (
            e: React.KeyboardEvent<HTMLInputElement>
          ) => { handleKeyDown(e, tokenTwoRef) }
        }
        inputRef={tokenOneRef}
        helperText={
          touched.tokenOne !== undefined ? errors.tokenOne : ''}
        error={
          Boolean(touched.tokenOne !== undefined
            ? errors.tokenOne
            : '')
        }
      />
      <CustomTextFieldToken
        fullWidth
        name='tokenTwo'
        label=''
        variant='outlined'
        value={values.tokenTwo}
        onChange={handleChange}
        onKeyDown={
          (
            e: React.KeyboardEvent<HTMLInputElement>
          ) => { handleKeyDown(e, tokenThreeRef) }
        }
        inputRef={tokenTwoRef}
        helperText={
          touched.tokenTwo !== undefined ? errors.tokenTwo : ''
        }
        error={
          Boolean(touched.tokenTwo !== undefined
            ? errors.tokenTwo
            : '')
        }
      />
      <CustomTextFieldToken
        fullWidth
        name='tokenThree'
        label=''
        variant='outlined'
        value={values.tokenThree}
        onChange={handleChange}
        onKeyDown={
          (
            e: React.KeyboardEvent<HTMLInputElement>
          ) => { handleKeyDown(e, tokenFourRef) }
        }
        inputRef={tokenThreeRef}
        helperText={
          touched.tokenThree !== undefined
            ? errors.tokenThree
            : ''
        }
        error={
          Boolean(touched.tokenThree !== undefined
            ? errors.tokenThree
            : '')
        }
      />
      <CustomTextFieldToken
        fullWidth
        name='tokenFour'
        label=''
        variant='outlined'
        value={values.tokenFour}
        onChange={handleChange}
        onKeyDown={
          (
            e: React.KeyboardEvent<HTMLInputElement>
          ) => { handleKeyDown(e, tokenFiveRef) }
        }
        inputRef={tokenFourRef}
        helperText={
          touched.tokenFour !== undefined ? errors.tokenFour : ''
        }
        error={
          Boolean(touched.tokenFour !== undefined
            ? errors.tokenFour
            : ''

          )}
      />
      <CustomTextFieldToken
        fullWidth
        name='tokenFive'
        label=''
        variant='outlined'
        value={values.tokenFive}
        onChange={handleChange}
        onKeyDown={
          (
            e: React.KeyboardEvent<HTMLInputElement>) => {
            handleKeyDown(e, tokenSixRef)
          }
        }
        inputRef={tokenFiveRef}
        helperText={
          touched.tokenFive !== undefined
            ? errors.tokenFive
            : ''
        }
        error={
          Boolean(touched.tokenFive !== undefined
            ? errors.tokenFive
            : '')
        }
      />
      <CustomTextFieldToken
        fullWidth
        name='tokenSix'
        label=''
        variant='outlined'
        value={values.tokenSix}
        onChange={handleChange}
        onKeyDown={
          (
            e: React.KeyboardEvent<HTMLInputElement>
          ) => { handleKeyDown(e, tokenSixRef) }}
        inputRef={tokenSixRef}
        helperText={
          touched.tokenSix !== undefined
            ? errors.tokenSix
            : ''
        }
        error={
          Boolean(touched.tokenSix !== undefined
            ? errors.tokenSix
            : ''
          )}
      />
    </>
  )
}

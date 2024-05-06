import { type IDefaultResponse } from './global'

export interface ICadastroForm {
  nomeCompleto: string
  email: string
  telefone: string
  senha: string
  confirmeSenha: string
}

export interface ICadastroFormResponse extends IDefaultResponse {
  result: ICadastroForm[] | null
}

export interface ITokenForm {
  token: string
}

export interface ITokenFormResponse extends IDefaultResponse {
  result: ITokenForm[] | null
}

export interface IFormProps {
  values: {
    tokenOne: string
    tokenTwo: string
    tokenThree: string
    tokenFour: string
    tokenFive: string
    tokenSix: string
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  touched: any
  errors: any
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.MutableRefObject<HTMLInputElement | null>)
  => void
  tokenOneRef: React.MutableRefObject<HTMLInputElement | null>
  tokenTwoRef: React.MutableRefObject<HTMLInputElement | null>
  tokenThreeRef: React.MutableRefObject<HTMLInputElement | null>
  tokenFourRef: React.MutableRefObject<HTMLInputElement | null>
  tokenFiveRef: React.MutableRefObject<HTMLInputElement | null>
  tokenSixRef: React.MutableRefObject<HTMLInputElement | null>
}

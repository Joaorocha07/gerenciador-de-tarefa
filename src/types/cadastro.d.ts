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

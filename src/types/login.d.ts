import { type IDefaultResponse } from './global'

export interface ILoginForm {
  email: string
  senha: string
}

export interface ILoginFormResponse extends IDefaultResponse {
  result: ILoginForm[] | null
}

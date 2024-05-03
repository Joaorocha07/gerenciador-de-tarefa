import { type ICadastroForm } from '@/types/cadastro'

export interface IInitialState {
  formcadastro: null | ICadastroForm
}

export const initialState: IInitialState = {
  formcadastro: null
}

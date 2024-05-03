/* eslint-disable indent */
import actions from './actions'

import { type IInitialState } from './data'

type ACTIONTYPE =
  | {
    type: typeof actions.SAVE_FORM_CADASTRO
    payload: any
  }

export const reducer = (state: IInitialState, action: ACTIONTYPE): any => {
  switch (action.type) {
    case actions.SAVE_FORM_CADASTRO:
      return { ...state, formcadastro: action.payload }
    default:
      return state
  }
}

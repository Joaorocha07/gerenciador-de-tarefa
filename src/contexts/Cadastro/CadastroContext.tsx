import React, { useReducer, createContext } from 'react'

import { reducer } from './reducer'
import { initialState } from './data'
import { type IChildrenProp } from '@/types/global'
import { type ICadastroForm } from '@/types/cadastro'

import actions from './actions'

interface IMatriculaContext {
  state: {
    formcadastro: ICadastroForm
  }
  saveCadastro: (payload: ICadastroForm) => void
}

export const CadastroContext = createContext<IMatriculaContext | null>(null)

export default function CadastroProvider ({
  children
}: IChildrenProp): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState)

  const saveCadastro = (payload: ICadastroForm): void => {
    dispatch({ type: actions.SAVE_FORM_CADASTRO, payload })
  }

  return (
    <CadastroContext.Provider
      value={{
        state,
        saveCadastro
      }}
    >
      {children}
    </CadastroContext.Provider>
  )
}

'use client'
import React from 'react'

import { type IChildrenProp } from '@/types/global'

import CustomHead from '@/components/custom-head'
import LoginAndCadastro from '@/layout/login-and-cadastro'
import CadastroProvider from '@/contexts/Cadastro/CadastroContext'

export default function CadastroLayout ({ children }: IChildrenProp): JSX.Element {
  return (
    <>
      <CustomHead title="Cadastro" />
      <CadastroProvider>
        <LoginAndCadastro>
          {children}
        </LoginAndCadastro>
      </CadastroProvider>
    </>
  )
}

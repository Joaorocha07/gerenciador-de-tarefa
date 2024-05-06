'use server'

import { type ICadastroFormResponse } from '@/types/cadastro'

interface ICadastrarUsuarioArgs {
  nome: string
  email: string
  telefone: string
  password: string
}

export default async function CadastrarUsuario ({
  nome,
  email,
  telefone,
  password
}: ICadastrarUsuarioArgs): Promise<any> {
  try {
    const apiUrl = `${
      process.env.NEXT_PUBLIC_API ?? ''
    }/register`

    const body = JSON.stringify({
      nome,
      email,
      telefone,
      password
    })

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const requestOptions: RequestInit = {
      method: 'POST',
      headers,
      body,
      redirect: 'follow',
      cache: 'no-cache'
    }

    const data = await fetch(apiUrl, requestOptions)
    const jsonData: ICadastroFormResponse = await data.json()

    return jsonData
  } catch (error: any) {
    return null
  }
}

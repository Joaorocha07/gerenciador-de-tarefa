'use server'

import { type ITokenFormResponse } from '@/types/cadastro'

interface IValidarTokenArgs {
  codigo: string
  email: string
}

export default async function ValidarToken ({
  codigo,
  email
}: IValidarTokenArgs): Promise<any> {
  try {
    const apiUrl = `${
      process.env.NEXT_PUBLIC_API ?? ''
    }/coding`

    const body = JSON.stringify({
      codigo,
      email
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
    const jsonData: ITokenFormResponse = await data.json()

    return jsonData
  } catch (error: any) {
    return null
  }
}

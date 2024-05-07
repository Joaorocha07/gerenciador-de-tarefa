'use server'

import { type ILoginFormResponse } from '@/types/login'

interface ILoginArgs {
  email: string
  password: string
}

export default async function Login ({
  email,
  password
}: ILoginArgs): Promise<any> {
  try {
    const apiUrl = `${
      process.env.NEXT_PUBLIC_API ?? ''
    }/login`

    const body = JSON.stringify({
      email,
      password
    })

    console.log(body)

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
    const jsonData: ILoginFormResponse = await data.json()

    return jsonData
  } catch (error: any) {
    return null
  }
}

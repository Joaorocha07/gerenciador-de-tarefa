import React from 'react'
import { type IChildrenProp } from '@/types/global'
import CustomHead from '@/components/head/CustomHead'

export default function LoginLayout ({ children }: IChildrenProp): JSX.Element {
  return (
    <div>
      <CustomHead title="Login" />
      {children}
    </div>
  )
}

import React from 'react'

import { type IChildrenProp } from '@/types/global'

import CustomHead from '@/components/custom-head'

export default function LoginLayout ({ children }: IChildrenProp): JSX.Element {
  return (
    <>
      <CustomHead title="Login" />
      {children}
    </>
  )
}

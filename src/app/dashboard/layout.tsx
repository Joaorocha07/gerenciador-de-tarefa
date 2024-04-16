'use client'
import React from 'react'

import { type IChildrenProp } from '@/types/global'
import { DrawerProvider } from '@/contexts/Drawer/DrawerContext'

import CustomHead from '@/components/head/CustomHead'
import MenuSide from '@/components/menu-side/MenuSide'

export default function LoginLayout ({ children }: IChildrenProp): JSX.Element {
  return (
    <>
      <CustomHead title="Dashboard" />
      <DrawerProvider>
        <MenuSide>
          {children}
        </MenuSide>
      </DrawerProvider>
    </>
  )
}

/* eslint-disable max-len */
import React, { createContext, useCallback, useContext, useState } from 'react'

import { type IChildrenProp } from '@/types/global'

interface IDrawerContextData {
  isDrawerOpen?: boolean
  toggleDrawerOpen?: () => void
}

const DrawerContext = createContext<IDrawerContextData>({})

export const useDrawerContext = (): any => {
  return useContext(DrawerContext)
}

export const DrawerProvider = ({ children }: IChildrenProp): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
  }, [])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}

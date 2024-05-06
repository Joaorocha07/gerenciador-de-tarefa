import { useState } from 'react'

import { useDrawerContext }
  from '@/contexts/Drawer/DrawerContext'

import type React from 'react'

interface IMenuItems {
  text: string
  subItems: Array<{
    text: string
    subText: string
    href: string
    icon: React.ReactNode
  }>
}

interface IUseMenu {
  menuItems: IMenuItems[]
  selectedItem: string
  handleItemClick: (item: string) => void
  handleSubItemClick: (subItem: string) => void
}

export const useMenu = (menuItems: IMenuItems[]): IUseMenu => {
  const { toggleDrawerOpen } = useDrawerContext()
  const [selectedItem, setSelectedItem] = useState<string>('')

  const handleItemClick = (item: string): void => {
    setSelectedItem(item)
  }

  const handleSubItemClick = (subItem: string): void => {
    setSelectedItem(subItem)
    toggleDrawerOpen()
  }

  return {
    menuItems,
    selectedItem,
    handleItemClick,
    handleSubItemClick
  }
}

import React, { useState } from 'react'

import { menuItems } from './menu-items'
import { Box, List } from '@mui/material'
import { Home } from '@mui/icons-material'

import SubMenu from './components/SubMenu'
import ListMenuSide from './components/ListMenuSide'

export const ListItensMenu = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<string>('')

  const handleItemClick = (item: string): void => {
    setSelectedItem(item)
  }

  return (
    <Box flex={1}>
      <List component="nav">
        <ListMenuSide
          text='Dashboard'
          href='/dashboard'
          selected={selectedItem === 'dashboard'}
          onClick={() => {
            setSelectedItem('dashboard')
          }}
        >
          <Home />
        </ListMenuSide>

        {menuItems.map((menuItem, index) => (
          <React.Fragment key={index}>
            {menuItem.subItems.length > 0 && (
              <SubMenu
                text={menuItem.text}
                selected={selectedItem === menuItem.text.toLowerCase().replace(/\s/g, '')}
                onClick={() => { handleItemClick(menuItem.text.toLowerCase().replace(/\s/g, '')) }}
              >
                {menuItem.subItems.map((subItem, subIndex) => (
                  <ListMenuSide
                    key={subIndex}
                    text={subItem.text}
                    href={subItem.href}
                    selected={selectedItem === subItem.text.toLowerCase().replace(/\s/g, '')}
                    onClick={() => { handleItemClick(subItem.text.toLowerCase().replace(/\s/g, '')) }}
                  >
                    {subItem.icon}
                  </ListMenuSide>
                ))}
              </SubMenu>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  )
}

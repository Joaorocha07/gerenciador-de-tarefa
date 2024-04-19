import React from 'react'

import { items } from './helper/menu'
import { useMenu } from '@/hook/useMenu'
import { Home } from '@mui/icons-material'
import { Box, List, useTheme } from '@mui/material'

import SubMenu from './components/sub-menu'
import LogoutIcon from '@mui/icons-material/Logout'
import ListMenuSide from './components/list-menu-side'

export const ListItensMenu = (): JSX.Element => {
  const theme = useTheme()
  const { selectedItem, handleItemClick, menuItems, handleSubItemClick } = useMenu(items)

  return (
    <>
      <Box flex={1}>
        <List component="nav">
          <ListMenuSide
            text='Dashboard'
            href='/dashboard'
            selected={selectedItem === 'dashboard'}
            onClick={() => { handleItemClick('dashboard') }}
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
                      onClick={() => { handleSubItemClick(subItem.text.toLowerCase().replace(/\s/g, '')) }}
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
      <Box height={theme.spacing(8)}>
        <ListMenuSide
          text='Sair'
          href='/login'
          selected={selectedItem === 'sair'}
          onClick={() => { handleItemClick('sair') }}
        >
          <LogoutIcon />
        </ListMenuSide>
      </Box>
    </>
  )
}

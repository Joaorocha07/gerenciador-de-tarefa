'use client'
import React from 'react'

import { ListItensMenu } from './ListItensMenu'
import { type IChildrenProp } from '@/types/global'
import { useDrawerContext } from '@/contexts/Drawer/DrawerContext'
import { Avatar, Box, Divider, Drawer, useMediaQuery, useTheme } from '@mui/material'

export default function MenuSide ({ children }: IChildrenProp): JSX.Element {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()

  return (
    <>
      <Drawer open={isDrawerOpen} variant={mobile ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar
              sx={{
                height: theme.spacing(12),
                width: theme.spacing(12)
              }}
              src='/static/images/avatar/1.jpg'
            />
          </Box>

          <Divider />

          <ListItensMenu />
        </Box>
      </Drawer>
      <Box height='100vh' ml={mobile ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}

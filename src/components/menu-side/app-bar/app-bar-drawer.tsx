import React, { useState } from 'react'

import { useDrawerContext } from '@/contexts/Drawer/DrawerContext'

import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material'

import MenuItem from '@mui/material/MenuItem'
import SettingsIcon from '@mui/icons-material/Settings'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CustomTypography from '@/components/text/CustomTypography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ButtonToggleTheme from '@/components/button-toggle-theme'

export default function AppBarDrawer (): JSX.Element {
  const theme = useTheme()
  const { toggleDrawerOpen } = useDrawerContext()

  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const toggleMenu = (): void => {
    toggleDrawerOpen()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.background.paper }}>
        <Toolbar>
          {mobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          )}
          <Box sx={{ flexGrow: 1 }}>
            <ButtonToggleTheme />
          </Box>
          <Box display="flex" alignItems="center" gap={theme.spacing(2)} >
            <IconButton sx={{ color: theme.palette.primary.contrastText }}>
              <SettingsIcon />
            </IconButton>
            <Avatar
              sx={{
                height: theme.spacing(5),
                width: theme.spacing(5)
              }}
              src='/static/images/avatar/1.jpg'
            />
            <CustomTypography text='Nome do usuario' variant='body2' />
            <IconButton onClick={handleMenu} sx={{ color: theme.palette.primary.contrastText }}>
              <KeyboardArrowDownIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

import React, { useState } from 'react'

import { AccountCircle } from '@mui/icons-material'
import { useDrawerContext } from '@/contexts/Drawer/DrawerContext'

import {
  AppBar,
  Box,
  IconButton,
  Menu,
  Toolbar,
  Typography,
  styled,
  useMediaQuery
} from '@mui/material'

import theme from '@/theme'
import MenuItem from '@mui/material/MenuItem'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const CustomIcon = styled('div')({
  backgroundColor: 'white',
  borderRadius: '50%',
  padding: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiSvgIcon-root': {
    color: 'black'
  }
})

export default function AppBarDrawer (): JSX.Element {
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
      <AppBar position="static">
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
              {isMenuOpen ? <CustomIcon> <ChevronLeftIcon /> </CustomIcon> : <CustomIcon> <ChevronRightIcon /> </CustomIcon>}
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
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
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

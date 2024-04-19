import React, { useState } from 'react'

import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material'

import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material'

interface SubMenuProps {
  text: string
  children: React.ReactNode
  selected: boolean
  onClick: () => void
}

export default function SubMenu ({ text, children, selected, onClick }: SubMenuProps): JSX.Element {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleClick = (): void => {
    setOpen(!open)
    onClick()
  }
  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ bgcolor: selected ? theme.palette.primary.main : 'transparent' }}>
        <ListItemText primary={text} sx={{ color: theme.palette.primary.contrastText }} />
        <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  )
}

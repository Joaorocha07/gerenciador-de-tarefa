import React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

interface ListMenuSideProps {
  children: React.ReactNode
  text: string
}

export default function ListMenuSide ({ children, text }: ListMenuSideProps): JSX.Element {
  return (
    <List component='nav'>
      <ListItemButton>
        <ListItemIcon>
          {children}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </List>
  )
}

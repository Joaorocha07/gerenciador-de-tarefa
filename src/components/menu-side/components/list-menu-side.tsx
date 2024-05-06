import React from 'react'
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material'
import { useRouter } from 'next/navigation'

interface ListMenuSideProps {
  children: React.ReactNode
  text: string
  href: string
  selected: boolean
  onClick: () => void
}

export default function ListMenuSide ({
  children,
  text,
  href,
  selected,
  onClick
}: ListMenuSideProps): JSX.Element {
  const theme = useTheme()
  const router = useRouter()

  const handleClick = (): void => {
    router.push(href)
    onClick()
  }

  return (
    <ListItemButton
      onClick={handleClick}
      sx={{
        bgcolor: selected
          ? theme.palette.primary.main
          : 'transparent'
      }}
    >
      <ListItemIcon
        sx={{ color: theme.palette.primary.contrastText }}
      >
        {children}
      </ListItemIcon>
      <ListItemText
        primary={text}
        sx={{ color: theme.palette.primary.contrastText }}
      />
    </ListItemButton>
  )
}

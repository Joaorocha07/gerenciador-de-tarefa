import { Button, styled } from '@mui/material'
import React from 'react'

interface SwitchButtonProps {
  variant?: 'text' | 'contained' | 'outlined'
  children: React.ReactNode
  onClick: () => void
  selected: boolean
}

const StyledButton = styled(Button)<{
  selected: boolean
}>(({ theme, selected }) => ({
  backgroundColor: selected
    ? theme.palette.secondary.main
    : theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  width: '50%',
  borderRadius: '6px',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: selected
      ? theme.palette.secondary.main
      : theme.palette.primary.light
  },
  fontWeight: 'bold'
}))

const SwitchButton: React.FC<SwitchButtonProps> = ({
  selected,
  onClick,
  children,
  variant
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      selected={selected}>
      {children}
    </StyledButton>
  )
}

export default SwitchButton

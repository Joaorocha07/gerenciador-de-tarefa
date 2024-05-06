import React from 'react'

import {
  Button,
  type ButtonProps,
  useTheme
} from '@mui/material'

interface ICustonButtonProps extends ButtonProps {
  loading?: boolean
}

export default function CustonButton ({
  loading = false,
  children,
  sx,
  ...otherProps
}: ICustonButtonProps): JSX.Element {
  const theme = useTheme()

  return (
    <Button
      {...otherProps}
      sx={{
        backgroundColor: theme.palette.button.background,
        textTransform: 'capitalize',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '1rem',
        '&:hover': {
          backgroundColor: theme.palette.button.hoverBackground
        },
        height: '50px',
        ...sx
      }}>
      {children}
    </Button>
  )
}

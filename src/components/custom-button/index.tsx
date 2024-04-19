import React from 'react'

import { Button, useTheme } from '@mui/material'

export default function CustonButton (): JSX.Element {
  const theme = useTheme()

  return (
    <Button fullWidth sx={{
      backgroundColor: theme.palette.button.background,
      textTransform: 'capitalize',
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: '1rem',
      '&:hover': {
        backgroundColor: theme.palette.button.hoverBackground
      },
      height: '50px'
    }}>
        Próximo
    </Button>
  )
}

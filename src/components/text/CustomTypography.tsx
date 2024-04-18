import React from 'react'

import { Typography, useMediaQuery, useTheme } from '@mui/material'

interface ICustomTypographyProps {
  text: string
  variant:
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' |
  'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit'
}

function CustomTypography ({ text, variant }: ICustomTypographyProps): JSX.Element {
  const theme = useTheme()
  const tablet = useMediaQuery(theme.breakpoints.down('md'))

  const mobileFontSizes: any = {
    h1: '32px',
    h2: '28px',
    h3: '24px',
    h4: '20px',
    h5: '18px',
    h6: '16px',
    subtitle1: '14px',
    subtitle2: '14px',
    body1: '16px',
    body2: '14px',
    caption: '12px',
    button: '14px',
    overline: '12px',
    inherit: 'inherit'
  }

  const fontSize = tablet ? mobileFontSizes[variant] : variant

  return (
    <Typography
      variant={variant}
      sx={{
        color: theme.palette.primary.contrastText,
        fontWeight: '700',
        fontSize
      }}>
      {text}
    </Typography>
  )
}

export default CustomTypography

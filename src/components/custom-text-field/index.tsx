import React from 'react'

import { TextField, useTheme } from '@mui/material'

interface CustomTextFieldProps {
  label: string
  variant: 'standard' | 'outlined' | 'filled'
  fullWidth?: boolean
}

export default function CustomTextField ({ label, variant, fullWidth }: CustomTextFieldProps): JSX.Element {
  const theme = useTheme()

  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      variant={variant}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme.palette.textfield.border
          },
          '&:hover fieldset': {
            borderColor: theme.palette.textfield.hoverBorder
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.textfield.focusBorder
          },
          '& input': {
            color: theme.palette.textfield.inputText,
            fontWeight: 'bold'
          }
        },
        '& .MuiInputLabel-root': {
          color: theme.palette.textfield.placeholder
        },
        '& .MuiOutlinedInput-input::placeholder': {
          color: theme.palette.textfield.placeholder
        }
      }}
    />
  )
}

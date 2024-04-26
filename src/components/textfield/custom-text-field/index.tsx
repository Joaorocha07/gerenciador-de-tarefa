import React from 'react'

import { TextField, useTheme } from '@mui/material'

interface CustomTextFieldProps {
  type: 'text' | 'password' | 'email' | 'number' | 'date' | 'datetime-local' | 'time' | 'month' | 'week' | 'tel' | 'url' | 'search' | 'button' | 'checkbox' | 'image' | 'file'
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  variant: 'standard' | 'outlined' | 'filled'
  fullWidth?: boolean
  value: string
  label: string
  name: string
  error?: boolean
  helperText?: string
  showPassword?: boolean
  onTogglePasswordVisibility?: () => void
  startAdornment?: React.ReactNode
  isDisable?: boolean
  multiline?: boolean
  rows?: number
  onBlur?: () => void
}

export default function CustomTextField ({
  label,
  variant,
  fullWidth,
  type,
  value,
  name,
  error,
  helperText,
  multiline,
  rows,
  isDisable,
  onChange,
  onBlur,
  ...otherProps
}: CustomTextFieldProps): JSX.Element {
  const theme = useTheme()

  return (
    <TextField
      fullWidth={fullWidth}
      variant={variant}
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      multiline={multiline}
      rows={rows}
      disabled={isDisable}
      onBlur={onBlur}
      {...otherProps}
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

import React from 'react'

import { TextField, useTheme } from '@mui/material'

interface CustomTextFieldTokenProps {
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
  ref?: any
  onFocus?: any
  inputRef?: any
  onKeyDown?: any
}

export default function CustomTextFieldToken ({
  label,
  variant,
  fullWidth,
  value,
  name,
  error,
  helperText,
  multiline,
  rows,
  isDisable,
  onChange,
  onBlur,
  ref,
  onFocus,
  inputRef,
  onKeyDown,
  ...otherProps
}: CustomTextFieldTokenProps): JSX.Element {
  const theme = useTheme()

  console.log(value)

  return (
    <TextField
      fullWidth={fullWidth}
      variant={variant}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      multiline={multiline}
      rows={rows}
      disabled={isDisable}
      onBlur={onBlur}
      type="text"
      ref={ref}
      onFocus={onFocus}
      inputRef={inputRef}
      onKeyDown={onKeyDown}
      {...otherProps}
      inputProps={{
        maxLength: 1
      }}
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
            textTransform: 'uppercase',
            color: theme.palette.textfield.inputText,
            fontWeight: 'bold'
          }
        },
        '& .MuiInputLabel-root': {
          color: theme.palette.textfield.placeholder
        },
        '& .MuiOutlinedInput-input::placeholder': {
          color: theme.palette.textfield.placeholder
        },
        width: '20%'
      }}
    />
  )
}

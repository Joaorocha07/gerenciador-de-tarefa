import React, { useState } from 'react'

import { Visibility, VisibilityOff } from '@mui/icons-material'

import {
  IconButton,
  InputAdornment,
  TextField,
  useTheme
} from '@mui/material'

interface CustomTextFieldPasswordProps {
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

export default function CustomTextFieldPassword ({
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
  ...otherProps
}: CustomTextFieldPasswordProps): JSX.Element {
  const theme = useTheme()
  const [showPassword, setShowPassword] =
    useState<boolean>(false)

  const handleClickShowPassword = (): void => {
    setShowPassword(showPassword => !showPassword)
  }

  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      variant={variant}
      type={showPassword ? 'text' : 'password'}
      value={value}
      onChange={onChange}
      name={name}
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
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword
                ? (
                  <VisibilityOff
                    sx={{
                      fontSize: {
                        xl: '24px',
                        md: '16px',
                        color: theme.palette.primary.contrastText
                      }
                    }}
                  />)
                : (
                  <Visibility
                    sx={{
                      fontSize: {
                        xl: '24px',
                        md: '16px',
                        color: theme.palette.primary.contrastText
                      }
                    }}
                  />)}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}

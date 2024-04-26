import React from 'react'
import { TextField, useTheme } from '@mui/material'
import InputMask from 'react-input-mask'

interface CustomTextFieldPhoneProps {
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

export default function CustomTextFieldPhone ({
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
}: CustomTextFieldPhoneProps): JSX.Element {
  const theme = useTheme()

  return (
    <InputMask
      mask="(99) 99999-9999"
      maskChar=""
      value={value}
      onChange={onChange}
    >
      {(inputProps: any) => (
        <TextField
          fullWidth={fullWidth}
          variant={variant}
          label={label}
          name={name}
          value={inputProps.value}
          onChange={inputProps.onChange}
          error={error}
          helperText={helperText}
          multiline={multiline}
          rows={rows}
          disabled={isDisable}
          onBlur={onBlur}
          type="tel"
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
      )}
    </InputMask>
  )
}

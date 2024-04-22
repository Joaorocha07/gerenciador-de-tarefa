import React, { useState } from 'react'

import { InputAdornment, MenuItem, Select, type SelectChangeEvent, TextField, useTheme } from '@mui/material'

interface Country {
  code: string
  name: string
}

const countries: Country[] = [
  { code: '+55', name: 'Brazil' },
  { code: '+1', name: 'USA' },
  { code: '+44', name: 'UK' }
]

interface CustomTextFieldPhoneProps {
  variant: 'standard' | 'outlined' | 'filled'
  fullWidth?: boolean
  label: string
}

export default function CustomTextFieldPhone ({ label, variant, fullWidth }: CustomTextFieldPhoneProps): JSX.Element {
  const theme = useTheme()
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  const handleChangeCountry = (event: SelectChangeEvent<string>): void => {
    const countryCode = event.target.value
    const country = countries.find((c) => c.code === countryCode)
    if (country !== null && country !== undefined) {
      setSelectedCountry(country)
    }
  }

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
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Select
              value={selectedCountry.code}
              onChange={handleChangeCountry}
              inputProps={{ 'aria-label': 'Select country' }}
              sx={{ border: 'none', color: theme.palette.textfield.inputText, fontWeight: 'bold' }}
            >
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code} sx={{ color: theme.palette.textfield.inputText }}>
                  <span>{country.code}</span>
                </MenuItem>
              ))}
            </Select>
          </InputAdornment>
        )
      }}
    />
  )
}

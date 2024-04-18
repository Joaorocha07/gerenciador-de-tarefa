'use client'
import { createTheme } from '@mui/material'
import { blue, cyan, yellow } from '@mui/material/colors'

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#02A0FC',
      dark: blue[800],
      light: blue[500],
      contrastText: '#272727'
    },
    secondary: {
      main: cyan[500],
      dark: yellow[400],
      light: yellow[300],
      contrastText: '#ffffff'
    },
    background: {
      paper: '#ffffff',
      default: '#f7f6f3'
    }
  }
})

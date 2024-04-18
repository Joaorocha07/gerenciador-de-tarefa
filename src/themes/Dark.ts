'use client'
import { createTheme } from '@mui/material'
import { blue, cyan, yellow } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#02A0FC',
      dark: blue[800],
      light: blue[500],
      contrastText: '#ffffff'
    },
    secondary: {
      main: cyan[500],
      dark: yellow[400],
      light: yellow[300],
      contrastText: '#ffffff'
    },
    background: {
      paper: '#272727',
      default: '#181818'
    }
  }
})

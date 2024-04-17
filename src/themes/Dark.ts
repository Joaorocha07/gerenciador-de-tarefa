'use client'
import { createTheme } from '@mui/material'
import { blue, cyan, yellow } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: blue[400],
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
      paper: '#303134',
      default: '#202124'
    }
  }
})

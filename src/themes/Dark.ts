'use client'
import { createTheme } from '@mui/material'
import { yellow } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#02A0FC',
      dark: '#474747',
      light: '#333333',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#181818',
      dark: yellow[400],
      light: yellow[300],
      contrastText: '#ffffff'
    },
    background: {
      paper: '#272727',
      default: '#181818'
    },
    textfield: {
      border: '#474747',
      hoverBorder: '#B4B4B4',
      focusBorder: '#0F9CEE',
      placeholder: '#F1F1F4',
      inputText: '#F1F1F4'
    },
    button: {
      background: '#58A5FF',
      hoverBackground: '#084387'
    },
    buttonTogglTheme: {
      background: '#ffffff'
    }
  }
})

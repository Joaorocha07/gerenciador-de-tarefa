'use client'
import { createTheme } from '@mui/material'
import { yellow } from '@mui/material/colors'

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#02A0FC',
      dark: '#DEE1E4',
      light: '#ECEFF1',
      contrastText: '#181818'
    },
    secondary: {
      main: '#FDFDFD',
      dark: yellow[400],
      light: yellow[300],
      contrastText: '#ffffff'
    },
    background: {
      paper: '#ffffff',
      default: '#FDFDFD'
    },
    textfield: {
      border: '#D5D8DB',
      hoverBorder: '#606060',
      focusBorder: '#0F9CEE',
      placeholder: '#333333',
      inputText: '#4C4C4C'
    },
    button: {
      background: '#0D6FDE',
      hoverBackground: '#084387'
    },
    buttonTogglTheme: {
      background: '#181818'
    },
    iconLogin: {
      colorSuccess: '#62C972',
      colorError: '#EA362C'
    }
  }
})

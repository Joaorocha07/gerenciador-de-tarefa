import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    textfield: {
      border: '#ccc',
      hoverBorder: '#aaa',
      focusBorder: '#555',
      placeholder: '#999',
      inputText: '#fff'
    },
    button: {
      background: '#007bff',
      hoverBackground: '#0056b3'
    },
    buttonTogglTheme: {
      background: '#28a745'
    },
    iconLogin: {
      colorSuccess: '#28a745',
      colorError: '#dc3545'
    }
  }
})

export default theme

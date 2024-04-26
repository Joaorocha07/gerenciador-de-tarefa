import React from 'react'

import { Box, useTheme } from '@mui/material'

import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import CustomTypography from '@/components/text/CustomTypography'

interface IconTextPasswordProps {
  validations: boolean
  text: string
}

export default function IconTextPassword ({ validations, text }: IconTextPasswordProps): JSX.Element {
  const theme = useTheme()

  return (
    <Box display="flex" alignItems="center">
      {validations
        ? <CheckIcon
          sx={{
            color: theme.palette.iconLogin.colorSuccess,
            height: '20px',
            width: '20px'
          }}
        />
        : <CloseIcon
          sx={{
            color: theme.palette.iconLogin.colorError,
            height: '20px',
            width: '20px'
          }}
        />
      }
      <Box ml={1}>
        <CustomTypography text={text} variant="body2" />
      </Box>
    </Box>
  )
}

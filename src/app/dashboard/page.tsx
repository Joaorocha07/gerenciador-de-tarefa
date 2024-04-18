'use client'
import React from 'react'

import { Box } from '@mui/material'
import CustomTypography from '@/components/text/CustomTypography'

export default function Dashboard (): JSX.Element {
  return (
    <Box>
      <CustomTypography text='Dashboard' variant='h4' />
    </Box>
  )
}

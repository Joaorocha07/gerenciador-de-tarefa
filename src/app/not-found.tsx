'use client'
import React from 'react'

import { Box } from '@mui/material'

import CustomHead from '@/components/custom-head'

export default function NotFound (): JSX.Element {
  return (
    <>
      <CustomHead title="Página não encotrada!" />
      <Box>Página não encontrada!</Box>
    </>
  )
}

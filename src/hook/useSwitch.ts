import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface IUseSwitch {
  selectedButton: string
  handleButtonClick: (buttonName: 'login' | 'novaConta') => void
}

export const useSwitch = (): IUseSwitch => {
  const router = useRouter()

  const [selectedButton, setSelectedButton] =
    useState<'login' | 'novaConta'>('novaConta')

  const handleButtonClick = (
    buttonName: 'login' | 'novaConta'
  ): void => {
    router.push('/login')
    setSelectedButton(buttonName)
  }

  return {
    selectedButton,
    handleButtonClick
  }
}

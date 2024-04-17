import React from 'react'

import { AddTask } from '@mui/icons-material'

import EditNoteIcon from '@mui/icons-material/EditNote'

export const items = [
  {
    text: 'Tarefas',
    subItems: [
      { text: 'Criar Tarefas', subText: 'criar-tarefa', href: '/dashboard/tarefas', icon: <AddTask /> },
      { text: 'Editar Tarefas', subText: 'editar-tarefa', href: '/dashboard/tarefas', icon: <EditNoteIcon /> }
    ]
  }
]

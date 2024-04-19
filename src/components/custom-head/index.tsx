import React from 'react'

interface CustomHeadProps {
  title: string
}

export default function CustomHead ({ title }: CustomHeadProps): JSX.Element {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta name="description" content="Gerenciador de tarefas" />
      <link
        rel="icon"
        href="/icons/task-icon.png"
        type="image/svg+xml"
        sizes="any"
      />
    </>
  )
}

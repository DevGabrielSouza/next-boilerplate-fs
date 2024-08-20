import React from 'react'

export type GenericProps<T = unknown> = {
  children?: React.ReactNode
  className?: string
} & T

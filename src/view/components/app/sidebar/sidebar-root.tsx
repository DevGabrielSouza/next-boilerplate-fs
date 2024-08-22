import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import React from 'react'

export default function SidebarRoot({ children, className }: GenericProps) {
  return (
    <aside
      className={cn([
        className,
        'flex h-screen flex-col gap-2 bg-indigo-900 text-white'
      ])}
    >
      {children}
    </aside>
  )
}

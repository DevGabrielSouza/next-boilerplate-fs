import { cn } from '@/lib/utils'
import { GenericProps } from '@/types/generic-props'
import Link, { LinkProps } from 'next/link'
import React from 'react'

type SidebarNavLinkProps = GenericProps & LinkProps

export default function SidebarNavLink({
  children,
  className,
  ...props
}: SidebarNavLinkProps) {
  return (
    <Link className={cn([className])} {...props}>
      {children}
    </Link>
  )
}

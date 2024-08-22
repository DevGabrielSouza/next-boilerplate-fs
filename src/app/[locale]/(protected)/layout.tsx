import React from 'react'

export default async function AppLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='grid grid-cols-[16rem_1fr] gap-4'>
      <main>{children}</main>
    </div>
  )
}

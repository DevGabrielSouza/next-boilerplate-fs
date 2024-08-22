'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/view/components/ui/card'
import { Button } from '@/view/components/ui/button'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import logger from '@/config/logger'
import { useTranslations } from 'next-intl'

export default function FormLogin() {
  const t = useTranslations()

  const handleProviderLogin = async (provider: string) => {
    try {
      signIn(provider)
    } catch (error) {
      logger.error(error)
    }
  }

  return (
    <div className='flex h-screen w-full items-center justify-center bg-background px-4'>
      <Card className='mx-auto w-full max-w-md'>
        <CardHeader className='text-center'>
          <CardTitle className='text-3xl font-bold'>
            {t('auth.welcome')}
          </CardTitle>
          <CardDescription className='text-muted-foreground'>
            {t('auth.signIn')}
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Button
            variant='outline'
            className='w-full'
            onClick={() => handleProviderLogin('github')}
          >
            <GitlabIcon className='mr-2 h-5 w-5' />
            Sign in with GitHub
          </Button>
          <Button
            variant='outline'
            className='w-full'
            onClick={() => handleProviderLogin('google')}
          >
            <ChromeIcon className='mr-2 h-5 w-5' />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='10' />
      <circle cx='12' cy='12' r='4' />
      <line x1='21.17' x2='12' y1='8' y2='8' />
      <line x1='3.95' x2='8.54' y1='6.06' y2='14' />
      <line x1='10.88' x2='15.46' y1='21.94' y2='14' />
    </svg>
  )
}

function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z' />
    </svg>
  )
}

import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations()

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-y-2 bg-violet-900'>
      <h1 className='text-4xl font-bold text-white'>Next Boilerplate</h1>
      <h2 className='text-white'>{t('app.description')}</h2>
    </main>
  )
}

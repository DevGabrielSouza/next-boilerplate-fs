import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations()

  return (
    <main className='flex bg-violet-900 min-h-screen flex-col items-center justify-center gap-y-2'>
      <h1 className='text-4xl text-white font-bold'>Next Boilerplate</h1>
      <h2 className='text-white'>{t('app.description')}</h2>
    </main>
  )
}

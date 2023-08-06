import type { FC, PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import classNames from 'classnames'
import Navbar from '@/common/components/navbar'
import SquareParticlesBg from '../components/square-particles-bg'

const inter = Inter({
  adjustFontFallback: true,
  display: 'swap',
  fallback: [
    'sans-serif'
  ],
  preload: true,
  style: ["normal"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "600", "700"],
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const classes = classNames(inter.className, 'relative flex flex-col items-center bg-gray-50')

  return (
    <html className='h-full'>
      <body className={classes}>
        <section className='w-[600px] px-7 py-10 bg-white rounded-md shadow-lg border border-gray-50'>
          <Navbar />
          <main>
            {children}
          </main>
        </section>
        <SquareParticlesBg />
      </body>
    </html>
  )
}

export default RootLayout

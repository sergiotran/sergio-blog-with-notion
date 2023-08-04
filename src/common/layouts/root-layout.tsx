import type { FC, PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import classNames from 'classnames'
import Navbar from '@/common/components/navbar'

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
  const classes = classNames(inter.className, 'bg-gray-200 flex flex-col items-center py-10')

  return (
    <html className='h-full'>
      <body className={classes}>
        <section className='bg-white p-5 rounded-md shadow-lg w-[768px]'>
          <Navbar />
          <main>
            {children}
          </main>
        </section>
      </body>
    </html>
  )
}

export default RootLayout

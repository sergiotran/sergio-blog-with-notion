import type { Metadata } from 'next'
import RootLayout from '@/common/layouts/root-layout'
import '@/assets/styles/global.scss'

export const metadata: Metadata = {
  title: 'Sergio Portfolio',
  description: 'Frontend Developer portfofio',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  )
}

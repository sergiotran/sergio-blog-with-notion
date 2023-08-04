import type { FC } from 'react'
import Heading from '@/common/components/heading'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <section>
      <HorizontalProfileCard />
    </section>
  )
}

const HorizontalProfileCard: FC = () => {
  return <div className='relative h-48 flex flex-col items-center justify-center py-5 gap-5'>
    <div className='relative flex-shrink-0 flex-grow-0 w-32 h-32 bg-gray-100 rounded-full overflow-hidden'>
      <Image src='/images/sergio.jpg' alt='Sergio' fill className='object-cover bg-center' />
    </div>
    <Heading as='h2' level={1}>
      Duc Tran <span className='inline-block px-3 py-1 bg-slate-700 text-white rounded-md'>(Sergio.)</span>
    </Heading>
  </div>
}

export default HomePage

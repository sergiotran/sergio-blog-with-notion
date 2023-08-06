import type { FC } from 'react'
import Heading from '@/common/components/heading'
import Image from 'next/image'

const HorizontalProfileCard: FC = () => {
  return <div className='relative rounded-md mb-3 flex flex-row items-center justify-center gap-5'>
    <div className='relative flex-shrink-0 flex-grow-0 w-32 h-32 bg-gray-100 rounded-full border-2 border-gray-800 overflow-hidden'>
      <Image src='/images/sergio.jpg' alt='Sergio' fill className='object-cover bg-center' />
    </div>
    <div className='flex flex-col'>
      <Heading as='h2' level={1}>
        Duc Tran
      </Heading>
      <div className=''>
        Frontend Developer
      </div>
    </div>
  </div>
}

export default HorizontalProfileCard;

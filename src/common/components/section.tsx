import type { FC, PropsWithChildren } from 'react'
import Heading from './heading'

type Props = {
  title: string;
  subtitle?: string;
} & PropsWithChildren;

const Section: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <section className='py-3'>
      <div className=''>
        <Heading level={3} as='h3' className='border-b-2 inline-block flex-grow-0 mb-3 border-b-black'>{title}</Heading>
        {subtitle && <Heading level={5} as='p'>{subtitle}</Heading>}
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}

export default Section

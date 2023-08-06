'use client'
import type { FC } from 'react'
import { usePathname } from 'next/navigation'
import { isEqual } from 'lodash'
import classNames from 'classnames'
import Link from 'next/link'
import Heading from './heading'

type NavbarItemProps = {
  path: string;
  label: string;
  dropdown?: NavbarItemProps[]
  active?: boolean;
}

const NAVIGATION_ITEMS: NavbarItemProps[] = [
  {
    path: '/',
    label: 'About',
  },
  {
    path: '/projects',
    label: 'Portfolio',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
]

const Navbar: FC = () => {
  const pathname = usePathname()

  return (
    <nav className='flex flex-col justify-center gap-5 mb-10 rounded-md items-center'>
      <div className='flex flex-col h-full text-center leading-none'>
        <Heading as='h1' level={1} className='flex-grow-0'><Link href='/'>SergioTran.</Link></Heading>
        <Heading as='p' level={5} className='flex-grow-0 !font-normal text-sm'>IT Blogging and Sharing Website</Heading>
      </div>
      <ul className='flex flex-row gap-3'>
        {NAVIGATION_ITEMS.map((itemProps, index) => {
          const isActive = isEqual(itemProps.path, pathname);
          return <NavbarItem key={index} {...itemProps} active={isActive} />
        })}
      </ul>
    </nav>
  )
}

const NavbarItem: FC<NavbarItemProps> = ({ label, path, dropdown, active }) => {
  const listItemClasses = classNames('relative group', active ? 'font-bold text-black' : 'text-slate-600');

  return <li className={listItemClasses}>
    <Link className='group-hover:text-black transition duration-300 ease-in-out' href={path}>
      {label}
    </Link>
  </li>
}

export default Navbar

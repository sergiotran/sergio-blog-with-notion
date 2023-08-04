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
    label: 'Về tôi',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
]

const Navbar: FC = () => {
  const pathname = usePathname()

  return (
    <nav className='border-b flex flex-row gap-3 mb-3 pb-3 items-center'>
      <Heading as='h1' level={2} className='flex-grow-0'>Sergio.</Heading>
      <ul className='flex flex-row ml-auto gap-2'>
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

'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchInput from './SearchInput'

export function NavBar() {
  const pathname = usePathname()

  const navigation = [
    {
      name: 'Characters',
      href: '/characters',
      current: pathname.includes('/characters'),
    },
    {
      name: 'Locations',
      href: '/locations',
      current: pathname.includes('/locations'),
    },
    {
      name: 'Episodes',
      href: '/episodes',
      current: pathname.includes('/episodes'),
    },
  ]

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 w-full justify-between">
              <div className="flex w-full">
                <Image
                  width={150}
                  height={46}
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
                  alt="Rick and Morty"
                />
                <div className="hidden md:-my-px  md:ml-6 md:flex md:w-full md:justify-center md:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                        item.current
                          ? 'border-b-gray-900 text-gray-900'
                          : 'border-transparent text-gray-600 hover:border-gray-900 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center">
                <SearchInput />
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                    item.current
                      ? 'border-gray-900 bg-gray-50 text-gray-900'
                      : 'border-transparent text-gray-600 hover:border-gray-900 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

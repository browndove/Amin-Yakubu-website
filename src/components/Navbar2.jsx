import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom';


const navigation = [
  { name: 'HOME', href: '#', current: true },
  { name: 'ABOUT', href: '/about', current: false },
  { name: 'SAVANNAH REGION', href: '#', current: false },
  { name: 'PROJECTS', href: '#', current: false },
  { name: 'VOLUNTEER', href: '#', current: false },
  { name: 'CONTACT', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Example() {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  
const location = useLocation();
  const updatedNavigation = navigation.map(item => ({
    ...item,
    current: location.pathname === item.href,
  }));

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {updatedNavigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          if (item.name === 'ABOUT') {
                            setAboutDropdownOpen(!aboutDropdownOpen);
                          }
                        }}
                        className={classNames(
                          item.current ? ' text-white bg-gray-900' : 'text-white z-10 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {aboutDropdownOpen && (
            <div className="absolute top-16 right-[28rem] z-10  mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="block px-4 py-2 text-sm text-white">
                <ul className="list-none p-0">
                <Link to="/about">
            <li className="text-gray-900 rounded-[6px] px-4 py-2 cursor-pointer hover:bg-gray-700 hover:text-white">Anim Yakubu</li>
            </Link>

                  <li className="text-gray-900 rounded-[6px] px-4 py-2 cursor-pointer hover:bg-gray-700 hover:text-white">Mission And Vision</li>
                </ul>
              </div>
            </div>
          )}

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {updatedNavigation.map((item) => (
                <button 
                  key={item.name}
                  onClick={() => {
                    if (item.name === 'ABOUT') {
                      setAboutDropdownOpen(!aboutDropdownOpen);
                    }
                  }}
                  className={classNames(
                    item.current ? ' text-white bg-gray-800' : 'text-white hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

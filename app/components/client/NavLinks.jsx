import clsx from 'clsx'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

const NavLinks = () => {
  const links = [
    {
      link: '/',
      title: 'Home',
    },
    {
      link: '/all-products',
      title: 'All products',
    },
    {
      link: '/my-account',
      title: 'My Account',
    },
    {
      link: '/my-orders',
      title: 'Orders',
    },
  ]

  return (
    <nav>
      <ul className={clsx('hidden items-center gap-8 sm:flex')}>
        {links.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="font-medium text-green-800 hover:text-green-600 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav_icon block text-xl sm:hidden">
        <FaBars />
      </div>
    </nav>
  )
}

export default NavLinks

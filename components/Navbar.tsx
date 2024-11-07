import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full px-4 lg:px-8 font-bold text-lg bg-[#c4a99b]'>
      <header className="flex flex-col md:flex-row items-center justify-between">
        <div><Link className="flex text-2xl mt-4 items-center" href="/">
          <span>Quotable</span>
        </Link></div>
        <div>
        <nav className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="border-gray-200 font-medium md:flex hidden rounded-md p-1"
          />
          <Link className="hover:bg-[#4b281e] hover:text-gray-50 h-14 content-center px-3" href="/">
            Home
          </Link>
          <Link className="hover:bg-[#4b281e] hover:text-gray-50 h-14 content-center px-3" href="#">
            Categories
          </Link>
          <Link className="hover:bg-[#4b281e] hover:text-gray-50 h-14 content-center px-3" href="#">
            Topics
          </Link>
          <Link className="hover:bg-[#4b281e] hover:text-gray-50 h-14 content-center px-3" href="#">
            Contact
          </Link>
        </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar

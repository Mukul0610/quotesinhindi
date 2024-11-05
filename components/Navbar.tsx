import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[100%] px-[8%] font-bold text-lg bg-[#c4a99b]'>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex text-2xl items-center justify-center" href="/">
          <span>Quotable</span>
        </Link>
        <nav className="ml-auto font-medium flex items-center gap-2 sm:gap-4">
        <input
            type="text"
            placeholder="Search..."
            className="border-gray-200 font-medium rounded-md p-1"
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
      </header>
    </div>
  )
}

export default Navbar

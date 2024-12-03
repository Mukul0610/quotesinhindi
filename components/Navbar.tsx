// import Link from 'next/link'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='w-full px-4 lg:px-8 font-bold text-lg bg-[#c4a99b]'>
//       <header className="flex flex-col md:flex-row items-center justify-between">
//         <div><Link className="flex text-2xl mt-4 items-center" href="/">
//           <span className='font-serif'>Pure</span><span className='text-gray-800 font-serif'>Vichar</span>
//         </Link></div>
//         <div>
//         <nav className="flex items-center gap-4">
//           {/* <input
//             type="text"
//             placeholder="Search..."
//             className="border-gray-200 font-medium md:flex hidden rounded-md p-1"
//           /> */}
//           <Link className="hover:bg-[#4b281e] hover:text-gray-50 h-14 content-center px-3" href="/">
//             Home
//           </Link>
//           <Link className="hover:bg-[#4b281e] hover:text-gray-50 h-14 content-center px-3" href="/shayari">
//             Shayari
//           </Link>
//           <Link className="hover:bg-[#4b281e] hover:text-gray-50 h-14 content-center px-3" href="/social_media_quotes">
//             2-Lines-Quote
//           </Link>
//           <Link className="hover:bg-[#4b281e] hover:text-gray-50 h-14 content-center px-3" href="#">
//             Blogs
//           </Link>
//         </nav>
//         </div>
//       </header>
//     </div>
//   )
// }

// export default Navbar
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shayari', label: 'Shayari' },
    { href: '/social_media_quotes', label: '2-Lines-Quote' },
    { href: '#', label: 'Blogs' }
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-[#c4a99b] shadow-md">
      <header className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center font-bold justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-1 text-2xl transition-colors hover:text-[#4b281e]"
          >
            <span className="font-serif">Pure</span>
            <span className="font-serif text-gray-800">विचार</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden  md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 font-bold transition-colors hover:text-white group"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-0 bg-[#4b281e] transition-all group-hover:h-full -z-10"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[#4b281e] hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 font-medium hover:bg-[#4b281e] hover:text-white rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
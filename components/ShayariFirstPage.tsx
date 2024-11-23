'use client';

import { useRouter } from 'next/dist/client/components/navigation';
import React from 'react'
import ShayariSidebar from './ShayariSidebar';
import Link from 'next/link';
import { Shayari } from '@/constants/shayari';

const ShayariFirstPage = () => {
    const router = useRouter();
    const updateQueryParams = (page: number, category: string) => {
        const params = new URLSearchParams();
        params.set('page', page.toString());
        router.push(`/shayari/${category}/?${params.toString()}`);
      };
  return (
    
      <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 mr-6">
        {/* Main Content Area (2/3) */}
        <div className="lg:w-2/3">
        <div className="grid gap-6 mt-6 ml-6">
        <h2 className='text-3xl font-serif font-bold'>
          Quotes In Hindi
        </h2>
        {Shayari.map((quote) => (
          <div key={quote._id} className="flex">
            <div className='md:flex w-full border-b-2 pb-10 border-[#c4a99b] gap-4'>
            <blockquote className="flex-3 md:w-[75%] p-4">
              {quote.quote.map((item, index) => (
                <p key={index} className="text-xl mt-2 font-medium">{item}</p>
              ))}
              <footer className="text-lg text-gray-500 mt-6">―{quote.author}</footer>
            </blockquote>
              <div className="flex-1 flex items-center justify-center">
                <button
                  onClick={() => navigator.clipboard.writeText(quote.quote.join(' '))}
                  className="bg-[#4b281e] hover:bg-[#2c221f] text-white font-bold py-2 px-4 rounded"
                >
                  कॉपी करें
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        <button
        >
          पिछला
        </button>

        <span className="flex items-center px-4">
          पृष्ठ 1/ 200
        </span>

        <button
        >
          
          <Link href="/shayari/all">
          अगला
          </Link>
        </button>
      </div>
        </div>
        
        {/* Sidebar (1/3) */}
        <div className="lg:w-1/3 ml-8">
          <ShayariSidebar 
            onCategoryChange={(category) => updateQueryParams(1, category)}
          />
        </div>
      </div>
    </main>
    
  )
}

export default ShayariFirstPage

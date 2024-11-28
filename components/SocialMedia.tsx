'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo from "@/public/logo.png"
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

interface QuotesListProps {
  currentPage: number;
  category: string;
  onPageChange: (page: number) => void;
}

interface Quote {
  _id: string
  quote: string[];          // Corresponds to the quote property in the model
  author: string;        // Corresponds to the author property in the model
  category: string;    // Corresponds to the category property in the model (array of strings)
  likes: number;
}

export default function SocialMedia({ currentPage, category, onPageChange }: QuotesListProps) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const firstWordCategory = category.split('-')[0];

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        // Extract the first word of the category
        const response = await fetch(
          `/api/socialmedia?page=${currentPage}&category=${firstWordCategory}`
        );
        const data = await response.json();
        setQuotes(data.quotes);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
      setLoading(false);
    };

    fetchQuotes();
  }, [currentPage, category]);

  if (loading) {
    return <div className="text-center py-8">लोड हो रहा है...</div>;
  }

  return (
    <div>

      <div className="grid gap-6 mt-6 ml-2">
        <h2 className='text-3xl font-serif font-bold'>
          {firstWordCategory.charAt(0).toUpperCase() + firstWordCategory.slice(1)} Quotes In Hindi
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-8 justify-center'>
          {quotes.map((quote) => (
            <div key={quote._id} className="flex flex-col justify-center items-center w-64 p-4 bg-black rounded-2xl shadow-lg shadow-zinc-800 hover:shadow-[#4b281e]">
              <div className='md:flex w-full pt-10 gap-4 flex flex-col justify-between h-full text-white'>
                <div className="flex-1">
                  <div className='px-4 flex'>
                    <div><Image src={logo} width={40} height={40} alt="logo" className='rounded-full'/></div>
                    
                    <div className='px-3'><p className='text-sm'>Pure-Vichar</p>
                    <p className="text-sm italic">@pure.vichar</p>
                    </div> </div>
                  <blockquote className="p-4">
                    {quote.quote.map((item, index) => (
                      <p key={index} className="mt-2 text-base font-medium">{item}</p>
                    ))}
                    <footer className="text-lg text-gray-500 mt-6">―{quote.author}</footer>
                  </blockquote>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => navigator.clipboard.writeText(quote.quote.join(' '))}
                    className="bg-[#4b281e] hover:bg-[#2c221f] items-end text-white font-bold py-2 px-4 rounded"
                  >
                    कॉपी करें
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          पिछला
        </button>

        <span className="flex items-center px-4">
          पृष्ठ {currentPage} / {totalPages}
        </span>

        <button

          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          अगला
        </button>
      </div>
    </div>
  );
}
// 'use client';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import logo from "@/public/logo.png"
// // import { Card, CardContent } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';

// interface QuotesListProps {
//   currentPage: number;
//   category: string;
//   onPageChange: (page: number) => void;
// }

// interface Quote {
//   _id: string
//   quote: string[];          // Corresponds to the quote property in the model
//   author: string;        // Corresponds to the author property in the model
//   category: string;    // Corresponds to the category property in the model (array of strings)
//   likes: number;
// }

// export default function SocialMedia({ currentPage, category, onPageChange }: QuotesListProps) {
//   const [quotes, setQuotes] = useState<Quote[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [totalPages, setTotalPages] = useState(1);
//   const firstWordCategory = category.split('-')[0];

//   useEffect(() => {
//     const fetchQuotes = async () => {
//       setLoading(true);
//       try {
//         // Extract the first word of the category
//         const response = await fetch(
//           `/api/socialmedia?page=${currentPage}&category=${firstWordCategory}`
//         );
//         const data = await response.json();
//         setQuotes(data.quotes);
//         setTotalPages(data.totalPages);
//       } catch (error) {
//         console.error('Error fetching quotes:', error);
//       }
//       setLoading(false);
//     };

//     fetchQuotes();
//   }, [currentPage, category]);

//   if (loading) {
//     return <div className="text-center py-8">लोड हो रहा है...</div>;
//   }

//   return (
//     <div>

//       <div className="grid gap-6 mt-6 ml-2">
//         <h2 className='text-3xl font-serif font-bold'>
//           {firstWordCategory.charAt(0).toUpperCase() + firstWordCategory.slice(1)} Quotes In Hindi
//         </h2>
//         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-8 justify-center'>
//           {quotes.map((quote) => (
//             <div key={quote._id} className="flex flex-col justify-center items-center w-64 p-4 bg-black rounded-2xl shadow-lg shadow-zinc-800 hover:shadow-[#4b281e]">
//               <div className='md:flex w-full pt-10 gap-4 flex flex-col justify-between h-full text-white'>
//                 <div className="flex-1">
//                   <div className='px-4 flex'>
//                     <div><Image src={logo} width={40} height={40} alt="logo" className='rounded-full'/></div>
                    
//                     <div className='px-3'><p className='text-sm'>Pure-Vichar</p>
//                     <p className="text-sm italic">@pure.vichar</p>
//                     </div> </div>
//                   <blockquote className="p-4">
//                     {quote.quote.map((item, index) => (
//                       <p key={index} className="mt-2 text-base font-medium">{item}</p>
//                     ))}
//                     <footer className="text-lg text-gray-500 mt-6">―{quote.author}</footer>
//                   </blockquote>
//                 </div>
//                 <div className="flex justify-center">
//                   <button
//                     onClick={() => navigator.clipboard.writeText(quote.quote.join(' '))}
//                     className="bg-[#4b281e] hover:bg-[#2c221f] items-end text-white font-bold py-2 px-4 rounded"
//                   >
//                     कॉपी करें
//                   </button>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center gap-2 mt-8">
//         <button
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           पिछला
//         </button>

//         <span className="flex items-center px-4">
//           पृष्ठ {currentPage} / {totalPages}
//         </span>

//         <button

//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           अगला
//         </button>
//       </div>
//     </div>
//   );
// }

'use client';
import React from 'react';
import Image from 'next/image';
import { Heart, Share2, Copy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface QuotesListProps {
  currentPage: number;
  category: string;
  onPageChange: (page: number) => void;
}

interface Quote {
  _id: string;
  quote: string[];
  author: string;
  category: string;
  likes: number;
}

export default function SocialMedia({ currentPage, category, onPageChange }: QuotesListProps) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [likedQuotes, setLikedQuotes] = useState<Set<string>>(new Set());
  const firstWordCategory = category.split('-')[0];

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
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
  }, [currentPage, category, firstWordCategory]);

  const handleLike = (quoteId: string) => {
    setLikedQuotes(prev => {
      const newLikes = new Set(prev);
      if (newLikes.has(quoteId)) {
        newLikes.delete(quoteId);
      } else {
        newLikes.add(quoteId);
      }
      return newLikes;
    });
  };

  const handleCopy = async (text: string[]) => {
    try {
      await navigator.clipboard.writeText(text.join(' '));
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold mb-8 text-gray-900">
        {firstWordCategory.charAt(0).toUpperCase() + firstWordCategory.slice(1)} Quotes In Hindi
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {quotes.map((quote) => (
          <Card 
            key={quote._id} 
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo.png"
                    alt="Pure Vichar"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">Pure-Vichar</h3>
                  <p className="text-sm text-gray-500">@pure.vichar</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {quote.quote.map((line, index) => (
                  <p key={index} className="text-lg text-gray-800 leading-relaxed">
                    {line}
                  </p>
                ))}
                <p className="text-gray-600 italic mt-4">― {quote.author}</p>
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(quote._id)}
                  className="flex items-center gap-2 text-gray-600 hover:text-red-500"
                >
                  <Heart 
                    className={likedQuotes.has(quote._id) ? "fill-red-500 text-red-500" : ""}
                    size={20} 
                  />
                  <span>{quote.likes + (likedQuotes.has(quote._id) ? 1 : 0)}</span>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(quote.quote)}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
                >
                  <Copy size={20} />
                  <span>कॉपी करें</span>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-gray-600 hover:text-green-500"
                >
                  <Share2 size={20} />
                  <span>शेयर</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-6"
        >
          पिछला
        </Button>

        <div className="flex items-center px-4 text-lg font-medium">
          पृष्ठ {currentPage} / {totalPages}
        </div>

        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-6"
        >
          अगला
        </Button>
      </div>
    </div>
  );
}
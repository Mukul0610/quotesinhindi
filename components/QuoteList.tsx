// 'use client';
// import { useEffect, useState } from 'react';
// // import { Card, CardContent } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';

// interface QuotesListProps {
//   currentPage: number;
//   category: string;
//   onPageChange: (page: number) => void;
// }

// interface Quote {
//   _id: string
//   quote: string;          // Corresponds to the quote property in the model
//   author: string;        // Corresponds to the author property in the model
//   category: string[];    // Corresponds to the category property in the model (array of strings)
//   hindi_quote: string;   // Corresponds to the hindi_quote property in the model
//   author_hindi: string;
//   likes: number;
// }

// export default function QuotesList({ currentPage, category, onPageChange }: QuotesListProps) {
//   const [quotes, setQuotes] = useState<Quote[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [totalPages, setTotalPages] = useState(1);
//   const firstWordCategory = typeof category === 'string' ? category.split('-')[0] : '';
//   console.log(firstWordCategory)
//   console.log("mukul")
//   useEffect(() => {
//     const fetchQuotes = async () => {
//       setLoading(true);
//       try {
//         // Extract the first word of the category
//         const response = await fetch(
//           `/api/quotes?page=${currentPage}&category=${firstWordCategory}`
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

//       <div className="grid gap-6 mt-6 ml-6">
//         <h2 className='text-3xl font-serif font-bold'>
//           {firstWordCategory.charAt(0).toUpperCase() + firstWordCategory.slice(1)} Quotes In Hindi
//         </h2>
//         {quotes.map((quote) => (
//           // <Card key={quote._Id} className="hover:shadow-lg transition-shadow">
//           //   <CardContent className="p-4">
//           //     <p className="text-lg font-medium">{quote.hindi_quote}</p>
//           //     <p className="text-sm text-gray-500 mt-2">{quote.category}</p>
//           //   </CardContent>
//           // </Card>
//           <div key={quote._id} className="flex">
//             <div className='md:flex w-full border-b-2 pb-10 border-[#c4a99b] gap-4'>
//               <blockquote className="flex-3 md:w-[75%] p-4">
//                 <p className="text-xl font-medium">{quote.hindi_quote}</p>
//                 <footer className="text-lg text-gray-500 mt-6">―{quote.author_hindi}</footer>
//               </blockquote>
//               <div className="flex-1 flex items-center justify-center">
//                 <button
//                   onClick={() => navigator.clipboard.writeText(quote.hindi_quote)}
//                   className="bg-[#4b281e] hover:bg-[#2c221f] text-white font-bold py-2 px-4 rounded"
//                 >
//                   कॉपी करें
//                 </button>

//               </div>
//             </div>
//           </div>
//         ))}
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

// import React, { useEffect, useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Copy, ThumbsUp } from 'lucide-react';
// // import { Alert, AlertDescription } from '@/components/ui/alert';

// interface QuotesListProps {
//   currentPage: number;
//   category: string;
//   onPageChange: (page: number) => void;
// }

// interface Quote {
//   _id: string;
//   quote: string;
//   author: string;
//   category: string[];
//   hindi_quote: string;
//   author_hindi: string;
//   likes: number;
// }

// const QuotesList = ({ currentPage, category, onPageChange }: QuotesListProps) => {
//   const [quotes, setQuotes] = useState<Quote[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [totalPages, setTotalPages] = useState(1);
//   const [copiedId, setCopiedId] = useState<string | null>(null);
//   const firstWordCategory = typeof category === 'string' ? category.split('-')[0] : '';

//   useEffect(() => {
//     const fetchQuotes = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `/api/quotes?page=${currentPage}&category=${firstWordCategory}`
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
//   }, [currentPage, firstWordCategory]);

//   const handleCopy = async (quote: Quote) => {
//     try {
//       await navigator.clipboard.writeText(quote.hindi_quote);
//       setCopiedId(quote._id);
//       setTimeout(() => setCopiedId(null), 2000);
//     } catch (err) {
//       console.error('Failed to copy text: ', err);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-[400px]">
//         <div className="animate-pulse text-xl font-medium text-gray-600">
//           लोड हो रहा है...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8">
//       <h2 className="text-4xl font-serif font-bold mb-8 text-[#4b281e]">
//         {firstWordCategory.charAt(0).toUpperCase() + firstWordCategory.slice(1)} Quotes In Hindi
//       </h2>

//       <div className="space-y-8">
//         {quotes.map((quote) => (
//           <Card 
//             key={quote._id}
//             className="hover:shadow-xl transition-all duration-300 border-[#c4a99b]"
//           >
//             <CardContent className="p-6">
//               <div className="md:flex gap-6 items-start">
//                 <div className="flex-1">
//                   <blockquote className="text-xl font-medium leading-relaxed mb-4">
//                     {quote.hindi_quote}
//                   </blockquote>
//                   <footer className="text-lg text-gray-600">
//                     ― {quote.author_hindi}
//                   </footer>
//                 </div>
                
//                 <div className="mt-4 md:mt-0 flex flex-col gap-2">
//                   <Button
//                     onClick={() => handleCopy(quote)}
//                     className="flex items-center gap-2 bg-[#4b281e] hover:bg-[#2c221f]"
//                   >
//                     <Copy size={16} />
//                     {copiedId === quote._id ? 'कॉपी हो गया!' : 'कॉपी करें'}
//                   </Button>
                  
//                   <Button 
//                     variant="outline"
//                     className="flex items-center gap-2 border-[#4b281e] text-[#4b281e] hover:bg-[#4b281e] hover:text-white"
//                   >
//                     <ThumbsUp size={16} />
//                     {quote.likes}
//                   </Button>
//                 </div>
//               </div>

//               <div className="mt-4 flex flex-wrap gap-2">
//                 {quote.category.map((cat) => (
//                   <span
//                     key={cat}
//                     className="px-3 py-1 rounded-full text-sm bg-[#f5efe9] text-[#4b281e]"
//                   >
//                     {cat}
//                   </span>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <div className="flex justify-center items-center gap-4 mt-12">
//         <Button
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           variant="outline"
//           className="border-[#4b281e] text-[#4b281e] hover:bg-[#4b281e] hover:text-white"
//         >
//           पिछला पृष्ठ
//         </Button>

//         <span className="text-lg font-medium">
//           पृष्ठ {currentPage} / {totalPages}
//         </span>

//         <Button
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           variant="outline"
//           className="border-[#4b281e] text-[#4b281e] hover:bg-[#4b281e] hover:text-white"
//         >
//           अगला पृष्ठ
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default QuotesList;

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, ThumbsUp } from 'lucide-react';

interface QuotesListProps {
  currentPage: number;
  category: string;
  isStatic?: boolean;
  onPageChange: (page: number) => void;
}

interface Quote {
  _id: string;
  quote: string;
  author: string;
  category: string[];
  hindi_quote: string;
  author_hindi: string;
  likes: number;
}

const QuotesList = ({ currentPage, category, isStatic = false, onPageChange }: QuotesListProps) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(!isStatic);
  const [totalPages, setTotalPages] = useState(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const firstWordCategory = typeof category === 'string' ? category.split('-')[0] : '';

  useEffect(() => {
    const fetchQuotes = async () => {
      // Only fetch if it's not the static first page
      if (!isStatic || currentPage > 1) {
        setLoading(true);
        try {
          const response = await fetch(
            `/api/quotes?page=${currentPage}&category=${firstWordCategory}`
          );
          const data = await response.json();
          setQuotes(data.quotes);
          setTotalPages(data.totalPages);
        } catch (error) {
          console.error('Error fetching quotes:', error);
        }
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [currentPage, firstWordCategory, isStatic]);

  const handleCopy = async (quote: Quote) => {
    try {
      await navigator.clipboard.writeText(quote.hindi_quote);
      setCopiedId(quote._id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse text-xl font-medium text-gray-600">
          लोड हो रहा है...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-serif font-bold mb-8 text-[#4b281e]">
        {firstWordCategory.charAt(0).toUpperCase() + firstWordCategory.slice(1)} Quotes In Hindi
      </h2>

      <div className="space-y-8">
        {quotes.map((quote) => (
          <Card 
            key={quote._id}
            className="hover:shadow-xl transition-all duration-300 border-[#c4a99b]"
          >
            <CardContent className="p-6">
              <div className="md:flex gap-6 items-start">
                <div className="flex-1">
                  <blockquote className="text-xl font-medium leading-relaxed mb-4">
                    {quote.hindi_quote}
                  </blockquote>
                  <footer className="text-lg text-gray-600">
                    ― {quote.author_hindi}
                  </footer>
                </div>
                
                <div className="mt-4 md:mt-0 flex flex-col gap-2">
                  <Button
                    onClick={() => handleCopy(quote)}
                    className="flex items-center gap-2 bg-[#4b281e] hover:bg-[#2c221f]"
                  >
                    <Copy size={16} />
                    {copiedId === quote._id ? 'कॉपी हो गया!' : 'कॉपी करें'}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2 border-[#4b281e] text-[#4b281e] hover:bg-[#4b281e] hover:text-white"
                  >
                    <ThumbsUp size={16} />
                    {quote.likes}
                  </Button>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {quote.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 rounded-full text-sm bg-[#f5efe9] text-[#4b281e]"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-12">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
          className="border-[#4b281e] text-[#4b281e] hover:bg-[#4b281e] hover:text-white"
        >
          पिछला पृष्ठ
        </Button>

        <span className="text-lg font-medium">
          पृष्ठ {currentPage} / {totalPages}
        </span>

        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
          className="border-[#4b281e] text-[#4b281e] hover:bg-[#4b281e] hover:text-white"
        >
          अगला पृष्ठ
        </Button>
      </div>
    </div>
  );
};

export default QuotesList;
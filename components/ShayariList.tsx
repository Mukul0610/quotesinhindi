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
//   _id:string
//   quote: string[];          // Corresponds to the quote property in the model
//   author: string;        // Corresponds to the author property in the model
//   category: string;    // Corresponds to the category property in the model (array of strings)
//   likes: number;
// }

// export default function ShayariList({ currentPage, category, onPageChange }: QuotesListProps) {
//   const [quotes, setQuotes] = useState<Quote[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [totalPages, setTotalPages] = useState(1);
//   const firstWordCategory = category.split('-')[0];

//   useEffect(() => {
//     const fetchQuotes = async () => {
//       setLoading(true);
//       try {
//          // Extract the first word of the category
//         const response = await fetch(
//           `/api/shayari?page=${currentPage}&category=${firstWordCategory}`
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
//       {firstWordCategory.charAt(0).toUpperCase() + firstWordCategory.slice(1)} Shayari
//       </h2>
//         {quotes.map((quote) => (
//           // <Card key={quote._Id} className="hover:shadow-lg transition-shadow">
//           //   <CardContent className="p-4">
//           //     <p className="text-lg font-medium">{quote.hindi_quote}</p>
//           //     <p className="text-sm text-gray-500 mt-2">{quote.category}</p>
//           //   </CardContent>
//           // </Card>
//           <div key={quote._id} className="flex">
//             <div className='md:flex w-full border-b-2 pb-10 border-[#c4a99b] gap-4'>
//             <blockquote className="flex-3 md:w-[75%] p-4">
//               {quote.quote.map((item, index) => (
//                 <p key={index} className="text-xl font-medium">{item}</p>
//               ))}
//               <footer className="text-lg text-gray-500 mt-6">―{quote.author}</footer>
//             </blockquote>
//             <div className="flex-1 flex items-center justify-center">
//               <button
//                 onClick={() => navigator.clipboard.writeText(quote.quote.join(' '))}
//                 className="bg-[#4b281e] hover:bg-[#2c221f] text-white font-bold py-2 px-4 rounded"
//               >
//                 कॉपी करें
//               </button>
              
//             </div>
//           </div>
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
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Heart} from 'lucide-react';

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

const ShayariList = ({ currentPage, category, onPageChange }: QuotesListProps) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const firstWordCategory = category.split('-')[0];

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/shayari?page=${currentPage}&category=${firstWordCategory}`
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

  const handleCopy = async (quote: Quote) => {
    try {
      await navigator.clipboard.writeText(quote.quote.join('\n'));
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
      <h2 className="text-4xl font-serif font-bold mb-8 text-[#4b281e] text-center">
        {firstWordCategory.charAt(0).toUpperCase() + firstWordCategory.slice(1)} शायरी
      </h2>

      <div className="space-y-8">
        {quotes.map((quote) => (
          <Card 
            key={quote._id}
            className="hover:shadow-xl transition-all duration-300 border-[#c4a99b] bg-gradient-to-br from-white to-[#f5efe9]"
          >
            <CardContent className="p-6">
              <div className="md:flex gap-6 items-start">
                <div className="flex-1">
                  <blockquote className="space-y-4">
                    {quote.quote.map((line, index) => (
                      <p 
                        key={index} 
                        className="text-xl font-medium leading-relaxed text-[#2c221f]"
                      >
                        {line}
                      </p>
                    ))}
                    <footer className="text-lg text-gray-600 mt-4 border-t pt-4 border-[#c4a99b]">
                      ― {quote.author}
                    </footer>
                  </blockquote>
                </div>
                
                <div className="mt-6 md:mt-0 flex md:flex-col gap-3">
                  <Button
                    onClick={() => handleCopy(quote)}
                    className="flex-1 md:flex-none flex items-center gap-2 bg-[#4b281e] hover:bg-[#2c221f] transition-colors"
                  >
                    <Copy size={16} />
                    {copiedId === quote._id ? 'कॉपी हो गया!' : 'कॉपी करें'}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="flex-1 md:flex-none flex items-center gap-2 border-[#4b281e] text-[#4b281e] hover:bg-[#4b281e] hover:text-white transition-colors"
                  >
                    <Heart size={16} />
                    {quote.likes}
                  </Button>

                  {/* <Button 
                    variant="outline"
                    className="flex-1 md:flex-none flex items-center gap-2 border-[#4b281e] text-[#4b281e] hover:bg-[#4b281e] hover:text-white transition-colors"
                  >
                    <Share2 size={16} />
                    साझा करें
                  </Button> */}
                </div>
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
          className="border-[#4b281e] text-[#4b281e] hover:bg-[#4b281e] hover:text-white disabled:opacity-50"
        >
          पिछला पृष्ठ
        </Button>

        <span className="text-lg font-medium px-4 py-2 rounded-md bg-[#f5efe9] text-[#4b281e]">
          पृष्ठ {currentPage} / {totalPages}
        </span>

        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
          className="border-[#4b281e] text-[#4b281e] hover:bg-[#4b281e] hover:text-white disabled:opacity-50"
        >
          अगला पृष्ठ
        </Button>
      </div>
    </div>
  );
};

export default ShayariList;
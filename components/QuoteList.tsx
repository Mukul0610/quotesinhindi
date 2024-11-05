'use client';
import { useEffect, useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

interface QuotesListProps {
  currentPage: number;
  category: string;
  onPageChange: (page: number) => void;
}

interface Quote {
  _id:string
  quote: string;          // Corresponds to the quote property in the model
  author: string;        // Corresponds to the author property in the model
  category: string[];    // Corresponds to the category property in the model (array of strings)
  hindi_quote: string;   // Corresponds to the hindi_quote property in the model
  author_hindi: string;
}

export default function QuotesList({ currentPage, category, onPageChange }: QuotesListProps) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/quotes?page=${currentPage}&category=${category}`
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
      
      <div className="grid gap-6 mt-6 ml-6">
        <h2 className='text-3xl font-serif font-bold'>
      {category.charAt(0).toUpperCase() + category.slice(1)} Quotes In Hindi
      </h2>
        {quotes.map((quote) => (
          // <Card key={quote._Id} className="hover:shadow-lg transition-shadow">
          //   <CardContent className="p-4">
          //     <p className="text-lg font-medium">{quote.hindi_quote}</p>
          //     <p className="text-sm text-gray-500 mt-2">{quote.category}</p>
          //   </CardContent>
          // </Card>
          <div key={quote._id} className="flex">
            <div className='flex w-full border-b-2 pb-10 border-[#c4a99b] gap-4'>
            <blockquote className="flex-3 w-[75%] p-4">
              <p className="text-xl font-medium">{quote.hindi_quote}</p>
              <footer className="text-lg text-gray-500 mt-6">―{quote.author_hindi}</footer>
            </blockquote>
            <div className="flex-1 flex items-center justify-center">
              <button
                onClick={() => navigator.clipboard.writeText(quote.hindi_quote)}
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
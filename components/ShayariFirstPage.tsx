'use client';


import React, { useState } from 'react'
import Link from 'next/link';
import { Shayari } from '@/constants/shayari';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Copy } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';

interface Quote {
  _id: string;
  quote: string[];
  author: string;
  category: string[];
  likes: number;
}
const ShayariFirstPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (quote: Quote) => {
    try {
      await navigator.clipboard.writeText(quote.quote.join('\n'));
      setCopiedId(quote._id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  
  return (
    <div className="space-y-8">
      {Shayari.map((quote) => (
        <Card 
          key={quote._id}
          className="hover:shadow-xl transition-all duration-300 border-[#c4a99b]"
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

      <div className="flex justify-center items-center gap-4 mt-12">
        <Button
          
        >
          पिछला पृष्ठ
        </Button>

        <span className="text-lg font-medium">
          पृष्ठ {1} / {167}
        </span>
        <Link href="/shayari/all">
        <Button
        >
          अगला पृष्ठ
         
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default ShayariFirstPage

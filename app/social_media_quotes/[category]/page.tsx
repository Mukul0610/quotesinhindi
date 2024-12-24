// import React, { Suspense } from 'react';
// import SocalMediaContent from '@/components/SocialMediaContent';

// // Define the type for the params
// type Params = Promise<{ category: string }>;

// const Pages = async ({ params }: { params: Params }) => {
//   // Await the params to ensure they are resolved before accessing
//   // const currentCategory = await params.category || 'all';
//   const { category }=await params;
//   const currentCategory = category || 'all';
//   return (
//     <>
//       <Suspense fallback={<div>Loading...</div>}>
//         <SocalMediaContent para={currentCategory} />
//       </Suspense>
//     </>
//   );
// };

// export default Pages;

// pages.tsx
import React from 'react';
import Image from 'next/image';
import { Heart, Share2, Copy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Quote {
  _id: string;
  quote: string[];
  author: string;
  category: string;
  likes: number;
}

async function getQuotes(page: number, category: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/socialmedia?page=${page}&category=${category}`,
      { cache: 'no-store' } // or { next: { revalidate: 60 } } for ISR
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return { quotes: [], totalPages: 1 };
  }
}

export default async function Pages({
  searchParams,
  params,
}: {
  searchParams: { page?: string };
  params: { category: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const category = params.category || 'all';
  const firstWordCategory = category.split('-')[0];
  
  const { quotes, totalPages } = await getQuotes(currentPage, firstWordCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold mb-8 text-gray-900">
        {firstWordCategory.charAt(0).toUpperCase() + firstWordCategory.slice(1)} Quotes In Hindi
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {quotes.map((quote: Quote) => (
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
                <form action="/api/like" method="POST">
                  <input type="hidden" name="quoteId" value={quote._id} />
                  <Button
                    type="submit"
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 text-gray-600 hover:text-red-500"
                  >
                    <Heart size={20} />
                    <span>{quote.likes}</span>
                  </Button>
                </form>

                <Button
                  variant="ghost"
                  size="sm"
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
        <a href={`/social_media_quotes?page=${currentPage - 1}`}>
          <Button
            variant="outline"
            disabled={currentPage === 1}
            className="px-6"
          >
            पिछला
          </Button>
        </a>

        <div className="flex items-center px-4 text-lg font-medium">
          पृष्ठ {currentPage} / {totalPages}
        </div>

        <a href={`/social_media_quotes?page=${currentPage + 1}`}>
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            className="px-6"
          >
            अगला
          </Button>
        </a>
      </div>
    </div>
  );
}
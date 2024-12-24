// import React, { Suspense } from 'react';
// import { Metadata } from 'next';
// import HomeContent from '@/components/HomeContent';
// import { getHead } from '@/lib/actions/head.action';
// // import { getAllCategories } from '@/constants/quoteCategories'; // Assume this function exists

// type Params = Promise<{ category: string }>;
// export async function generateMetadata(
//   { params }: { params: Params },
// ): Promise<Metadata> {
//   // read route params
//   const category = (await params).category || "all";
// const data = await getHead(category,"quote" )
  
// const head = data[0]
// return {
//   title: `${head?.title}`,
//   description: head?.description,
//   keywords: head?.keywords.join(', '),
// }
// }
// const Pages = async ({ params }: { params: Params }) => {
//   // Await the params to ensure they are resolved before accessing
//   // const currentCategory = await params.category || 'all';
//   const { category }=await params;
//   const currentCategory = category || 'all';
//   return (
//     <>
//       <Suspense fallback={<div>Loading...</div>}>
//         <HomeContent para={currentCategory} />
//       </Suspense>
//     </>
//   );
// };

// export default Pages;
// pages/[category]/page.tsx
import { Metadata } from 'next';
import { getHead } from '@/lib/actions/head.action';
import {QuotesList} from '@/components/QuoteList';
import CategoriesSidebar from '@/components/CategoriesSidebar/CategorySidebar';

interface PageProps {
  params: { category: string };
  searchParams: { page?: string };
}

export async function generateMetadata(
  { params }: { params: Promise<{ category: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const category = resolvedParams.category || "all";
  const data = await getHead(category, "quote");
  const head = data[0];
  
  return {
    title: head?.title,
    description: head?.description,
    keywords: head?.keywords.join(', '),
  };
}

async function getQuotes(page: number, category: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/quotes?page=${page}&category=${category}`,
    { cache: 'no-store' }
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch quotes');
  }
  
  return response.json();
}

export default async function CategoryPage({ 
  params,
  searchParams,
}: PageProps) {
  const {page}= await searchParams;
  const currentPage = Number(page) || 1;
  // const category = params.category;
  const {category} = await params;
  const firstWordCategory = category.split('-')[0];

  
  const { quotes, totalPages } = await getQuotes(currentPage, firstWordCategory);
  

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 mr-6">
        {/* Main Content Area (2/3) */}
        <div className="lg:w-2/3">
          <h2 className="text-4xl font-serif font-bold mb-8 text-[#4b281e]">
            {firstWordCategory.charAt(0).toUpperCase() + firstWordCategory.slice(1)} Quotes In Hindi
          </h2>

          <QuotesList 
            quotes={quotes}
            currentPage={currentPage}
            totalPages={totalPages}
            category={category}
          />
        </div>
        
        {/* Sidebar (1/3) */}
        <div className="lg:w-1/3 ml-8">
        <CategoriesSidebar />
        </div>
      </div>
    </main>
  );
}
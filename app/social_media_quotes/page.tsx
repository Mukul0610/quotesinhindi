'use client';
// import HomeContent from '@/components/HomeContent'
import React from 'react'
import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
// import QuotesList from '@/components/QuoteList';
// import CategoriesSidebar from '@/components/CategoriesSidebar';
// import ShayariList from '@/components/ShayariList';
import SocialMedia from '@/components/SocialMedia';

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;
  const currentCategory = searchParams.get('category') || 'all';

  const updateQueryParams = (page: number, category: string) => {
    const params = new URLSearchParams();
    params.set('page', page.toString());
    if (category !== 'all') params.set('category', category);
    router.push(`/shayari/?${params.toString()}`);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 mr-6">
        {/* Main Content Area (2/3) */}
        <Suspense fallback={<div>Loading...</div>}>
        <div className="lg:w-2/3">
          <SocialMedia
            currentPage={currentPage}
            category={currentCategory}
            onPageChange={(page) => updateQueryParams(page, currentCategory)}
          />
        </div>
        </Suspense>
        
      </div>
    </main>
  );
}

export default Page


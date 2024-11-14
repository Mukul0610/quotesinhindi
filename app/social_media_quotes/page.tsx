'use client';
// import HomeContent from '@/components/HomeContent'
import React from 'react'
import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
// import QuotesList from '@/components/QuoteList';
// import CategoriesSidebar from '@/components/CategoriesSidebar';
// import ShayariList from '@/components/ShayariList';
import SocialMedia from '@/components/SocialMedia';
import SocalMediaContent from '@/components/SocialMediaContent';

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
    <>
     <Suspense fallback={<div>Loading...</div>}>
        <SocalMediaContent />
      </Suspense>
    </>
  );
}

export default Page


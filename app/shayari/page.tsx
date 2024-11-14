'use client';
// // import HomeContent from '@/components/HomeContent'
// import { Suspense } from 'react';
import React, { Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation';
// import QuotesList from '@/components/QuoteList';
import CategoriesSidebar from '@/components/CategoriesSidebar';
import ShayariList from '@/components/ShayariList';
import ShayariContent from '@/components/ShayariContent';

const Page = () => {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
        <ShayariContent />
      </Suspense>
    </>
  );
}

export default Page







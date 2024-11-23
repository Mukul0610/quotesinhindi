'use client';

import React, { Suspense } from 'react'
// import ShayariContent from '@/components/ShayariContent';
import ShayariFirstPage from '@/components/ShayariFirstPage';

const Page = () => {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
        <ShayariFirstPage />
      </Suspense>
    </>
  );
}

export default Page







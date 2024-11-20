'use client';

import React, { Suspense } from 'react'
import ShayariContent from '@/components/ShayariContent';

const Page = () => {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
        <ShayariContent para="all" />
      </Suspense>
    </>
  );
}

export default Page







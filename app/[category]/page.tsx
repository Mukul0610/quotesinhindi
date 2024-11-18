import React, { Suspense } from 'react';
import HomeContent from '@/components/HomeContent';


const Pages = async ({ params }: { params: { category: string } }) => {
  // Await the params to ensure they are resolved before accessing
  const currentCategory = await params.category || 'all';


  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeContent para={currentCategory} />
      </Suspense>
    </>
  );
};

export default Pages;
import React, { Suspense } from 'react';
import SocalMediaContent from '@/components/SocialMediaContent';

// Define the type for the params
type Params = Promise<{ category: string }>;

const Pages = async ({ params }: { params: Params }) => {
  // Await the params to ensure they are resolved before accessing
  // const currentCategory = await params.category || 'all';
  const { category }=await params;
  const currentCategory = category || 'all';
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SocalMediaContent para={currentCategory} />
      </Suspense>
    </>
  );
};

export default Pages;
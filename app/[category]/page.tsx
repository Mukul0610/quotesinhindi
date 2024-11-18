import React, { Suspense } from 'react';
import HomeContent from '@/components/HomeContent';

interface PageProps {
  params: {
    category: Promise<string>;
  };
}

const Pages: React.FC<PageProps> = async ({ params }) => {
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
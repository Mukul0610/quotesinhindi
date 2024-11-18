import React, { Suspense } from 'react';
import HomeContent from '@/components/HomeContent';

interface PagesProps {
  params: {
    category?: string;
  };
}

const Pages: React.FC<PagesProps> = async ({ params }) => {
  const currentCategory = params.category || 'all';

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeContent para={currentCategory} />
      </Suspense>
    </>
  );
};

export default Pages;
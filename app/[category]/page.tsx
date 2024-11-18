// import React, { Suspense } from 'react';
// import HomeContent from '@/components/HomeContent';

// export default async function Page({ 
//   params 
// }: { 
//   params: { category: string } 
// }) {
//   const currentCategory = params.category || 'all';

//   return (
//     <>
//       <Suspense fallback={<div>Loading...</div>}>
//         <HomeContent para={currentCategory} />
//       </Suspense>
//     </>
//   );
// }

import React, { Suspense } from 'react';
import HomeContent from '@/components/HomeContent';

type PageProps = {
  params: {
    category: Promise<string>;
  };
};

export default async function Page({ params }: PageProps) {
  const currentCategory = await params.category || 'all';

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeContent para={currentCategory} />
      </Suspense>
    </>
  );
}
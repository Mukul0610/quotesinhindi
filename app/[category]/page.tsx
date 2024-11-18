// import React, { Suspense } from 'react';
// import HomeContent from '@/components/HomeContent';

// // Define the type for the params
// type Params = {
//   params: {
//     category?: string; // Optional category parameter
//   };
// };

// const Pages = ({ params }: Params) => {
//   // Await the params to ensure they are resolved before accessing
//   const currentCategory = params.category || 'all';

//   return (
//     <>
//       <Suspense fallback={<div>Loading...</div>}>
//         <HomeContent para={currentCategory} />
//       </Suspense>
//     </>
//   );
// };

// export default Pages;
import HomeContent from '@/components/HomeContent'

type PageProps = {
  params: {
    category?: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params, searchParams }: PageProps) {
  const currentCategory = params.category || 'all'

  return <HomeContent para={currentCategory} />
}
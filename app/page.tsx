// 'use client';
// import { Suspense } from 'react';
// import { useSearchParams, useRouter } from 'next/navigation';
// import QuotesList from '@/components/QuoteList';
// import CategoriesSidebar from '@/components/CategoriesSidebar';

// export default function Home() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const currentPage = Number(searchParams.get('page')) || 1;
//   const currentCategory = searchParams.get('category') || 'all';

//   const updateQueryParams = (page: number, category: string) => {
//     const params = new URLSearchParams();
//     params.set('page', page.toString());
//     if (category !== 'all') params.set('category', category);
//     router.push(`/?${params.toString()}`);
//   };

//   return (
//     <>
      
//       <div className='w-full'>
//         {/* <header className="bg-white shadow">
//           <div className="container mx-auto px-4 py-6">
//             <h1 className="text-3xl font-bold text-center">हिंदी कोट्स संग्रह</h1>
//           </div>
//         </header> */}
// <Suspense fallback={<div>Loading...</div>}> 
//         <main className="container mx-auto px-4 py-8">
//           <div className="flex flex-col lg:flex-row gap-8 mr-6">
//             {/* Main Content Area (2/3) */}
//             <div className="lg:w-2/3">
//               <QuotesList 
//                 currentPage={currentPage}
//                 category={currentCategory}
//                 onPageChange={(page) => updateQueryParams(page, currentCategory)}
//               />
//             </div>
            
//             {/* Sidebar (1/3) */}
//             <div className="lg:w-1/3 ml-8">
//               <CategoriesSidebar 
                
//                 onCategoryChange={(category) => updateQueryParams(1, category)}
//               />
//             </div>
//           </div>
//         </main>
//         </Suspense>
//       </div>
//     </>
//   );
// }

import { Suspense } from 'react';
import HomeContent from '../components/HomeContent';

export default function Home() {
  return (
    <div className='w-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeContent />
      </Suspense>
    </div>
  );
}

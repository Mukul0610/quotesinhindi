'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import QuotesList from '@/components/QuoteList';
import CategoriesSidebar from '@/components/CategoriesSidebar';

export default function HomeContent( { para }: { para: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;
  const currentCategory = para;

  const updateQueryParams = (page: number, category: string) => {
    const params = new URLSearchParams();
    params.set('page', page.toString());
    router.push(`/${category}/?${params.toString()}`);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 mr-6">
        {/* Main Content Area (2/3) */}
        <div className="lg:w-2/3">
          <QuotesList 
            currentPage={currentPage}
            category={currentCategory}
            onPageChange={(page) => updateQueryParams(page, currentCategory)}
          />
        </div>
        
        {/* Sidebar (1/3) */}
        <div className="lg:w-1/3 ml-8">
          <CategoriesSidebar 
            onCategoryChange={(category) => updateQueryParams(1, category)}
          />
        </div>
      </div>
    </main>
  );
}
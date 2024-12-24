import { Suspense } from 'react';
import QuoteFirstPage from '@/components/QuoteFirstPage';
import CategoriesSidebar from '@/components/CategoriesSidebar/CategorySidebar';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 mr-6">
        {/* Main Content Area (2/3) */}
        <div className="lg:w-2/3">
          <h2 className="text-4xl font-serif font-bold mb-8 text-[#4b281e]">
           Quotes In Hindi
          </h2>
      
        <QuoteFirstPage/>
        </div>
        
        {/* Sidebar (1/3) */}
        <div className="lg:w-1/3 ml-8">
        <CategoriesSidebar />
        </div>
      </div>
    </main>
  );
}

'use client';
// import HomeContent from '@/components/HomeContent'
import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation';
import SocialMedia from '@/components/SocialMedia';


export default function SocalMediaContent({ para }: { para: string }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentPage = Number(searchParams.get('page')) || 1;
    // const currentCategory = searchParams.get('category') || 'all';
    const currentCategory = para;
  
    const updateQueryParams = (page: number, category: string) => {
      const params = new URLSearchParams();
      params.set('page', page.toString());
      if (category !== 'all') params.set('category', category);
      router.push(`/social_media_quotes/?${params.toString()}`);
    };
  
    return (
      <main className="container mx-aut px-4 py-8">
        <div className="flex flex-co lg:flex-row gap-8 mr-6">
          {/* Main Content Area (2/3) */}
          
          <div className='w-full'>
            <SocialMedia
              currentPage={currentPage}
              category={currentCategory}
              onPageChange={(page) => updateQueryParams(page, currentCategory)}
            />
          </div>
          
          
        </div>
      </main>
    );
  }
  
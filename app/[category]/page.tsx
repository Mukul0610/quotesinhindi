import React, { Suspense } from 'react';
import HomeContent from '@/components/HomeContent';
import { Metadata } from 'next';
import { getHead } from '@/lib/actions/head.action';

// Define the type for the params
type Params = Promise<{ category: string }>;
export async function generateMetadata(
  { params }: { params: Params },
): Promise<Metadata> {
  // read route params
  const category = (await params).category || "all";
    

  // fetch data
   
  const data = await getHead(category,"quote" )
  
  const head = data[0]
  return {
    title: `${head?.title}`,
    description: head?.description,
    keywords: head?.keywords.join(', '),
    // You can add more metadata properties here
    // openGraph: {
    //   title: `${head?.title}`,
    //   description: head?.description,
    // },
    // // Optional: Add Twitter metadata
    // twitter: {
    //   card: 'summary_large_image',
    //   title: `${totalPages * 30} + ${head?.title}`,
    //   description: head?.description,
    // }
  }
}


const Pages = async ({ params }: { params: Params }) => {
  // Await the params to ensure they are resolved before accessing
  // const currentCategory = await params.category || 'all';
  const { category }=await params;
  const currentCategory = category || 'all';
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeContent para={currentCategory} />
      </Suspense>
    </>
  );
};

export default Pages;
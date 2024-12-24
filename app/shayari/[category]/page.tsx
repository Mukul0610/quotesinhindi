import React, { Suspense } from 'react';
import ShayariContent from '@/components/ShayariContent';
import { Metadata } from 'next'
import { getHead } from '@/lib/actions/head.action';
import { getAllShayariCategories } from '@/constants/shayariCategories';
// Define the type for the params
type Params = Promise<{ category: string }>;

// Static Params Generation



export async function generateMetadata(
  { params }: { params: Params },
): Promise<Metadata> {
  // read route params
  // const category = (await params).category || "all";
  const resolvedParams = await params;
  const category = resolvedParams.category || "all";
  

  // fetch data
   
  const data = await getHead(category,"shayari" )
  
  const head = data[0]

  try{
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
  }}
  catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: `${category} Category`,
      description: `Content for ${category}`
    };
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
        <ShayariContent para={currentCategory} />
      </Suspense>
    </>
  );
};

export default Pages;

export const dynamicParams = false; // Prevent generation of pages not defined in generateStaticParams
export const revalidate = 3600; // Optional: Regenerate pages every hour
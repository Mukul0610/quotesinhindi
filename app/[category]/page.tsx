import React, { Suspense } from 'react';
import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';
import { getHead } from '@/lib/actions/head.action';
import { getAllCategories } from '@/constants/quoteCategories'; // Assume this function exists

// Define the type for the params
type Params = Promise<{
  category: string;
}>;

// Static Params Generation
export async function generateStaticParams() {
  try {
    // Fetch all possible categories from your data source
    const categories = getAllCategories();
    
    // Add 'all' as a default category if not already present
    if (!categories.includes('all')) {
      categories.push('all');
    }

    // Map categories to the format Next.js expects
    return categories.map((category) => ({
      category: category
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [{ category: 'all' }]; // Fallback to 'all' category
  }
}

// Metadata Generation
export async function generateMetadata({ 
  params 
}: { 
  params: Params 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const category = resolvedParams.category || "all";

  try {
    // Fetch metadata for the specific category
    const data = await getHead(category, "quote");
    const head = data[0];

    return {
      title: head?.title || `${category} Category`,
      description: head?.description || `Explore ${category} content`,
      keywords: head?.keywords?.join(', ') || category,
      // Uncomment and customize as needed:
      // openGraph: {
      //   title: head?.title,
      //   description: head?.description,
      // },
      // twitter: {
      //   card: 'summary_large_image',
      //   title: head?.title,
      //   description: head?.description,
      // }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: `${category} Category`,
      description: `Content for ${category}`
    };
  }
}

// Page Component
const CategoryPage = async ({ params }: { params: Params }) => {
  const category = await params;
  const currentCategory = category.category || 'all';

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent para={currentCategory} />
    </Suspense>
  );
};

export default CategoryPage;

// Optional: Page Generation Configuration
export const dynamicParams = false; // Prevent generation of pages not defined in generateStaticParams
export const revalidate = 3600; // Optional: Regenerate pages every hour
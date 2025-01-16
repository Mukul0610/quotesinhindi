
import { Metadata } from 'next';
import { getHead } from '@/lib/actions/head.action';


import { ShayariList } from '@/components/ShayariList';
import ShayariSidebar from '@/components/CategoriesSidebar/ShayariSidebar';

interface PageParams {
  category: string;
}

interface PageSearchParams {
  page?: string;
}

interface Props {
  params: Promise<PageParams>;
  searchParams: Promise<PageSearchParams>;
}

export async function generateMetadata(
  { params }: { params: Promise<PageParams> }
): Promise<Metadata> {
  const { category } = await params;
  const resolvedCategory = category || "all";
  const data = await getHead(resolvedCategory, "shayari");
  const head = data[0];
  
  return {
    title: head?.title,
    description: head?.description,
    keywords: head?.keywords.join(', '),
    alternates: {
      canonical: `https://purevichar.in/shayari/${category}`
    }
  };
}
async function getQuotes(page: number, category: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/shayari?page=${page}&category=${category}`,
    { cache: 'no-store' }
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch quotes');
  }
  
  return response.json();
}

export default async function CategoryPage({ 
  params,
  searchParams 
}: Props) {
  const [{ category }, resolvedSearchParams] = await Promise.all([
    params,
    searchParams
  ]);
  
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const firstWordCategory = category.split('-')[0];

  
  const { quotes, totalPages } = await getQuotes(currentPage, firstWordCategory);
  

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 mr-6">
        {/* Main Content Area (2/3) */}
        <div className="lg:w-2/3">
          <h2 className="text-4xl font-serif font-bold mb-8 text-[#4b281e]">
            {firstWordCategory.charAt(0).toUpperCase() + firstWordCategory.slice(1)} Shayari In Hindi
          </h2>

          <ShayariList 
            quotes={quotes}
            currentPage={currentPage}
            totalPages={totalPages}
            category={category}
          />
        </div>
        
        {/* Sidebar (1/3) */}
        <div className="lg:w-1/3 ml-8">
        <ShayariSidebar />
        </div>
      </div>
    </main>
  );
}
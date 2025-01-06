import { categories } from "@/constants/quoteCategories";
import { CategorySearch } from './CategorySearch';
import { submitToIndexNow } from '@/lib/actions/indexNow'

export default function CategoriesSidebar() {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-sm">
      <CategorySearch categories={categories} />
    </div>
  );
}

const result = await submitToIndexNow([
  ...categories.map(category => `https://yourdomain.com/${category.id}`)
], process.env.INDEXNOW_KEY);
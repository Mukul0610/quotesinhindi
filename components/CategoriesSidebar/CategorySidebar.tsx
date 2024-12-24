import { categories } from "@/constants/quoteCategories";
import { CategorySearch } from './CategorySearch';

export default function CategoriesSidebar() {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-sm">
      <CategorySearch categories={categories} />
    </div>
  );
}
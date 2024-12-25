// import React from 'react'

// const ShayariGrid = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ShayariGrid
'use client';

import Link from 'next/link';
import type { Category } from './types';

interface CategoryGridProps {
  categories: Category[];
}

export function ShayariGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {categories.map((category) => (
        <Link
          href={`/shayari/${category.id}`}
          key={category.id}
          className="group flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 no-underline"
        >
          <div className="flex flex-col">
            <span className="text-lg font-medium text-gray-800 group-hover:text-blue-700">
              {category.name}
            </span>
            <span className="text-sm text-gray-500 group-hover:text-blue-600">
              {category.english_name}
            </span>
          </div>
          <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full group-hover:bg-blue-100">
            {category.count}
          </span>
        </Link>
      ))}
    </div>
  );
}
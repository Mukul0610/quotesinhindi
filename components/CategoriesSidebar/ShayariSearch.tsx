// import React from 'react'

// const ShayariSearch = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ShayariSearch

'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import type { Category } from './types';
import { ShayariGrid } from './ShayariGrid';

interface CategorySearchProps {
  categories: Category[];
}

export function ShayariSearch({ categories }: CategorySearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.english_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="relative mb-6">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
          size={18} 
        />
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredCategories.length > 0 ? (
        <ShayariGrid categories={filteredCategories} />
      ) : (
        <div className="text-center py-8 text-gray-500">
          No categories found matching {searchTerm}
        </div>
      )}
    </>
  );
}

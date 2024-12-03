// 'use client';

// import Link from "next/link";



// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// export default function ShayariSidebar({ onCategoryChange }: { onCategoryChange: (id: string) => void }) {
//   const categories = [
//     { id: 'sad-shayari-hindi',english_name:"Sad Shayari ", name: 'दर्द भरी शायरी', count: "29.0K" },
//     { id: 'love-shayari-hindi', english_name:"love Shayari",name: 'प्यार शायरी', count: "1.1K" },
//     { id: 'funny-shayari-hindi', english_name:"Funny Shayari",name: 'मजेदार शायरी', count: "8.2K" },
//     { id: 'heartbreak-shayari-hindi', english_name:"Heartbreak Shayari",name: 'दिल टूटने वाली शायरी', count: "8.1K" },
//   ];

//   return (
//     <div className="grid grid-cols-2 gap-4 text-blue-800">
//           {categories.map((category) => (
//             <Link href={`/shayari/${category.id}`} key={category.id} onClick={() => onCategoryChange(category.id)} className="no-underline">
              
//                 <span>{category.name} ({category.english_name})</span>
//                 <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
//                   {category.count}
//                 </span>
              
            
//             </Link>))}
//         </div>
        
//   );
// }

'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { Search } from 'lucide-react';

interface Category {
  id: string;
  english_name: string;
  name: string;
  count: string;
}

interface ShayariSidebarProps {
  onCategoryChange: (id: string) => void;
}

export default function ShayariSidebar({ onCategoryChange }: ShayariSidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'sad-shayari-hindi', english_name: "Sad Shayari", name: 'दर्द भरी शायरी', count: "29.0K" },
    { id: 'love-shayari-hindi', english_name: "Love Shayari", name: 'प्यार शायरी', count: "1.1K" },
    { id: 'funny-shayari-hindi', english_name: "Funny Shayari", name: 'मजेदार शायरी', count: "8.2K" },
    { id: 'heartbreak-shayari-hindi', english_name: "Heartbreak Shayari", name: 'दिल टूटने वाली शायरी', count: "8.1K" },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.english_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-sm">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search shayari categories..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredCategories.map((category) => (
          <Link
            href={`/shayari/${category.id}`}
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className="group flex flex-col p-4 rounded-lg hover:bg-blue-50 transition-all duration-200 no-underline border border-gray-100"
          >
            <div className="flex flex-col mb-2">
              <span className="text-lg font-medium text-gray-800 group-hover:text-blue-700">
                {category.name}
              </span>
              <span className="text-sm text-gray-500 group-hover:text-blue-600 mt-1">
                {category.english_name}
              </span>
            </div>
            <div className="flex justify-end">
              <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full group-hover:bg-blue-100">
                {category.count}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results Message */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No shayari categories found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
}

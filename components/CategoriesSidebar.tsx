// 'use client';

// import Link from "next/link";

// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// export default function CategoriesSidebar({ onCategoryChange }: { onCategoryChange: (id: string) => void }) {
//   const categories = [
//     { id: 'inspirational-quotes-hindi',english_name:"inspirational", name: 'प्रेरणादायक', count: "29.0K" },
//     { id: 'life-quotes-hindi',english_name:"life", name: 'जीवन', count: "36.0K" },
//     { id: 'love-quotes-hindi', english_name:"love",name: 'प्यार', count: "39.1K" },
//     { id: 'faith-quotes-hindi', english_name:"faith",name: 'आस्था', count: "8.2K" },
//     { id: 'success-quotes-hindi', english_name:"succes",name: 'सफलता', count: "8.1K" },
//     { id: 'happiness-quotes-hindi', english_name:"happiness",name: 'ख़ुशी', count: "10.4K" },
//     { id: 'motivational-quotes-hindi', english_name:"motivational",name: 'प्रेरणा', count: "6.1K" },
//     { id: 'wisdom-quotes-hindi', english_name:"wisdom",name: 'ज्ञान', count: "10.1K" },
//     { id: 'humor-quotes-hindi', english_name:"humor",name: 'हास्य', count: "14.0K" },
//     { id: 'philosophy-quotes-hindi', english_name:"philosophy",name: 'दर्शन', count: "14.9K" },
//     { id: 'hope-quotes-hindi', english_name:"hope",name: 'आशा', count: "9.6K" },
//     { id: 'romance-quotes-hindi', english_name:"romance",name: 'आशा', count: "9.5K" },
//     { id: 'poetry-quotes-hindi', english_name:"poetry",name: 'कविता', count: "7.1K" },
//     { id: 'god-quotes-hindi', english_name:"god",name: 'ईश्वर', count: "12.5K" },
//     { id: 'religion-quotes-hindi', english_name:"religion",name: 'धर्म', count: "7.2K" },
//     { id: 'spirituality-quotes-hindi', english_name:"spirituality",name: 'आध्यात्मिकता', count: "5.5K" },
//     { id: 'time-quotes-hindi', english_name:"time",name: 'समय', count: "6.0K" },
//     { id: 'you-quotes-hindi', english_name:"you",name: 'आप', count: "5.4K" },
//   ];

//   return (
//     <div className="grid grid-cols-2 gap-4 text-blue-800">
//           {categories.map((category) => (
//             <Link href={`/${category.id}`} key={category.id} onClick={() => onCategoryChange(category.id)} className="no-underline">
              
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
import Link from 'next/link';
import { Search } from 'lucide-react';

interface Category {
  id: string;
  english_name: string;
  name: string;
  count: string;
}

interface CategoriesSidebarProps {
  onCategoryChange: (id: string) => void;
}

export default function CategoriesSidebar({ onCategoryChange }: CategoriesSidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    { id: 'inspirational-quotes-hindi', english_name: "inspirational", name: 'प्रेरणादायक', count: "29.0K" },
    { id: 'life-quotes-hindi', english_name: "life", name: 'जीवन', count: "36.0K" },
    { id: 'love-quotes-hindi', english_name: "love", name: 'प्यार', count: "39.1K" },
    { id: 'faith-quotes-hindi', english_name: "faith", name: 'आस्था', count: "8.2K" },
    { id: 'success-quotes-hindi', english_name: "success", name: 'सफलता', count: "8.1K" },
    { id: 'happiness-quotes-hindi', english_name: "happiness", name: 'ख़ुशी', count: "10.4K" },
    { id: 'motivational-quotes-hindi', english_name: "motivational", name: 'प्रेरणा', count: "6.1K" },
    { id: 'wisdom-quotes-hindi', english_name: "wisdom", name: 'ज्ञान', count: "10.1K" },
    { id: 'humor-quotes-hindi', english_name: "humor", name: 'हास्य', count: "14.0K" },
    { id: 'philosophy-quotes-hindi', english_name: "philosophy", name: 'दर्शन', count: "14.9K" },
    { id: 'hope-quotes-hindi', english_name: "hope", name: 'आशा', count: "9.6K" },
    { id: 'romance-quotes-hindi', english_name: "romance", name: 'आशा', count: "9.5K" },
    { id: 'poetry-quotes-hindi', english_name: "poetry", name: 'कविता', count: "7.1K" },
    { id: 'god-quotes-hindi', english_name: "god", name: 'ईश्वर', count: "12.5K" },
    { id: 'religion-quotes-hindi', english_name: "religion", name: 'धर्म', count: "7.2K" },
    { id: 'spirituality-quotes-hindi', english_name: "spirituality", name: 'आध्यात्मिकता', count: "5.5K" },
    { id: 'time-quotes-hindi', english_name: "time", name: 'समय', count: "6.0K" },
    { id: 'you-quotes-hindi', english_name: "you", name: 'आप', count: "5.4K" },
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
          placeholder="Search categories..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredCategories.map((category) => (
          <Link
            href={`/${category.id}`}
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
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

      {/* No Results Message */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No categories found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
}
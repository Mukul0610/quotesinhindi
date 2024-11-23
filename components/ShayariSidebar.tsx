'use client';

import Link from "next/link";



// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ShayariSidebar({ onCategoryChange }: { onCategoryChange: (id: string) => void }) {
  const categories = [
    { id: 'sad-shayari-hindi',english_name:"Sad Shayari ", name: 'दर्द भरी शायरी', count: "29.0K" },
    { id: 'love-shayari-hindi', english_name:"love Shayari",name: 'प्यार शायरी', count: "1.1K" },
    { id: 'funny-shayari-hindi', english_name:"Funny Shayari",name: 'मजेदार शायरी', count: "8.2K" },
    { id: 'heartbreak-shayari-hindi', english_name:"Heartbreak Shayari",name: 'दिल टूटने वाली शायरी', count: "8.1K" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 text-blue-800">
          {categories.map((category) => (
            <Link href={`/shayari/${category.id}`} key={category.id} onClick={() => onCategoryChange(category.id)} className="no-underline">
              
                <span>{category.name} ({category.english_name})</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              
            
            </Link>))}
        </div>
        
  );
}

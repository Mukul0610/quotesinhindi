'use client';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CategoriesSidebar({ currentCategory, onCategoryChange }: { currentCategory: string; onCategoryChange: (id: string) => void }) {
  const categories = [
    { id: 'inspirational', name: 'प्रेरणादायक', count: "29.0K" },
    { id: 'life', name: 'जीवन', count: "36.0K" },
    { id: 'love', name: 'प्यार', count: "39.1K" },
    { id: 'faith', name: 'आस्था', count: "8.2K" },
    { id: 'success', name: 'सफलता', count: "8.1K" },
    { id: 'happiness', name: 'ख़ुशी', count: "10.4K" },
    { id: 'motivation', name: 'प्रेरणा', count: "6.1K" },
    { id: 'wisdom', name: 'ज्ञान', count: "10.1K" },
    { id: 'humor', name: 'हास्य', count: "14.0K" },
    { id: 'philosophy', name: 'दर्शन', count: "14.9K" },
    { id: 'hope', name: 'आशा', count: "9.6K" },
    { id: 'romance', name: 'आशा', count: "9.5K" },
    { id: 'poetry', name: 'कविता', count: "7.1K" },
    { id: 'god', name: 'ईश्वर', count: "12.5K" },
    { id: 'religion', name: 'धर्म', count: "7.2K" },
    { id: 'spirituality', name: 'आध्यात्मिकता', count: "5.5K" },
    { id: 'time', name: 'समय', count: "6.0K" },
    { id: 'You', name: 'आप', count: "5.4K" },
  ];

  return (
    // <Card className="sticky top-4">
    //   <CardHeader>
    //     <CardTitle>श्रेणियां</CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="space-y-2">
    //       {categories.map((category) => (
    //         <button
    //           key={category.id}
    //           onClick={() => onCategoryChange(category.id)}
    //           className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
    //             currentCategory === category.id
    //               ? 'bg-primary text-primary-foreground'
    //               : 'hover:bg-gray-100'
    //           }`}
    //         >
    //           <div className="flex justify-between items-center">
    //             <span>{category.name}</span>
    //             <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
    //               {category.count}
    //             </span>
    //           </div>
    //         </button>
    //       ))}
    //     </div>
    //   </CardContent>
    // </Card>
    <div className="grid grid-cols-2 gap-4 text-blue-800">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              // className={`text-left px-4 py-2 rounded-lg transition-colors ${
              //   currentCategory === category.id
              //     ? 'bg-primary text-primary-foreground'
              //     : 'hover:bg-gray-100'
              // }`}
              className="cursor-pointer"
            >
              
                <span>{category.name} ({category.id})</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              
            </div>
          ))}
        </div>
  );
}

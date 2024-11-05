import { getQuotes } from '@/lib/actions/quote_display.action';
import { NextResponse } from 'next/server';

const QUOTES_PER_PAGE = 30;

// Define a Quote type based on the output of getQuotes
type Quote = {
  _id:string
  quote: string;          // Corresponds to the quote property in the model
  author: string;        // Corresponds to the author property in the model
  category: string[];    // Corresponds to the category property in the model (array of strings)
  hindi_quote: string;   // Corresponds to the hindi_quote property in the model
  author_hindi: string;  // Corresponds to the author_hindi property in the model
};

// Mock database - replace with your actual database
// let mockQuotes = Array.from({ length: 500 }, (_, i) => ({
//   id: i + 1,
//   text: `हिंदी कोट ${i + 1}`,
//   category: ['प्रेरणा', 'जीवन', 'प्यार', 'दोस्ती', 'सफलता'][Math.floor(Math.random() * 5)]
// }));
let mockQuotes = await getQuotes(); 

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') ?? '1') || 1;
  const category = searchParams.get('category') ?? 'all';

  let filteredQuotes = mockQuotes;
  if (category && category !== 'all') {
    filteredQuotes = mockQuotes.filter((quote: Quote) => quote.category.includes(category));
  }
  

  const startIndex = (page - 1) * QUOTES_PER_PAGE;
  const endIndex = startIndex + QUOTES_PER_PAGE;
  const paginatedQuotes = filteredQuotes.slice(startIndex, endIndex);

  return NextResponse.json({
    quotes: paginatedQuotes,
    totalPages: Math.ceil(filteredQuotes.length / QUOTES_PER_PAGE),
    currentPage: page,
    totalQuotes: filteredQuotes.length
  });
}
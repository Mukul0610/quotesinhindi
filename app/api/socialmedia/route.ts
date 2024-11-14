// import { getQuotes } from '@/lib/actions/quote_display.action';
import { getSocial } from '@/lib/actions/socialMedia.action';
import { NextResponse } from 'next/server';

const QUOTES_PER_PAGE = 30;
const CACHE_DURATION = 3600; // 1 hour in seconds

// Updated Quote type with likes
type Shayari = {
  _id: string;
  quote: string[];
  author: string;
  category: string;
  likes: number;
};

// Cache storage
let quotesCache: {
  data: Shayari[];
  timestamp: number;
} | null = null;

// Helper function to get cached quotes
async function getCachedQuotes() {
    const currentTime = Date.now();
    
    if (quotesCache && (currentTime - quotesCache.timestamp) / 1000 < CACHE_DURATION) {
      return quotesCache.data;
    }
  
    try {
      const freshQuotes = await getSocial();
      
      // Sort quotes by likes in descending order when updating cache
      const sortedQuotes = freshQuotes.sort((a: Shayari, b: Shayari) => (b.likes || 0) - (a.likes || 0));
      
      quotesCache = {
        data: sortedQuotes,
        timestamp: currentTime
      };
      
      return sortedQuotes;
    } catch (error) {
      console.error('Error fetching fresh quotes:', error);
      throw error;
    }
  }
// Helper function to filter, sort, and paginate quotes
function filterAndPaginateQuotes(
  quotes: Shayari[],
  category: string,
  page: number,
  sortBy: 'likes' | null = 'likes'
): { 
  paginatedQuotes: Shayari[],
  totalQuotes: number 
} {
  // First filter by category
  const filteredQuotes = category === 'all' 
    ? [...quotes] 
    : quotes.filter(quote => quote.category.includes(category));

  // Sort by likes if specified (default)
  if (sortBy === 'likes') {
    filteredQuotes.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  }

  const startIndex = (page - 1) * QUOTES_PER_PAGE;
  const endIndex = startIndex + QUOTES_PER_PAGE;

  return {
    paginatedQuotes: filteredQuotes.slice(startIndex, endIndex),
    totalQuotes: filteredQuotes.length
  };
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1'));
    const category = searchParams.get('category') ?? 'all';
    const sortBy = searchParams.get('sortBy') as 'likes' | null ?? 'likes';

    // Get cached quotes (already sorted by likes)
    const quotes = await getCachedQuotes();

    // Filter, sort (if needed), and paginate
    const { paginatedQuotes, totalQuotes } = filterAndPaginateQuotes(
      quotes,
      category,
      page,
      sortBy
    );

    // Calculate total pages
    const totalPages = Math.ceil(totalQuotes / QUOTES_PER_PAGE);

    // Create response with headers
    return NextResponse.json(
      {
        quotes: paginatedQuotes,
        totalPages,
        currentPage: page,
        totalQuotes,
        sorting: sortBy
      },
      {
        headers: {
          'Cache-Control': `public, max-age=${CACHE_DURATION}`,
          'Vary': 'Accept-Encoding'
        }
      }
    );

  } catch (error) {
    console.error('Error fetching quotes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quotes' },
      { status: 500 }
    );
  }
}

// // Optional: Add an API endpoint to update likes
// export async function PATCH(request: Request) {
//   try {
//     const body = await request.json();
//     const { quoteId, likes } = body;

//     // Update likes in your database here
//     // await updateQuoteLikes(quoteId, likes);

//     // Invalidate cache to fetch fresh data on next request
//     quotesCache = null;

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('Error updating likes:', error);
//     return NextResponse.json(
//       { error: 'Failed to update likes' },
//       { status: 500 }
//     );
//   }
// }
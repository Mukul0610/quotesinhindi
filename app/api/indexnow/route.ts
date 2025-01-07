

// app/api/indexnow/route.ts
import { submitToIndexNow } from "@/lib/actions/indexNow";
import { NextResponse } from "next/server";
import { categories } from "@/constants/quoteCategories";

export async function GET() {
  try {
    if (!process.env.INDEXNOW_KEY) {
      throw new Error('INDEXNOW_KEY is not defined in environment variables');
    }

    if (!process.env.NEXT_PUBLIC_API_URL) {
      throw new Error('NEXT_PUBLIC_API_URL is not defined in environment variables');
    }

    // Remove trailing slash from base URL if present
    const baseUrl = process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '');
    
    // Construct URLs ensuring no double slashes
    const urls = categories.map(category => 
      `${baseUrl}/${category.id.replace(/^\/+/, '')}`
    );

    const result = await submitToIndexNow(urls, process.env.INDEXNOW_KEY);
    
    return NextResponse.json({
      ...result,
      submitted: urls,
      host: baseUrl.replace(/https?:\/\//, ''),
      keyLocation: `${baseUrl}/${process.env.INDEXNOW_KEY}.txt`
    });
  } catch (error) {
    console.error('IndexNow processing error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to process IndexNow submission',
        success: false
      },
      { status: 500 }
    );
  }
}
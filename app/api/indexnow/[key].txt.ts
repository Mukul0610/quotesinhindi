import { NextResponse } from 'next/server';

interface Params {
  key: string;
}

export async function GET(_request: Request, { params }: { params: Params }) {
  const { key } = params;
  
  if (key === process.env.INDEXNOW_KEY) {
    return new NextResponse(key, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }
  
  return new NextResponse(null, { status: 404 });
}
import { Suspense } from 'react';
import QuoteFirstPage from '@/components/QuoteFirstPage';

export default function Home() {
  return (
    <div className='w-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <QuoteFirstPage/>
      </Suspense>
    </div>
  );
}

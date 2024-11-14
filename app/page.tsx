
import { Suspense } from 'react';
import HomeContent from '../components/HomeContent';

export default function Home() {
  return (
    <div className='w-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeContent />
      </Suspense>
    </div>
  );
}

'use client';
// import HomeContent from '@/components/HomeContent'
import React from 'react'
import { Suspense } from 'react';
import SocalMediaContent from '@/components/SocialMediaContent';

const Page = () => {
  

  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
        <SocalMediaContent para="all" />
      </Suspense>
    </>
  );
}

export default Page


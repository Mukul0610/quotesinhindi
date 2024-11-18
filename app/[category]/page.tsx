import React, { Suspense } from 'react'

import HomeContent from '@/components/HomeContent';


const Pages = async({params}: {params: any}) => {
    // const campaign = await getCampaignById(params.sponsorship);

//   const currentCategory = params.sponsorship;
const currentCategory = await params.category || 'all';
  
    
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <HomeContent para={currentCategory}/>
    </Suspense>
    </>
  )
}

export default Pages
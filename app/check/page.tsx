import { getShayari } from '@/lib/actions/shayari.action';
import React from 'react'

const page = async() => {
    const quotes=await getShayari();
  return (
    <div>
      {quotes.map((quote:any)=>(
        <div key={quote._id}>
            {quote.author}
        </div>
      ))}
    </div>
  )
}

export default page

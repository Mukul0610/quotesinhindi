import React from 'react'
import { categories } from '@/constants/shayariCategories'
import { ShayariSearch } from './ShayariSearch'

const ShayariSidebar = () => {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-sm">
      <ShayariSearch categories={categories} />
    </div>
  )
}

export default ShayariSidebar

import React from 'react'
import { CategorySearch } from './CategorySearch'
import { categories } from '@/constants/shayariCategories'

const ShayariSidebar = () => {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-sm">
      <CategorySearch categories={categories} />
    </div>
  )
}

export default ShayariSidebar

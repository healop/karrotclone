'use client'

import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  return (
    <div className="flex items-center max-w-md bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
      <FiSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="동네 이슈를 검색해보세요"
        className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400"
      />
    </div>
  )
}
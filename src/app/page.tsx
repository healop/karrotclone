// app/page.tsx

import SearchBar from '@/components/topbar/SearchBar'
import TopBar from '@/components/DongNaeCommon/TopBar'
import CategorySidebar from './components/DongNaeCommon/CategorySidebar'
import ArticleList from '@/components/articles/ArticleList'
import Navbar from '@/components/topbar/NavBar'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* 콘텐츠 들어가는 영역 */}
        {/* 상단 영역: 제목, 경로, 검색창 */}
        <div className='mb-6 space-y-4'>
          <SearchBar />
          <TopBar />
        </div>
        {/* 본문: 게시글 리스트 */}
        <div className="flex gap-6">
          <CategorySidebar />
          <div className="flex-1">
            <ArticleList />
          </div>
        </div>
      </main>
      </div>
  )
}

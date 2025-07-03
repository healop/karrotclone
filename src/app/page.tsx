// app/page.tsx

import PageLayout from '@/components/layout/PageLayout'
import SearchBar from '@/components/topbar/SearchBar'
import TopBar from '@/components/DongNaeCommon/TopBar'
import CategorySidebar from './components/DongNaeCommon/CategorySidebar'
import ArticleList from '@/components/articles/ArticleList'

export default function HomePage() {
  return (
    <PageLayout>
      {/* 상단 영역: 제목, 경로, 검색창 */}
      <section className="mb-6 space-y-4">
        <SearchBar />
        <TopBar />
      </section>

      {/* 본문: 게시글 리스트 */}
      <section className="flex gap-6">
        <CategorySidebar />
        <div className="flex-1">
          <ArticleList />
        </div>
      </section>
    </PageLayout>
  )
}

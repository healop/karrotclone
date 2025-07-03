'use client'

import { useArticleList } from '@/hooks/queries/useArticleList'
import LifeListItem from '../DongNaeCommon/LifeListItem'

export default function ArticleList() {
  const { data, isLoading, error } = useArticleList()

  if (isLoading) return <div>불러오는 중...</div>
  if (error) return <div>에러가 발생했어요</div>
  if (!data || data.length === 0) return <div>게시글이 없습니다 😢</div>

  return (
    <div className="space-y-4">
      {data.map((article) => (
        <LifeListItem key={article.articleId} article={article} />
      ))}
    </div>
  )
}
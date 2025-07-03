// hooks/queries/usePosts.ts
'use client'
import { useQuery } from '@tanstack/react-query'
import { fetchArticles } from '@/api/Articles'
import { Article } from '@/types/Article'

export const useArticleList = () => {
  return useQuery<Article[]>({
    queryKey: ['articles'],
    queryFn: fetchArticles,
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
  })
}
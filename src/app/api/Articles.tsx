import { Article } from '@/types/Article'

export async function fetchArticles(): Promise<Article[]> {
  const res = await fetch("http://localhost:8080/community/articles")  
  if (!res.ok) throw new Error('Failed to fetch posts')
  console.log("fetchArticles called")
  return res.json()
}
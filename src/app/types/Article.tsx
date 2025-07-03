export interface Article {
  articleId: number
  title: string
  viewCount: number
  likeCount: number
  content: string
  userId: string
  regionId: string
  categoryId: string
  categoryOptions: Array<string>
  version?: number
  tags: string[]
  createdAt: string
  modifiedAt?: string
}
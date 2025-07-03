import { Article } from '@/types/Article'
import { GrView, GrLike } from "react-icons/gr";


type Props = {
  article: Article
}

export default function LifeListItem({ article }: Props) {
  console.log(article, 'Props')
  return (
    <div className="p-4 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow">
      {/* 썸네일 이미지가 있다면 */}
      {article.thumbnailUrl && (
        <img
          src={article.thumbnailUrl}
          alt="썸네일"
          className="w-full h-48 object-cover rounded-md mb-3"
        />
      )}

      {/* 제목 */}
      <h3 className="text-lg font-semibold text-white-700 mb-1">
        {article.title}
      </h3>

      {/* 내용 일부 (길이 제한 or line-clamp 적용 가능) */}
      <p className="text-sm text-white-500 line-clamp-2">
        {article.content}
      </p>

      {/* 지역코드(TODO 지역명) * 카테고리명 * 작성시간(TODO 작성시간 대비 몇 분 전) */}
      <div className="mt-2 text-xs text-gray-400 flex gap-6">
      <span>{`지역명: ${article.regionId} ・ 카테고리: ${article.categoryId} ・ ${article.createdAt}`}</span>

      </div>

      {/* 좋아요, 조회수 아이콘*/}
      <div className="mt-2 flex items-center text-white-500 text-xs">
        <span className="flex items-center mr-4">
          <GrLike className="mr-1" />
          {article.likeCount}
        </span>
        <span className="flex items-center">
          <GrView className="mr-1" />
          {article.viewCount}
        </span>
      </div>
    </div>
  )
}

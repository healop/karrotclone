const categories = [
  '전체',
  '동네행사',
  '맛집',
  '반려동물',
  '운동',
  '생활',
  '편의',
  '분실',
  '실종',
  '병원 / 약국',
  '고민',
  '사연',
  '동네친구',
  '이사 / 시공 / 주거 / 부동산',
  '교육',
  '취미',
  '동네사건사고',
  '동네풍경',
  '미용',
  '임신 / 육아',
  '일반',
]

export default function CategorySidebar() {
  return (
    <aside className="w-64 p-4 border-r space-y-2">
      <h2 className="text-lg font-bold mb-2">카테고리</h2>
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className="w-full text-left text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded transition"
        >
          {cat}
        </button>
      ))}
    </aside>
  )
}

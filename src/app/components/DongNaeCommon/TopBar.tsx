import Link from 'next/link'

export default function TopBar() {
  return (
    <div className="flex flex-col gap-2 mb-4">
      {/* 위치 경로 */}
      <div className="text-sm">
        <Link href="/" className="hover:underline">홈</Link>
        <span className="mx-1 text-gray-400">&gt;</span>
        <Link href="/life" className="mx-1 hover:underline text-gray-500">동네생활</Link>
      </div>
      <div>
        <p className="font-bold text-2xl text-white-500 ">강동구 천호동 동네생활</p>
      </div>
    </div>
  )
}



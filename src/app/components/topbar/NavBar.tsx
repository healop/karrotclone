'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    {/* 네비게이션 */}
    <nav className="hidden md:flex space-x-6 text-sm relative">
      <Link href="/used" className="text-gray-700 hover:text-orange-500">중고거래</Link>
      {/* 부동산 메뉴 */}
      <div
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
      >
        <button className="text-gray-700 hover:text-orange-500">부동산 ▾</button>
        {/* 드롭다운 */}
        {isOpen && (
          <ul onMouseLeave={() => setIsOpen(false)} className="absolute top-full left-0 mt-2 w-40 border rounded shadow transition duration-200 z-10">
            <li><Link href="/property/apartments" className="block px-4 py-2 hover:bg-gray-100">아파트</Link></li>
            <li><Link href="/property/officetels" className="block px-4 py-2 hover:bg-gray-100">오피스텔</Link></li>
            <li><Link href="/property/commercial" className="block px-4 py-2 hover:bg-gray-100">상가</Link></li>
          </ul>
        )}
      </div>
      <Link href="/jobs" className="text-gray-700 hover:text-orange-500">알바</Link>
    </nav>
    </div>
  );
}

'use client';
import { useState } from 'react';
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="max-w-md mx-auto p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">로그인</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
        <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" required />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500"
          >
            {showPassword ? "숨김" : "표시"}
          </button>
        </div>
      </div>
      <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">로그인</button>
      <div className="mt-4 align-items-center flex justify-center gap-4">
        <div className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer">이메일 찾기</div>
        <div className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer">비밀번호 찾기</div>
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={() => signIn("kakao", { callbackUrl: "/" })}
          className="bg-yellow-500 text-white py-2 px-4 rounded"
        >
          카카오로 시작하기
        </button>
      </div>
    </form>
  );
}
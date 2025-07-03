// components/layout/PageLayout.tsx
import { ReactNode } from 'react'
import CategorySidebar from '../DongNaeCommon/CategorySidebar'

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 max-w-6xl mx-auto w-full px-4">
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
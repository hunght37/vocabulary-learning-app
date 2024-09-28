import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white text-2xl font-bold">Vocab Learn</span>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="/dictionary" className="text-base font-medium text-white hover:text-indigo-50">
                Dictionary
              </Link>
              <Link href="/vocabulary-lists" className="text-base font-medium text-white hover:text-indigo-50">
                Vocabulary Lists
              </Link>
              <Link href="/practice" className="text-base font-medium text-white hover:text-indigo-50">
                Practice
              </Link>
              <Link href="/progress" className="text-base font-medium text-white hover:text-indigo-50">
                Progress
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
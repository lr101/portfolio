"use client";

import Link from "next/link";


export default function TopNav() {
  return (
    <header className="bg-gray-800">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-8">
          <h1 className="text-white font-bold text-xl"><Link href="/">Portfolio</Link></h1>
        </div>
        <div>
          <Link
            href="/stick-it-map"
            className="bg-indigo-600 text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Stick-It App
          </Link>
        </div>
      </nav>
    </header>
  );
} 
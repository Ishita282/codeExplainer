"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b bg-white/70 dark:bg-black/70">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-tight">
          🚀 Code Explainer
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <Link href="/features" className="hover:text-black dark:hover:text-white transition">
            Features
          </Link>
          <Link href="/faq" className="hover:text-black dark:hover:text-white transition">
            FAQ
          </Link>
          <Link href="/about" className="hover:text-black dark:hover:text-white transition">
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          
          <Link
            href="/login"
            className="text-sm px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition"
          >
            Login
          </Link>

          <Link
            href="/dashboard"
            className="text-sm px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition"
          >
            Try Free
          </Link>
        </div>
      </div>
    </header>
  );
}
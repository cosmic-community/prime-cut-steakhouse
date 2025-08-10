'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-white">
            Prime Cut
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="/menu" className="text-gray-300 hover:text-white transition-colors">Menu</a>
            <a href="/chefs" className="text-gray-300 hover:text-white transition-colors">Our Chefs</a>
            <a href="/wine" className="text-gray-300 hover:text-white transition-colors">Wine</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a href="/" className="block text-gray-300 hover:text-white transition-colors py-2">Home</a>
            <a href="/menu" className="block text-gray-300 hover:text-white transition-colors py-2">Menu</a>
            <a href="/chefs" className="block text-gray-300 hover:text-white transition-colors py-2">Our Chefs</a>
            <a href="/wine" className="block text-gray-300 hover:text-white transition-colors py-2">Wine</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors py-2">Contact</a>
          </div>
        )}
      </nav>
    </header>
  )
}
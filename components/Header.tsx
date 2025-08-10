'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800">
      <nav className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gradient">
            Prime Cut
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-neutral-300 hover:text-accent-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className="text-neutral-300 hover:text-accent-400 transition-colors duration-200"
            >
              Menu
            </Link>
            <Link 
              href="/wine" 
              className="text-neutral-300 hover:text-accent-400 transition-colors duration-200"
            >
              Wine
            </Link>
            <Link 
              href="/chefs" 
              className="text-neutral-300 hover:text-accent-400 transition-colors duration-200"
            >
              Chefs
            </Link>
            <Link 
              href="/reservations" 
              className="btn-secondary"
            >
              Reservations
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-neutral-300 hover:text-accent-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-neutral-300 hover:text-accent-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="text-neutral-300 hover:text-accent-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                href="/wine" 
                className="text-neutral-300 hover:text-accent-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Wine
              </Link>
              <Link 
                href="/chefs" 
                className="text-neutral-300 hover:text-accent-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Chefs
              </Link>
              <Link 
                href="/reservations" 
                className="btn-secondary inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservations
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
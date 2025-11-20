import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-stake-blue">Stake</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-stake-blue">Products</a>
            <a href="#about" className="text-gray-700 hover:text-stake-blue">About</a>
            <a href="#blog" className="text-gray-700 hover:text-stake-blue">Blog</a>
            <button className="bg-stake-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#products" className="block text-gray-700">Products</a>
            <a href="#about" className="block text-gray-700">About</a>
            <a href="#blog" className="block text-gray-700">Blog</a>
            <button className="w-full bg-stake-blue text-white px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header


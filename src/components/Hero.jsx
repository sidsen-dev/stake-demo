import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          THE CASH BACK<br />
          NETWORK FOR RENTERS.
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-4">
          Let's empower renters.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Credit Building. Cash Back. Flexible rent options.
        </p>
        <p className="text-xl font-semibold text-stake-blue mb-8">
          If rent took your cash, Stake gets it back.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-stake-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="border-2 border-stake-blue text-stake-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero


import React from 'react'

const Cities = () => {
  const cities = [
    { name: 'Dallas', properties: '4,000+', cashBack: '$200' },
    { name: 'Houston', properties: '3,000+', cashBack: '$200' },
    { name: 'Austin', properties: '2,000+', cashBack: '$200' },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          FIND A DEAL ON YOUR NEXT HOME FOR FREE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{city.name}</h3>
              <p className="text-gray-600 mb-1">{city.properties} properties</p>
              <p className="text-2xl font-bold text-stake-blue">{city.cashBack} / average cash back</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="text-stake-blue font-semibold hover:underline">
            Our cities →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cities


import React from 'react'

const Features = () => {
  const features = [
    {
      title: 'UNLIMITED CASH BACK',
      description: 'Cash Back every time you pay rent on time',
      details: [
        'Earn at 5,000+ brands and local restaurants',
        'Works with any debit or credit card',
        'No blackout dates or limits—just real cash'
      ]
    },
    {
      title: 'CREDIT BUILDER',
      description: 'Pay rent on-time and improve your FICO score',
      details: [
        'Rent reported to all major credit bureaus',
        'Only positive reporting; no negative marks for being late or missing payments'
      ]
    },
    {
      title: 'STAKE CHECKING',
      description: 'Checking accounts built for renters*',
      details: [
        'Pay rent, get Cash Back',
        'Express PayCheck: access salary and payroll early',
        'Stake Visa® Debit: earn more in the Stake Neighborhood Network'
      ]
    },
    {
      title: 'STAKE NEIGHBORHOOD NETWORK',
      description: 'Earn Cash Back at 5,000+ neighborhood brands and restaurants',
      details: [
        'Use any debit or credit card',
        'Boost savings instantly—real cash, no points or gimmicks'
      ]
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-lg text-gray-700 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-stake-blue mr-2">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">EXCLUSIVE DEALS JUST FOR RENTERS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Exclusive deals on renter insurance</h4>
              <p className="text-gray-600 text-sm">Access the best deals on renters insurance and protect the things you love.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Exclusive deals on utilities</h4>
              <p className="text-gray-600 text-sm">Access the best deals on rental utilities and save.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Neighborhood Network</h4>
              <p className="text-gray-600 text-sm">Your favorite brands and locations offer exclusive Cash Back offers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features


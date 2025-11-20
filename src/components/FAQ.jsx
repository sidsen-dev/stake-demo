import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is Stake?',
      answer: 'Stake is the Cash Back Network for renters. Where rent takes your cash, we give it back. Sign a lease with us and earn Cash Back, or sign up directly to unlock Cash Back and higher FICO® credit scores when you pay rent. Earn even more Cash Back at over 5,000 brands in the Stake Neighborhood Network when you shop with any debit or credit card.'
    },
    {
      question: 'Cash Back—what\'s the catch?',
      answer: 'There is none. With Stake, there are no points to track, no redemption periods, and no blackout dates. If you earn $100 with Stake, you can transfer it from your Stake Wallet to almost any bank or Venmo instantly. It\'s real cash with no limits on how much you can spend, where, or when.'
    },
    {
      question: 'Are there any extra costs with using Stake?',
      answer: 'No. Claiming your Cash Back is always free. Using the Stake Neighborhood Network is also free—just connect any debit or credit card to start earning. If you want added features like credit building, banking, and flexible rent payments, you can upgrade to Stake Saver, which is free when you activate direct deposit.'
    },
    {
      question: 'How do I become a Stake member?',
      answer: 'Right now, there are two ways to get Stake: either sign a lease through us or live at a property that offers Stake. A waitlist for renters to join directly is coming soon—check back to sign up.'
    },
    {
      question: 'Do you raise the price of rent to offer Cash Back?',
      answer: 'No. Stake does not raise rent. Cash Back is funded by property owners and partners who want members like you to sign leases, pay rent, and renew. They pay Stake to help attract and retain residents. Your rent price does not change.'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          WHAT WOULD YOU LIKE TO KNOW ABOUT STAKE?
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ


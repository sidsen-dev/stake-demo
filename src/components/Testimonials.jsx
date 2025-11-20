import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'LaTangela Hooks',
      date: '12/20/2023',
      text: 'Excellent customer service from this company! Am very proud to be a member of Stake knowing that a very solid team is behind this company who take their time to understand the situation that is present and will work with you to get a resolution. I HIGHLY recommend you register.'
    },
    {
      name: 'Alexander Carter',
      date: '9/29/2023',
      text: 'This App is Good, I love it. I got a $42 rent match for paying my rent on time. I have never seen an app like this. I will definitely refer this app and this service to anyone.'
    },
    {
      name: 'Felicia Henry',
      date: '1/3/2024',
      text: 'Love Stake, we have been living at our new apartment for only a few months and we have gotten so much money back! Stake has been great and so has the staff at our property!'
    },
    {
      name: 'Zhuo Kim',
      date: '11/22/2023',
      text: 'Best app to save money on rent. It helps you build credit as well. Customer service is excellent. Very attentive and definitely take the time to explain everything.'
    },
    {
      name: 'Damian Lewis',
      date: '10/13/2023',
      text: 'Easy to use and accessible. Most of the time rent feels like a loss as far as ROI because you\'re not paying anything off. It definitely helps that Stake assists renters with getting something back out of renting.'
    },
    {
      name: 'Emily Glover',
      date: '12/12/2022',
      text: 'I am so thankful for this app. I mostly use my money saved for gas or home essentials. It\'s reliable and right on time when I need it. Plus, it\'s part of the reason we renewed our lease.'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">TESTIMONIALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-stake-blue rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


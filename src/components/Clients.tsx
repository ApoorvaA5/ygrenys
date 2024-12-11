import React from 'react';
import { ClientLogos } from './ClientLogos';

export function Clients() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, Tech Solutions Ltd",
      content: "India Synergy's strategic insights helped us transform our business operations and achieve remarkable growth.",
      company: "Tech Solutions Ltd"
    },
    {
      name: "Priya Sharma",
      position: "HR Director, Global Industries",
      content: "The corporate training programs delivered by India Synergy have significantly improved our team's performance.",
      company: "Global Industries"
    },
    {
      name: "Amit Patel",
      position: "Managing Director, Innovation Corp",
      content: "Working with India Synergy has been a game-changer for our business development initiatives.",
      company: "Innovation Corp"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our clients' success and their testimonials speak to our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        <ClientLogos />
      </div>
    </section>
  );
}
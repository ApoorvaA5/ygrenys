import React from 'react';
import { CheckCircle } from 'lucide-react';

export function About() {
  const highlights = [
    'Over 15 years of industry experience',
    'Served 100+ satisfied clients',
    'Expert team of consultants',
    'Customized solutions for every business',
    'Proven track record of success',
    'Global business perspective'
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About India Synergy</h2>
            <p className="text-gray-600 mb-6">
              India Synergy is a leading management consulting firm dedicated to helping organizations 
              achieve sustainable growth and excellence. Founded with a vision to bridge the gap 
              between strategy and execution, we bring together deep industry expertise and 
              cutting-edge solutions.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of experienced consultants works closely with clients across various sectors, 
              providing innovative solutions that drive real business impact. We believe in building 
              long-term partnerships and delivering measurable results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Team meeting"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
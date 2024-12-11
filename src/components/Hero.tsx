import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Partner in Business Excellence
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              India Synergy provides comprehensive business solutions with a focus on 
              management consulting, corporate training, and business development.
            </p>
            <a 
              href="#services"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Our Services
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
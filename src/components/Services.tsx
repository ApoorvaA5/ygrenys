import React from 'react';
import { Briefcase, Users, LineChart, Building2, BookOpen, HandshakeIcon } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Management Consulting',
    description: 'Strategic planning, process improvement, and organizational development solutions.'
  },
  {
    icon: Users,
    title: 'Corporate Training',
    description: 'Customized training programs for leadership development and skill enhancement.'
  },
  {
    icon: LineChart,
    title: 'Business Development',
    description: 'Market expansion strategies and growth optimization services.'
  },
  {
    icon: Building2,
    title: 'Corporate Restructuring',
    description: 'Organizational redesign and efficiency improvement solutions.'
  },
  {
    icon: BookOpen,
    title: 'Knowledge Management',
    description: 'Systems and processes for capturing and sharing organizational knowledge.'
  },
  {
    icon: HandshakeIcon,
    title: 'Strategic Partnerships',
    description: 'Building and managing strategic alliances for business growth.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive business solutions tailored to meet your organization's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Our Office</h3>
                <p className="text-gray-600">
                  B/1, Maker Bhavan No. 3,<br />
                  New Marine Lines,<br />
                  Mumbai - 400 020, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">+91 98204 36936</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">info@indiasynergy.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
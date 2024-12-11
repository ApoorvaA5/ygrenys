import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-4 text-sm">
          <a href="tel:+919820436936" className="flex items-center gap-2">
            <Phone size={16} />
            +91 98204 36936
          </a>
          <a href="mailto:info@indiasynergy.com" className="flex items-center gap-2">
            <Mail size={16} />
            info@indiasynergy.com
          </a>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-blue-900">
            India Synergy
          </a>
          
          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <NavLinks mobile />
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks({ mobile }: { mobile?: boolean }) {
  const baseStyles = mobile 
    ? "block py-2 hover:text-blue-600" 
    : "hover:text-blue-600 transition-colors";

  return (
    <div className={mobile ? "flex flex-col" : "flex space-x-8"}>
      <a href="/" className={baseStyles}>Home</a>
      <a href="#services" className={baseStyles}>Services</a>
      <a href="#clients" className={baseStyles}>Clients</a>
      <a href="#contact" className={baseStyles}>Contact</a>
    </div>
  );
}
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

 

import { Features } from './components/Features';
import { Services } from './components/Services';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
     
      <Features />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
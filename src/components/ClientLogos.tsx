import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import TSLogo from "../assets/TandS.png";
import DILogo from "../assets/dixon.png";
import MINILogo from "../assets/mining.png";
import PUMLogo from "../assets/pump.png";
import GUALogo from "../assets/guard.png";




interface ClientLogo {
  name: string;
  industry: string;
  location: string;
  logo: string;
}

const clientLogos: ClientLogo[] = [
  {
    name: "T&S",
    industry: "Commercial Plumbing",
    location: "United States of America",
    logo: TSLogo,
  },
  {
    name: "Finish Thompson Inc.",
    industry: "Pump Industry",
    location: "United States of America",
    logo: PUMLogo,
  },
  {
    name: "Unit Electrical Engineering Ltd.",
    industry: "Mining & Transportation",
    location: "Canada",
    logo: MINILogo,
  },
  {
    name: "Red Valve",
    industry: "Valves",
    location: "United States of America",
    logo: "https://placehold.co/200x100/e2e8f0/475569?text=Red+Valve"
  },
  {
    name: "Anchor Fluid Power",
    industry: "Hydraulics",
    location: "United States of America",
    logo: "https://placehold.co/200x100/e2e8f0/475569?text=Anchor"
  },
  {
    name: "Guard Air",
    industry: "Safety Air Guns",
    location: "United States of America",
    logo: GUALogo,
  },
  {
    name: "Dixon",
    industry: "Valves & Couplings",
    location: "United States of America",
    logo: DILogo,
  },
  {
    name: "Manufacturing Technology Inc.",
    industry: "Friction Welding",
    location: "United States of America",
    logo: "https://placehold.co/200x100/e2e8f0/475569?text=MTI"
  }
];

export function ClientLogos() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Trusted Partners</h3>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="client-logos-swiper"
        >
          {clientLogos.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 object-contain mb-3"
                />
                <div className="text-center">
                  <p className="font-medium text-gray-900">{client.industry}</p>
                  <p className="text-sm text-gray-500">{client.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
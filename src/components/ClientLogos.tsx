import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
    logo: "https://keep.google.com/u/0/media/v2/18k12hMoB2N_J4wF-080H8Vlerx8PoTokhu9oePBCjnWluIKsMj54gRkhGED4LXdC/1AQoJYM99ds9xaUaCF8Ia8zEKYBrf98Bo_TRuzRbqnyyujqVF8S2JZfLBD8hsBwI?sz=512&accept=image%2Fgif%2Cimage%2Fjpeg%2Cimage%2Fjpg%2Cimage%2Fpng%2Cimage%2Fwebp"
  },
  {
    name: "Finish Thompson Inc.",
    industry: "Pump Industry",
    location: "United States of America",
    logo: "https://placehold.co/200x100/e2e8f0/475569?text=FTI"
  },
  {
    name: "Unit Electrical Engineering Ltd.",
    industry: "Mining & Transportation",
    location: "Canada",
    logo: "https://placehold.co/200x100/e2e8f0/475569?text=UEE"
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
    logo: "https://placehold.co/200x100/e2e8f0/475569?text=Guard+Air"
  },
  {
    name: "Dixon",
    industry: "Valves & Couplings",
    location: "United States of America",
    logo: "https://placehold.co/200x100/e2e8f0/475569?text=Dixon"
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
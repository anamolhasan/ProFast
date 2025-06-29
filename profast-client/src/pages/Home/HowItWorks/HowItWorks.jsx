import React from 'react'

import { FaBuilding, FaMoneyBillWave, FaTruck, FaWarehouse } from 'react-icons/fa';


const services = [
  {
    title: "Booking Pick & Drop",
    description:
      "Easily schedule pickups and doorstep delivery for all your parcels with real-time tracking.",
    icon: <FaTruck className="text-green-600 mb-4" size={28} />,
  },
  {
    title: "Cash On Delivery",
    description:
      "Offer your customers convenient payment at the door while you stay assured of secure transactions.",
    icon: <FaMoneyBillWave className="text-green-600 mb-4" size={28} />,
  },
  {
    title: "Delivery Hub",
    description:
      "Use our centralized hubs to manage, sort, and dispatch packages quickly and efficiently.",
    icon: <FaWarehouse className="text-green-600 mb-4" size={28} />,
  },
  {
    title: "Booking SME & Corporate",
    description:
      "Tailored delivery solutions for small businesses and enterprises to streamline your logistics.",
    icon: <FaBuilding className="text-green-600 mb-4" size={28} />,
  },
];


const HowItWorks = () => {
   return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">How it Works</h2>

      <div className="flex justify-center gap-6 py-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/80 rounded-lg shadow-md p-6 flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/4"
          >
            {service.icon}
            <h3 className="font-semibold text-lg mb-2 text-gray-600">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks
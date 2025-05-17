import React from 'react';
import img2 from '../../assets/biryani3.png';

const ServiceData = [
  {
    id: 1,
    img: img2,
    name: "Biryani",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quam possimus aliquid debitis voluptatum cum, esse assumenda fugit, necessitatibus eveniet ipsam ab, animi voluptatibus labore magnam dolores ipsum soluta minus",
  },
  {
    id: 2,
    img: img2,
    name: "Biryani",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quam possimus aliquid debitis voluptatum cum, esse assumenda fugit, necessitatibus eveniet ipsam ab, animi voluptatibus labore magnam dolores ipsum soluta minus",
  },
  {
    id: 3,
    img: img2,
    name: "Biryani",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quam possimus aliquid debitis voluptatum cum, esse assumenda fugit, necessitatibus eveniet ipsam ab, animi voluptatibus labore magnam dolores ipsum soluta minus",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10 bg-white dark:bg-gray-900 transition duration-300">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-8 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Services</h1>
            <p className="text-xs text-gray-500 dark:text-gray-300 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quam possimus aliquid debitis voluptatum cum,
              esse assumenda fugit, necessitatibus eveniet ipsam ab, animi voluptatibus labore magnam dolores ipsum soluta minus!
            </p>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">
            {ServiceData.map(({ id, img, name, description }) => (
              <div
                key={id}
                className="relative bg-white dark:bg-gray-800 hover:bg-yellow-400 dark:hover:bg-yellow-600 pt-20 pb-6 px-6 rounded-2xl shadow-xl transition duration-300 transform hover:scale-105 group cursor-pointer"
              >
                {/* Floating Image */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <img
                    src={img}
                    alt={name}
                    className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md transition duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h2 className="text-lg font-bold group-hover:text-white dark:text-white">
                    {name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-300 group-hover:text-white mt-2 line-clamp-3">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

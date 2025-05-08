import React, { useState } from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/7841969/pexels-photo-7841969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Regional Award Ceremony",
      category: "Awards"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Client Seminar on Retirement Planning",
      category: "Events"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/6348118/pexels-photo-6348118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Annual Chairman's Club Recognition",
      category: "Awards"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/7841968/pexels-photo-7841968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Training New Agents",
      category: "Training"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "International MDRT Conference",
      category: "Events"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/5673489/pexels-photo-5673489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Best Agent Trophy 2024",
      category: "Awards"
    }
  ];

  const [filter, setFilter] = useState('All');
  
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My <span className="text-[#005DA6]">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-[#F7CB05] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A glimpse into my professional journey, achievements and special moments from 25 years in the insurance industry.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            {['All', 'Awards', 'Events', 'Training'].map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-[#005DA6] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#005DA6] bg-[#005DA6]/10 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Recognition & Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#005DA6] mb-2">15+</div>
              <p className="text-gray-600">Annual Awards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#005DA6] mb-2">MDRT</div>
              <p className="text-gray-600">Qualified Member</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#005DA6] mb-2">7x</div>
              <p className="text-gray-600">Chairman's Club</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#005DA6] mb-2">98%</div>
              <p className="text-gray-600">Client Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
'use client'
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface GalleryItem {
  _id: string;
  title: string;
  url: string;
  category: string;
  date: string;
}

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
        const data = await response.json();

        if (response.ok) {
          setGalleryItems(data.images);
        } else {
          setError(data.message || 'Failed to fetch images');
        }
      } catch (err) {
        console.error('Error fetching images:', err);
        setError('Failed to fetch images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading gallery...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  // If no images are found, show a message
  if (galleryItems.length === 0) {
    return (
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">No images found in the gallery.</div>
        </div>
      </section>
    );
  }

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
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === category
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
              key={item._id}
              className="relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={`/api/images/${item._id}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#005DA6] bg-[#005DA6]/10 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Recognition & Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#005DA6] mb-2">30+</div>
              <p className="text-gray-600">Awards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#005DA6] mb-2">2x MDRT</div>
              <p className="text-gray-600">Qualified Member</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#005DA6] mb-2">19x</div>
              <p className="text-gray-600">Chairman&apos;s Club</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#005DA6] mb-2">98%</div>
              <p className="text-gray-600">Client Retention</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-6xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={`/api/images/${selectedImage._id}`}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold text-gray-800">{selectedImage.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {new Date(selectedImage.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
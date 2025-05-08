import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "Business Owner, Delhi",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "Anil has been my insurance advisor for over 12 years. His expertise and personal attention to my family's needs has been exceptional. When my father had a medical emergency, he personally helped us with the claim process."
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Doctor, Mumbai",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "As a busy medical professional, I needed someone who could handle my financial planning efficiently. Anil understood my requirements perfectly and designed a customized insurance portfolio that provides excellent coverage for my family."
  },
  {
    id: 3,
    name: "Suresh Reddy",
    position: "IT Professional, Bangalore",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "Anil's knowledge about different LIC policies is remarkable. He helped me choose the right plan for my children's education and my retirement. What sets him apart is his prompt service and regular policy reviews to ensure we stay on track."
  },
  {
    id: 4,
    name: "Meera Krishnan",
    position: "Teacher, Chennai",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4,
    text: "I've been working with Anil for my family's insurance needs for over 8 years. His honest advice and detailed explanations about policy benefits helped me make informed decisions. I appreciate his patience and commitment to client service."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-[#005DA6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client <span className="text-[#F7CB05]">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-100 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about their experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="p-8 md:p-10">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.position}</p>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${
                                  i < testimonial.rating 
                                    ? 'text-[#F7CB05] fill-[#F7CB05]' 
                                    : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={goToPrev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white text-[#005DA6] rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={goToNext} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white text-[#005DA6] rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
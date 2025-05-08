import React from 'react';
import { ShieldCheck, Clock, Award, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-[#003b6f] to-[#005DA6] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50 transform skew-y-2 -translate-y-5"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#F7CB05]/20 blur-xl"></div>
        <div className="absolute top-40 left-10 w-40 h-40 rounded-full bg-[#F7CB05]/10 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Secure Your Future With Confidence
            </h1>
            <p className="text-xl text-gray-100">
              With 25 years of trusted experience in LIC policies, I help families across India achieve financial security and peace of mind.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block bg-[#F7CB05] text-[#005DA6] font-semibold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#e7bd00]"
              >
                Consult Now
              </a>
              <a 
                href="#services" 
                className="inline-block ml-4 bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white/10 transition-all duration-300"
              >
                Explore Plans
              </a>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="bg-white p-6 rounded-lg shadow-xl relative z-10 transform rotate-2 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional LIC Agent" 
                className="w-full h-auto rounded"
              />
            </div>
            <div className="absolute inset-0 bg-[#F7CB05] rounded-lg shadow-xl transform -rotate-3 z-0"></div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="h-10 w-10 text-[#F7CB05]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Protection</h3>
            <p className="text-gray-100">Securing families with comprehensive coverage</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <Clock className="h-10 w-10 text-[#F7CB05]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">25 Years</h3>
            <p className="text-gray-100">Decades of trusted experience in the industry</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <Award className="h-10 w-10 text-[#F7CB05]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Top Agent</h3>
            <p className="text-gray-100">Multiple-time award winner for excellence</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
            <div className="flex justify-center mb-4">
              <Phone className="h-10 w-10 text-[#F7CB05]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-100">Always available to assist clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
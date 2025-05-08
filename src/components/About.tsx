import React from 'react';
import { CheckCircle, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-[#005DA6]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#F7CB05] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With 25 years of dedicated service as an LIC agent, I've helped thousands of families secure their financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white p-4 rounded-lg shadow-xl relative z-10">
              <img 
                src="https://images.pexels.com/photos/5588490/pexels-photo-5588490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="25 Years of Experience" 
                className="w-full h-auto rounded"
              />
            </div>
            <div className="absolute top-10 -right-10 bg-[#F7CB05] p-4 rounded-lg shadow-lg z-20">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#005DA6]">25+</h3>
                <p className="text-[#005DA6] font-medium">Years Experience</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#005DA6] p-6 rounded-lg shadow-lg z-20">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white">5000+</h3>
                <p className="text-white/90 font-medium">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Anil Kumar: Your Trusted LIC Advisor
            </h3>
            <p className="text-gray-600">
              Since 1998, I've been helping individuals and families across India navigate the complex world of life insurance. My mission is to provide personalized, honest advice that ensures financial security for you and your loved ones.
            </p>
            <p className="text-gray-600">
              As a MDRT qualified agent with multiple awards for performance excellence, I bring deep expertise and a client-first approach to every consultation.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#005DA6] mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Expert Policy Selection</h4>
                  <p className="text-gray-600">Personalized recommendations based on your specific needs and future goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#005DA6] mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Claim Settlement Assistance</h4>
                  <p className="text-gray-600">Seamless support during the claim process to ensure timely settlements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#005DA6] mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Lifelong Relationship</h4>
                  <p className="text-gray-600">Ongoing support and policy reviews to adapt to your changing life circumstances.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-block bg-[#005DA6] text-white font-semibold py-3 px-8 rounded-md shadow hover:bg-[#004a85] transition-all duration-300"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300">
            <Award className="h-12 w-12 text-[#F7CB05] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Top Performer</h3>
            <p className="text-gray-600">Consistently recognized among the top 1% of LIC agents nationwide.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300">
            <TrendingUp className="h-12 w-12 text-[#F7CB05] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">₹100+ Crore</h3>
            <p className="text-gray-600">Total sum assured managed for clients across various policies.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-all duration-300">
            <CheckCircle className="h-12 w-12 text-[#F7CB05] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">98% Claim Success</h3>
            <p className="text-gray-600">Excellent track record of successful claim settlements for clients.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
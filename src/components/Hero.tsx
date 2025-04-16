import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert Academic Writing Support for ISMT Students
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Get professional help with your assignments, essays, and research papers. Our expert writers deliver high-quality work that meets your requirements.
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Professional ISMT Writers',
                'Plagiarism-Free Content',
                '24/7 Support',
                'On-time Delivery'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition">
              Order Now
            </button>
            <button className="bg-gray-100 text-blue-600 px-8 py-3 rounded-full text-lg hover:bg-gray-200 transition shadow-lg">
                Learn More
              </button>
            
          </div>
          <div className="md:w-1/2">
            <img 
              src="1635419489032.png"
              alt="Students studying"
              loading='lazy'
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Pass',
    price: '5,000',
    unit: 'per assignment',
    features: [
      '7 Days Delivery',
      'Free Plagiarism Report',
      '24/7 Support',
      'Unlimited Revisions',
    ],
    popular: false
  },
  {
    name: 'Distinction',
    price: '10,000',
    unit: 'per assignmnet',
    features: [
      '14 Days Delivery',
      'Free Plagiarism Report',
      '24/7 Priority Support',
      'Unlimited Revisions',
      'Expert Writer',
    ],
    popular: true
  },
  {
    name: 'Merit',
    price: '7,000',
    unit: 'per assignment',
    features: [
      '10 Days Delivery',
      'Free Plagiarism Report',
      '24/7 VIP Support',
      'Unlimited Revisions',
      'Expert Writer',
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs and deadline requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-lg p-8 ${
                plan.popular 
                  ? 'bg-blue-600 text-white shadow-xl scale-105' 
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm opacity-80"> {plan.unit}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <Check className={`h-5 w-5 ${plan.popular ? 'text-white' : 'text-blue-600'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-2 rounded-full transition ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
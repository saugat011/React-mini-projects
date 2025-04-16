import React from 'react';
import { ClipboardList, Send, ThumbsUp, Users } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="h-8 w-8 text-blue-600" />,
    title: 'Submit Requirements',
    description: 'Fill out our simple order form with your assignment details and requirements.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Writer Assignment',
    description: 'We match you with an expert writer specialized in your subject area.'
  },
  {
    icon: <Send className="h-8 w-8 text-blue-600" />,
    title: 'Work Delivery',
    description: 'Receive your completed assignment within your specified deadline.'
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-blue-600" />,
    title: 'Review & Approve',
    description: "Review your work and request revisions if needed until you're satisfied."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting help with your assignments is easy with our simple 4-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
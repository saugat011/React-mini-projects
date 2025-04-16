import React from 'react';
import { BookOpen, FolderGit2, FileText, GraduationCap, PenTool, Search } from 'lucide-react';

const services = [
  {
    icon: <FolderGit2 className="h-8 w-8 text-blue-600" />,
    title: 'Assignment Project',
    description: 'Build your Projects for your assignment (Progarmming, Database, Networking, Web Technology)'
  },
  {
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    title: 'Assignment Help',
    description: 'Professional assistance with any type of academic assignment.'
  },
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: 'Research Papers',
    description: 'In-depth research and well-structured academic papers.'
  },
  {
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    title: 'Dissertation Writing',
    description: 'Complete dissertation writing and consulting services.'
  },
  {
    icon: <PenTool className="h-8 w-8 text-blue-600" />,
    title: 'Proofreading',
    description: 'Professional editing and proofreading to perfect your work.'
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
    title: 'Coursework Help',
    description: 'Expert assistance with all types of coursework assignments.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of academic writing services to help you excel in your studies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
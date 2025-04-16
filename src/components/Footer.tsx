import React from 'react';
import { Handshake } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Handshake className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">AssignmentSathi</span>
            </div>
            <p className="text-gray-400">
              Professional academic writing services for ISMT students.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-500">Essay Writing</a></li>
              <li><a href="#" className="hover:text-blue-500">Assignment Help</a></li>
              <li><a href="#" className="hover:text-blue-500">Dissertation Writing</a></li>
              <li><a href="#" className="hover:text-blue-500">Coursework Help</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-500">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>assignmentsathi123@gmail.com</li>
              <li>+977 9846966350</li>
              <li>24/7 Live Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} 
              <span className="text-blue-500 font-semibold"> AssignmentSathi</span>. 
              All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

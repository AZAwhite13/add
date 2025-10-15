import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              Uzum Market
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`hover:text-blue-600 transition-colors font-medium ${
                location.pathname === '/' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/products" 
              className={`hover:text-blue-600 transition-colors font-medium ${
                location.pathname === '/products' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
              }`}
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
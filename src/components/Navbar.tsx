import { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { Link } from 'react-scroll';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Chefs', to: 'chefs' },
    { name: 'Menu', to: 'menu' },
    { name: 'Blog', to: 'blog' },
    { name: 'FAQ', to: 'faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <span className="font-display text-2xl font-bold text-primary">Apni Meal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-gray-700 hover:text-primary font-medium transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingBag className="w-5 h-5 text-gray-700" />
            </button>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 flex items-center space-x-2 px-3">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="flex-1 bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors text-center cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}